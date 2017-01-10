var urlList = {},
    icons = {
        green: 'icons/sansursavan-browseraction-g-64.png',
        red: 'icons/sansursavan-browseraction-r-64.png',
    };

chrome.storage.local.get('urlList', setWebRequestListener);

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

function setWebRequestListener(result) {
    if (!result.urlList) {
        getNewList();
        return;
    }

    if (chrome.webRequest.onBeforeRequest.hasListener(redirect)) {
        chrome.webRequest.onBeforeRequest.removeListener(redirect);
    }

    urlList = result.urlList;
    var urlListArray = [];

    for (var i in urlList) {
        urlListArray.push('http://' + i + '/*');
        urlListArray.push('https://' + i + '/*');
        urlListArray.push('http://www.' + i + '/*');
        urlListArray.push('https://www.' + i + '/*');
    }

    chrome.webRequest.onBeforeRequest.addListener(
        redirectToAsk, {
            urls: urlListArray,
            types: ['main_frame'],
        }, ['blocking']
    );

    chrome.webRequest.onBeforeRequest.addListener(
        redirectToUncensored, {
            urls: urlListArray,
            types: [
                'sub_frame',
                'stylesheet',
                'script',
                'image',
                'object',
                'xmlhttprequest',
                'xbl',
                'xslt',
                'ping',
                'beacon',
                'xml_dtd',
                'font',
                'media',
                'websocket',
                'csp_report',
                'imageset',
                'web_manifest',
                'other',
            ],
        }, ['blocking']
    );
}

function redirectToAsk(requestDetails) {
    redirect(requestDetails, true);
}

function redirectToUncensored(requestDetails) {
    redirect(requestDetails, false)
}

function redirect(requestDetails, askFirst) {
    let url = requestDetails.url,
        a = document.createElement('a'),
        newUrl,
        type;

    a.href = url;

    let censoredDomain = a.host;

    if (!urlList[censoredDomain]) {
        // how could it happen?
        return;
    } else if (urlList[censoredDomain] === 'proxy') {
        newUrl = 'http://proxy.sansursavan.org/index.php?url=' + url;
        type = 'proxy';
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
        type = 'redirect';
        chrome.browserAction.setBadgeText({
            text: 'rdct',
            tabId: requestDetails.tabId,
        });
    }

    if (askFirst) {
        var redirectUrl = '/' + type + '.html?newUrl=' + encodeURIComponent(newUrl) + '&oldUrl=' + encodeURIComponent(url);

        chrome.tabs.update(requestDetails.tabId, {
            url: redirectUrl,
        });

        return {
            cancel: true,
        };
    } else {
        return {
            redirectUrl: newUrl,
        };
    }
}

function reqListener() {
    urlList = JSON.parse(this.responseText);

    setWebRequestListener({
        urlList: urlList
    });

    // write to storage
    chrome.storage.local.set({
        urlList: urlList,
    });

    // reload extension to use new data
    // chrome.runtime.reload();
    // no we cannot reload. it is not supported FF < 51
}

function getNewList() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://raw.githubusercontent.com/kolektif/sansur-listesi/master/liste.json");
    oReq.send();
}

setTimeout(getNewList, 10 * 60 * 1000); // check new list every ten minutes
