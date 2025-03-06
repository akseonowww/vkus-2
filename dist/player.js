/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/contentScript/player/player.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "player": () => (/* binding */ player)
/* harmony export */ });
let player = {
    is: '[class*="AudioPlayerBlock"] section',
    in: "[data-testid='audioplayerblocksectionslayout']",
    buttons: {
        is: '[class*="vkitAudioPlayerPlaybackBody__audioButtons"]',
        // is: '[data-testid="audioplayerplaybackbody-audiobutton"]',
        add: '[data-testid="audio-player-block-add-audio-from-my-music-button"]',
        remove: '[data-testid="audio-player-block-delete-audio-to-my-music-button"]',
        blacklist: '[aria-label="Не нравится"]',
        recoms: '[href*="/audio?audio_id"]',
        lyric: '[data-testid="audio-player-block-lyrics-button"]',
    },
    controls: {
        is: '[data-testid="audioplayerblocksectionslayout-playbackcontrols"]',
        main: {
            is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackControls"]',
            prev: '[data-testid="audio-player-controls-backward-button"]',
            play: '[data-testid="audio-player-controls-state-button"]',
            next: '[data-testid="audio-player-controls-forward-button"]',
        },
        other: {
            is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackButtonsContainer"]',
            shuffle: '[data-testid="audio-player-block-shuffle-button"]',
            repeat: '[data-testid="audio-player-block-repeat-button"]',
        },
        user: {
            is: '[data-testid="audioplayerblocksectionslayout-usercontrols"]',
            broadcastOn: '[data-testid="audio-player-block-broadcast-enable-button"]',
            broadcastOff: '[data-testid="audio-player-block-broadcast-disable-button"]',
            share: '[data-testid="audio-player-block-share-button"]',
            sound: {
                is: '[class*="AudioPlayerUserControlsContainer-module__volumeSlider"]',
                in: '[data-testid="audioplayervolumeslider"]',
                bar: '[data-testid="audioplayervolumeslider"] > div',
                icon: '[data-testid="audioplayervolumeslider"] button',
            },
        },
    },
    info: {
        is: '[data-testid="audioplayerblocksectionslayout-playbackbody"]',
        cover: {
            is: '[data-testid="audioplayerplaybackbody-cover"]',
            image: '[data-testid="audioplayerplaybackbody-cover"] > div',
        },
        text: {
            is: '[data-testid="audioplayerplaybackbody-audioinfo"]',
            in: '[data-testid="audioplayeraudioinfo"][class*="AudioPlayerAudioInfo-module__root"]',
            title: '[class*="AudioPlayerAudioInfo__title"] > div',
            titleType: '[class*="AudioPlayerAudioInfo-module__title"] > div > span',
            artist: '[data-testid="audioplayeraudioinfo-subtitle"] > div',
            badge: '[data-testid="audioplayeraudioinfo-ageratedbadge"]',
        },
    },
    progressbar: {
        is: '[data-testid="audioplayerplaybackbody-progressbar"]',
        value: ".Slider-module__sliderSizeL--JOS_t .Slider-module__fill--Gxkxh",
        download: '[class*="Slider-module__fill"][class*="Slider-module__fillTransparent"]',
        bg: '[class*="Slider-module__sliderSizeL"]',
        timer: '[data-testid="audioplayerplaybackbody-progresstime"]',
    },
    header: {
        controls: {
            is: '#page_header [data-testid="audioplayerblocksectionslayout-playbackcontrols"]',
            main: {
                is: '[class*="AudioPlayerPlaybackControlsContainer-module__playbackControls"]',
                prev: '#page_header [accesskey="j"]',
                play: '#page_header [data-testid="audio-player-controls-state-button"]',
                next: '#page_header [accesskey="l"]',
            },
        },
        info: {
            is: '#page_header [data-testid="audioplayerblocksectionslayout-playbackbody"]',
            cover: {
                is: '#page_header [data-testid="audioplayerplaybackbody-cover"]',
                image: '#page_header [data-testid="audioplayerplaybackbody-cover"] > div',
            },
            text: {
                is: '#page_header [data-testid="audioplayerplaybackbody-audioinfo"]',
                in: '#page_header [data-testid="audioplayeraudioinfo"][class*="AudioPlayerAudioInfo-module__root"]',
                title: '#page_header [class*="AudioPlayerAudioInfo-module__title"] > div',
                titleType: '#page_header [class*="AudioPlayerAudioInfo-module__title"] > div > span',
                artist: '#page_header [data-testid="audioplayeraudioinfo-subtitle"] > div',
                badge: '#page_header [data-testid="audioplayeraudioinfo-ageratedbadge"]',
            },
        },
    },
};

/******/ })()
;
//# sourceMappingURL=player.js.map