chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {urlContains: 'jinteki.net'}
                })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.contextMenus.create({
    title: "Add friend: %s",
    contexts:["selection"],
    id: "addFriendContext"
});

chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId === "addFriendContext") {
        addFriend(info.selectionText);
    }
});

chrome.runtime.onMessage.addListener(function(request) {
    if (request.action == "user-page") {
        chrome.tabs.create({url: "pages/user.html?user=" + request.user});
    }
});
