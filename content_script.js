// Get some information about the page
var pageInfo = {
    "title": document.title,
    "url": window.location.href,
};

// Send the information back to the extension for checking
chrome.extension.sendRequest(pageInfo);
