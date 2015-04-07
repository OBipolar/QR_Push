chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action === "prefs") {
            var prefString = localStorage.prefs;
            if (prefString === undefined) {
                sendResponse(undefined);
            } else {
                sendResponse(JSON.parse(localStorage.prefs));
            }
        }
    });

function click(e) {
    chrome.tabs.query({currentWindow:true, active:true}, function(tabs) {
        console.log("background.js : click()");
    });
}

chrome.browserAction.onClicked.addListener(click);
