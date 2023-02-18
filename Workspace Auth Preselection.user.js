// ==UserScript==
// @name         Workspace Auth Preselection
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Preselects a specific authentication method from a dropdown on page load to make logging in faster/less annoying.
// @include        https://workspace.*/logon/LogonPoint/tmindex.html
// ==/UserScript==

(function() {
    'use strict';

    // Wait for an element to become available before calling a function, as the site's auth loads async compared to the rest of the page and thus won't exist immediately.
    function waitForElement(selector, timeout, callback) {
        const interval = 100; // 200 ms, as it doesn't need to be instant
        const timer = setInterval(function() {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(timer);
                callback(element);
            }
            else if (timeout <= 0) {
                clearInterval(timer);
            }
            else {
                timeout -= interval;
            }
        }, interval);
    }

    // Set the "Azure MFA" option as the preselected option in a select element
    function preselectOption(selectElement, optionValue) {
        const option = selectElement.querySelector(`option[value="${optionValue}"]`);
        if (option) {
            option.selected = true;
        }
    }
  
  	const timeout_period = 5000; // attempts this script for at most 5 seconds (testing indicated 3 seconds was more than sufficient, but this can be adjusted)
    const id_of_dropdown_element = "domain"; // use inspect element on the page if use-case differs
  	const do_auto_login = true;
  	const id_of_login_button_element = "loginBtn"; // use inspect element on the page if use-case differs. Can be left empty if do_auto_login is false.
    const desired_dropdown_value = "Azure MFA"; // the value in the dropdown you want to be preselected

    // Wait for the "domain" select element to become available
    waitForElement(`#${id_of_dropdown_element}`, timeout_period, function(selected_id_element) {
        // Set the "Azure MFA" option as the preselected option
        preselectOption(selected_id_element, desired_dropdown_value);
      	
      	// Automatically hit the Log On button, as the browser can prefill login info.
      	if (do_auto_login) { // only check the element/trigger it if auto login functionality is desired
          const login_button = document.getElementById(id_of_login_button_element);
          if (login_button) {
            login_button.click();
          }
        }
    });
})();
