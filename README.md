# WorkspaceAuthPreselection
Preselects a specific authentication method from a dropdown on page load to make logging in faster/less annoying via Greasemonkey (javascript)

# User Notes:
To customize the script for your use case, you may need to modify the following parameters:

- `timeout_period`: If the page takes longer to load the dropdown in question, then this value may need to be adjusted higher.
- `id_of_element`: Use the "Inspect Element" feature (right-click on the page item -> Inspect Element) to find the "id" of the dropdown element. Replace "domain" with whatever the element is labeled with. If it is not labeled, then some additional modifications may be necessary, which are not covered here.
- `desired_dropdown_value`: The value that you want to be loaded in the dropdown element.

Make sure to update these parameters as needed to ensure that the script works correctly for your specific use case.
