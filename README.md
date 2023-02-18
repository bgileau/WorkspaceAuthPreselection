# WorkspaceAuthPreselection
Preselects a specific authentication method from a dropdown on page load to make logging in faster/less annoying via Greasemonkey (javascript)

# User Notes:
If your exact use case differs from mine, then you may need to modify the timeout_period, id_of_element, and/or desired_dropdown_value.

timeout_period: If the page takes longer to load the dropdown in question, then this value may need to be adjusted higher.
id_of_element: use inspect element (right click on page item -> inspect element) on the dropdown to find the "id" of the element. Replace "domain" with whatever the element is labeled with. If it is not labeled, then a little more modification is needed than is covered here.
desired_dropdown_value: value in the <option> element that you want to be loaded.
