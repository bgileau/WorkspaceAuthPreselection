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

    const timeout_period = 5000  // attempts this script for at most 5 seconds (testing indicated 3 seconds was more than sufficient, but this can be adjusted)

    // Wait for the "domain" select element to become available
    waitForElement('#domain', timeout_period, function(domainSelect) {
        // Set the "Azure MFA" option as the preselected option
        preselectOption(domainSelect, "Azure MFA");
    });
})();