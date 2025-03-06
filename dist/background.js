/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    console.log(msg);
    console.log(sender);
    sendResponse("Front the background Script");
});
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.get(['theme']).then((result) => {
        console.log('Новая тема:', result.theme);
        if (!result.theme) {
            chrome.storage.local.set({ theme: "default" }, () => {
                console.log('Настройка сохранена');
            });
        }
    });
    // Перезагружаем вкладки с указанным URL
    chrome.tabs.query({ url: "*://vk.com/*" }, (tabs) => {
        tabs.forEach((tab) => {
            chrome.tabs.reload(tab.id);
        });
    });
});

/******/ })()
;
//# sourceMappingURL=background.js.map