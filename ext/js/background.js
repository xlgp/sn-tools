chrome.action.onClicked.addListener(function (tab) {
    console.log(tab, chrome.runtime.id);
    let url = 'chrome-extension://' + chrome.runtime.id + "/index.html";
    chrome.tabs.create({
        url
    }, function callback() { });
});