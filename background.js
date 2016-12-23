var urlList = {},
    icons = {
        green: 'icons/sansursavan-browseraction-g-64.png',
        red: 'icons/sansursavan-browseraction-r-64.png',
    };


chrome.storage.local.get('urlList', (result) => {
chrome.storage.local.get('notRunningForTheFirstTime', (result) => {
    if (!result.notRunningForTheFirstTime) {
        chrome.tabs.create({
            url: 'welcome.html',
            active: true,
        });
    } else {
        chrome.storage.local.set({
            notRunningForTheFirstTime: true
        });
    }
});
    if (!result.urlList) {
        getNewList();
        return;
    }

    urlList = result.urlList;
    urlListArray = [];

    for (var i in urlList) {
        urlListArray.push('http://' + i + '/*');
        urlListArray.push('https://' + i + '/*');
        urlListArray.push('http://www.' + i + '/*');
        urlListArray.push('https://www.' + i + '/*');
    }

    chrome.webRequest.onBeforeRequest.addListener(
        redirect, {
            urls: urlListArray
        }, ["blocking"]
    );
});
}

function redirect(requestDetails) {
    let url = requestDetails.url,
        a = document.createElement('a'),
        newUrl;

    a.href = url;

    let censoredDomain = a.host;

    if (!urlList[censoredDomain]) {
        // how could it happen?
        return;
    } else if (urlList[censoredDomain] === 'proxy') {
        newUrl = 'http://proxy.sansursavan.org/index.php?url=' + url;
        chrome.browserAction.setIcon({
            path: icons.red,
            tabId: requestDetails.tabId,
        });
        chrome.browserAction.setTitle({
            title: 'Bu sayfayı vekil sunucu (proxy) bağlantısı ile geziyorsunuz',
            tabId: requestDetails.tabId,
        });
        chrome.browserAction.setBadgeText({
            text: 'prxy',
            tabId: requestDetails.tabId,
        });
    } else {
        newUrl = url.replace(censoredDomain, urlList[censoredDomain]);
        chrome.browserAction.setBadgeText({
            text: 'rdct',
            tabId: requestDetails.tabId,
        });
    }

    return {
        redirectUrl: newUrl
    };
}

function reqListener() {
    // write to storage
    chrome.storage.local.set({
        urlList: JSON.parse(this.responseText)
    });

    // reload extension to use new data
    chrome.runtime.reload();
}

function getNewList() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://raw.githubusercontent.com/kolektif/sansur-listesi/master/liste.json");
    oReq.send();
}

setTimeout(getNewList, 10 * 60 * 1000); // check new list every ten minutes
