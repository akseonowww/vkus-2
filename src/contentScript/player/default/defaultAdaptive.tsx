import { player } from "../player";

export let playerDefaultAdaptive = (statusModeDev = !1) => {
   const modeDev = statusModeDev
      ? `
.vkus-player-new ${player.is},
.vkus-player-new ${player.is} *,
.vkus-player-new ${player.info.text.in},
.vkus-player-new ${player.info.cover.is}:active,
.vkus-player-new ${player.controls.is},
.vkus-player-new ${player.controls.user.is},
.vkus-player-new ${player.controls.user.is} div:has(> button),
.vkus-player-new ${player.controls.user.is} > div > div:last-child,
.vkus-player-new ${player.controls.other.is},
.vkus-player-new ${player.controls.other.is} button,
.vkus-player-new ${player.progressbar.is},
.vkus-player-new ${player.buttons.is},
.vkus-player-new ${player.buttons.is} button,
{
   box-sizing: border-box;
   border: 1px solid #E64646;
}
   .vkus-player-new ${player.is} {
      border: 2px solid #447BBA;
   }
   .vkus-player-new ${player.controls.is} {
      border: 2px solid #696969;
   }
   .vkus-player-new ${player.controls.main.is} button {
      border: 2px solid red;
   }

   /* Репит+Порядок */ 
   .vkus-player-new ${player.controls.other.is} {
      border: 2px solid #A55FFF;
   }
   .vkus-player-new ${player.controls.other.is} button {
      border: 2px solid #F45FFF;
   }
   .vkus-player-new ${player.controls.other.is} button {
      border: 2px solid #F45FFF;
   }

   .vkus-player-new ${player.controls.user.is} {
      border: 2px solid #0077FF;
   }

   /* группа кнопок рядом с микшером */ 
   .vkus-player-new ${player.controls.user.is} > div > div:last-child {
      border: 1px solid green;
   }

   /* КНОПКИ */
   .vkus-player-new ${player.controls.user.is} div:has(> button) {
      border: 2px solid #4fd5df;   
   }

   /* ДОРОГА ТРЕКА */
   .vkus-player-new ${player.progressbar.is} {      
      border: 2px solid #59ADFF;
   }

   /*=======================*/
   /* ДОП КНОПКИ (СПРАВА ВВЕРХУ) */
   /*=======================*/
   .vkus-player-new ${player.buttons.is} {
      border: 2px solid #005b0a;
   }
   /*кнопка нажата*/
   .vkus-player-new .div-click-button {
      border: 2px solid red;
   }

   .vkus-player-new ${player.info.text.is} {
      border: 2px solid #FFC700;
   }
   .vkus-player-new ${player.info.cover.is}:active {
      border: 2px solid red;
   }
   .vkus-player-new ${player.info.cover.image}:hover {
      border: 2px solid #f1f1f126; 
   }
   /* COVER */
   .vkus-player-new ${player.info.cover.is} {
      border: 2px solid #FF7A00;
   }

   /* Анимация фона */
   .vkus-player-new ${player.info.cover.image} > div.animate {
      border: 2px solid red;
   }

   /* & ОПСИАНИЕ ТРЕКА */
   .vkus-player-new ${player.info.is} {
      border: 2px solid #FF5F5F;
   }
`
      : "";

   // ======================
   // Контейнер
   // ======================
   let is = `
   :root {
      --progressbar: 4px;
      --progressbar-point: 8px;
      --cover-size: 88px;
      /* --cover-radius: 12px; */
      --cover-radius: var(--vkui--size_border_radius--regular);
      --title-size: 14px;
      --artist-size: 14px;
   }
   #page_layout .vkus-player-new  ${player.is} {
      padding: 0;
      z-index: 100;
   }

   #page_layout .vkus-player-new ${player.in} {
      display: flex;
      height: 120px; 
      padding: 16px;
   }

`;

   // ======================
   // Инфа
   // ======================
   let info = `
   #page_layout .vkus-player-new ${player.info.is} {
      width: 100%;
   } 

   #page_layout .vkus-player-new ${player.info.text.is} {
      height: 100%;
      width: 70%;
   }

   /* Название трека */ 
   .vkus-player-new ${player.info.text.title} a {
      font-size: var(--title-size);
      line-height: normal;
      /*font-weight: 600;*/   
   }
   .vkus-player-new ${player.info.text.artist} {
      font-size: var(--artist-size);
      line-height: normal;
      font-weight: 400;
   }

   /*================================*/
   /* Explicit Content */
   /*================================*/
   .vkus-player-new ${player.info.text.badge} {
      position: relative;
   }
   .vkus-player-new ${player.info.text.badge} svg {
      font-size: 20px;
      padding: 0;
      cursor: pointer;
   	translate: 4px -2.6px;
      min-width: 15px;  
      min-height: 15px;
   }
   .vkus-player-new ${player.info.text.badge}::before {
      content: "Explicit Content — содержит ненормативную лексику.";
      position: absolute;
      top: 0;
      right: -208px;
      text-align: left;
      width: 200px;
      background: #333;
      color: #fff;
      font-size: 14px;
      border-radius: 8px;
      padding: 12px 14px;
      box-sizing: border-box;
      z-index: 10;
      transition: all .5s;
      opacity: 0;
      transform: translate(-104px, -30px) scale(0);
      /* background-size: contain; */
   }
   .vkus-player-new ${player.info.text.badge}:hover::before {
      opacity: 1;   
      transform: translate(0, 0) scale(1);
   }
`;

   // ======================
   // Обложка
   // ======================
   let cover = `
#page_layout .vkus-player-new ${player.info.cover.is} {
   margin-right: 12px;
   padding-right: 0;
   transition: transform 0.7s, background-image 0.7s;
   transition: all 0.7s;
}
#page_layout .vkus-player-new ${player.info.cover.is} {
   cursor: pointer;
}
#page_layout .vkus-player-new ${player.info.cover.image} {
   height: var(--cover-size); width: var(--cover-size); 
   border-radius: var(--cover-radius);
   position: relative;
   z-index: 3;
   transition: transform 0.7s, scale .5s, translateX .6s, 
   border-radius 0.2s, z-index 0.7s;
}
#page_layout .vkus-player-new ${player.info.cover.image} img { 
   transition: all .5s;
}   
#page_layout .vkus-player-new ${player.info.cover.image}:has(img):hover {
   border-radius: 2px;
}
#page_layout .vkus-player-new ${player.info.cover.image} img:hover {
   border-radius: 2px;
   z-index: 10;
   transform: translate(28px, 18px) scale(2);
}
/*
#page_layout .vkus-player-new ${player.info.cover.is}:active img {
   transform: scale(.9);
   border: 2px solid red;
}
*/
#page_layout .vkus-player-new ${player.info.cover.image}:has(svg) {
   border: var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha);
}
#page_layout .vkus-player-new ${player.info.cover.image} div[class*='border'] {
   display: none;
}
#page_layout .vkus-player-new ${player.info.cover.is} svg {
   width: calc(var(--cover-size) -30px);
   height: calc(var(--cover-size) -30px);
   margin-top: 0px;
   scale: 2;
}

/* Анимация фона */
#page_layout .vkus-player-new ${player.info.cover.is} .animate {
   opacity: .8;
   background-color: var(--vkui--color_background_content);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -2;
   translate: 0px -1px; 
   filter: blur(8px);
   animation: sizeBig 10s ease 0s infinite normal forwards;
}
`;

   // ======================
   // Главное управление
   // ======================
   let controlsMain = `
   #page_layout .vkus-player-new ${player.controls.is} {
      box-sizing: border-box;
      padding: 0;

      position: absolute;
      left: 50%;
      bottom: 16px;
      margin-left: -100px;
      width: 200px;

      transform: translate(36px, 0px);
   }

   #page_layout .vkus-player-new ${player.controls.main.is} {
      order: 2;
   }

   #page_layout .vkus-player-new ${player.controls.main.play} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1);
   } 

   #page_layout .vkus-player-new ${player.controls.main.next} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1.05);
   } 

   #page_layout .vkus-player-new ${player.controls.main.prev} {
      transform: translate(calc(0px + 62px), 0.5px) scale(1.05);
   } 

   .vkus-player-new ${player.controls.main.prev} svg,
   .vkus-player-new ${player.controls.main.next} svg {
      width: 30px;
      height: 30px;
   }

   /* Репит+Порядок */ 
   .vkus-player-new ${player.controls.other.is} {
      /*padding: 2px;
      margin: 4px;
      */
   }

   /* Повторять */
   #page_layout .vkus-player-new ${player.controls.other.repeat} {
      transform: translate(-124px, 1px);
   } 
/*
   /* Порядок */
   #page_layout .vkus-player-new ${player.controls.other.shuffle} {
      transform: translate(-118px, 1px);
   } 
*/
*/`;

   // ======================
   // Другие кнопки
   // ======================
   let otherExtenstion = ` 
   /* Реки */ 
   #page_layout .vkus-player-new ${player.buttons.recoms} {
      position: absolute;
      bottom: 2px;
	   right: 873px;
	   translate: 563px 64px;
   }
   .vkus-player-new ${player.buttons.recoms} * {
      cursor: pointer;
   }


   
   /*=======================*/
   /* ДОП КНОПКИ (СПРАВА ВВЕРХУ) */
   /*=======================*/
   #page_layout .vkus-player-new ${player.buttons.is} {
      position: absolute;
      top: 12px;
      right: 14px;
      box-sizing: border-box;
      height: 28px;
      width: 240px;
      display: flex;
      justify-content: end;
      gap: 8px;
   }

   #page_layout .vkus-player-new ${player.buttons.is} * {
      padding: 0;
      margin: 0;
   }

   /* BlackList */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${player.buttons.blacklist}) {
      order: 10;
   }  
      
   /* Add/Remove */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${player.buttons.add}),
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${player.buttons.remove}) {
      order: 8;
   }
   /* Доб/удал из Библиотеки */ 
   #page_layout .vkus-player-new ${player.buttons.add},
   #page_layout .vkus-player-new ${player.buttons.remove}  {
      margin-left: 0;
   } 

   /* lyric */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${player.buttons.lyric}) {
      order: 9;
   }

   /* recoms */
   #page_layout .vkus-player-new [data-testid="audioplayerplaybackbody-audiobutton"]:has(${player.buttons.recoms}) {
      order: -1;
   }
   #page_layout .vkus-player-new ${player.buttons.is} > div:last-of-type {
      padding: 0;
   }
   #page_layout .vkus-player-new ${player.buttons.is} button svg {
      margin-left: 0; 
   }

   /*=======================*/
   /* Blue Player */
   /*=======================*/
   #page_layout .vkus-player-new ${player.controls.user.is} ._1PM4_D6LjB  {
      width: 24px;
      height: 24px;
      transform: translate(calc(0px + 62px), 0px) scale(.95);
   }
   #page_layout .vkus-player-new div[id*="1724280875835"] {
      margin: 0;
   }
   #page_layout .vkus-player-new div[id*="4402108012"] {
      scale: 1;
      width: 24px;
      margin: 2px 8px 0;
   }
      
   /*=======================*/
   /* VK Next */
   /*=======================*/
   /* Скачать */
   #page_layout .vkus-player-new .e47qq1XqMPp6oTp7 {
      position: absolute;
      bottom: 8px;
      right: 236px;
      bottom: -15px;
      right: 858px;
      translate: 594px -17px;
   }
   /* Эквалайзер */
   #page_layout .vkus-player-new .e47qq1XqMPp6oTp7:nth-child(1) {
      position: absolute;
      bottom: -14px;
      right: 857px;
      translate: 326px -17px;
      scale: 1.08;
   }
`;

   // ======================
   // Юзер кнопки + Микшер
   // ======================
   let controlsUser = `
   #page_layout .vkus-player-new ${player.controls.user.is} > div {
      display: flex;
      justify-content: end;
   }

   /* группа кнопок рядом с микшером */ 
   #page_layout .vkus-player-new ${player.controls.user.is} > div > div:last-child {
      display: flex;
   }

   #page_layout .vkus-player-new ${player.controls.user.is} div[class*="AudioPlayerUserControlsContainer-module__userButton"] {
      order: -1;
   }

   /* КНОПКИ */
   #page_layout .vkus-player-new ${player.controls.user.is} div:has(> button) {
      border-radius: 20px;
   }

   #page_layout .vkus-player-new ${player.controls.user.share} {
      position: absolute;
      bottom: -16px; 
      left: 0px;
	   translate: -92px -18px;
   } 

   #page_layout .vkus-player-new button${player.controls.user.broadcastOn},
   #page_layout .vkus-player-new button${player.controls.user.broadcastOff} {
      position: absolute;
      z-index: -2;
      bottom: -17px;
	   left: -653px;
	   transform: translate(82px, -17px);
   }

   .vkus-player-new button${player.controls.user.broadcastOn}:hover,
   .vkus-player-new button${player.controls.user.broadcastOff}:hover {
      z-index: 15;
   }

   #page_layout .vkus-player-new button${player.controls.user.broadcastOn}::before,
   #page_layout .vkus-player-new button${player.controls.user.broadcastOff}::before {
      content: "Не транслируется";
      position: absolute;
      width: 130px;
      text-align: left;
      color: var(--vkui--color_text_secondary);
      margin: 4px 0 0 20px;
   }
      
   #page_layout .vkus-player-new button${player.controls.user.broadcastOff}::before {
      content: "Транслируется";
      color: var(--vkui--color_icon_accent);
   }

   /*===============*/
   /* МИКШЕР */
   /*===============*/
   #page_layout .vkus-player-new ${player.controls.user.is} {
      display: flex;
      justify-content: end;
      position: absolute;
      bottom: 16px;
      right: -16px;
      width: 240px;
      height: 28px;
      padding: 0;
      z-index: 2;
   } 

   #page_layout .vkus-player-new ${player.controls.user.sound.is} {
      order: 10;
      padding: 0;
   }
   #page_layout .vkus-player-new ${player.controls.user.sound.bar} {
      width: 100px;
   }
   #page_layout .vkus-player-new ${player.controls.user.sound.icon} {
      position: relative;
      /*margin-right: 8px;*/
   }
   .vkus-player-new ${player.controls.user.sound.icon} svg {
      width: 24px;
      height: 24px;
      /*transform: translate(124px, 2px);*/
   }

   /*фон дорожки звука*/
   .vkus-player-new .Slider-module__backTrackBackground--LegyH.Slider-module__sliderPrimary--HV2wY::before {
      background-color: var(--vkui--color_search_field_background);
   }`;

   // ======================
   // Дорожка аудио
   // ======================
   let progressbar = `
   #page_layout .vkus-player-new ${player.progressbar.is} {    
      bottom: 35px;
      width: 94%;
   }

   .vkus-player-new .Slider-module__sliderSizeL--JOS_t .Slider-module__fill--Gxkxh,
   .vkus-player-new .AudioPlayerPlaybackProgressBar-module__pending--pZhBg,
   .Slider-module__sliderSizeL--JOS_t::before
   {
      height: var(--progressbar);
      border-radius: 30px;
   }

   .vkus-player-new ${player.progressbar.is} .Slider-module__fill--Gxkxh.Slider-module__fillTrackBuffered--DzV0t::after,
   .vkus-player-new ${player.controls.user.sound.is} .Slider-module__fill--Gxkxh.Slider-module__fillTrackBuffered--DzV0t::after 
   {
      content: '';
      position: absolute;
      
      background: var(--vkui--color_track_buffer);
      border-radius: 30px;
      transition: all .5s;

      top: auto;
      right: -4px;
      height: 16px;
      width: 16px;
      bottom: -3.9px;
      right: -7px;
      max-height: 12px;
      width: 12px;
      opacity: 1;
   }
`;

   // ======================
   // Эффекты
   // ======================
   let effects = `
   /* Кнопка нажата */
   .vkus-animate__click-button-container {
      position: relative;
      border: 2px solid #F21CDC;
   }
   .vkus-animate__click-button {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 52px;
      height: 52px;
      z-index: 19999;
      margin-left: calc(-26px + 0px);
      margin-left: calc(-26px + 80px);
      margin-top: -26px;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(8px);
      border-radius: 26px;
      pointer-events: none;
   /*
      color: var(--vkui--color_icon_secondary);
      background: var(--vkui--color_background);
   */
      display: flex;
      justifu-content: center;
      align-items: center;
      display: none; 
      animation: moveAndRotate 2s infinite alternate;
   }

   .vkus-animate__click-button-container .vkus-animate__click-button {
      left: 50%;
      top: 50%;
      width: 52px;
      height: 52px;
      z-index: 19999;
      margin-left: calc(-26px + 70px);
      margin: 0;
      margin-top: -26px;
      margin-left: calc(-26px + 0px);
   }
   .vkus-animate__fixed {
      position: fixed;
   }
   .vkus-animate__click-button.animate {
      display: block;
      animation: 500ms linear -12.6131ms 1 normal forwards running fadeout;
   }
   @keyframes fadeout {
      from {
         opacity: 1;
         transform: scale(1);
      }
      50% {
         opacity: 1;
      }
      to {
         opacity: 0;
         transform: scale(3);
      }
   } 
      
   /* Анимация для фона обложки */ 
   @keyframes sizeBig {
      from {
         transform: scale(0.9) translate(3px, 3px);
         opacity: 0.1;
      }
      20% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.2;
      }
      40% {
         transform: scale(1.5) translate(-10px, -12px);
         opacity: 0.3;
      }
      60% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.2;
      }
      to {
         transform: scale(0.9) translate(3px, 3px);
         opacity: 0.1;
      }
   }

   @keyframes point-scale {
      from {
         transform: scale(0);
         opacity: 0;
      } 
      to {
         transform: scale(1);
         opacity: 1;
      }
   }
`;

   // ======================
   // HEADER
   // ======================
   let headerPlayer = `
   `;

   // ======================
   // VideoInPostBorderRadius
   // ======================
   let videoInPostBorderRadius = `
   .inline_video_wrap {
      border-radius: var(--mg-border-radius-wrapper);
      --border-width: var(--cover-radius);
      box-sizing: border-box;
      box-shadow: 0 0 0 var(--border-width) var(--vkui--color_separator_secondary);
   }`;

   // ======================
   // Fixed Player
   // ======================
   let fixedPlayer = `
   [class*="AudioPlayerBlockDefaultLayout__fixed"] {
      top: auto;
      transform: translate(0, 0px);
      bottom: -2px;
   }
      
   [class*="AudioPlayerBlockDefaultLayout__fixed"] section {
      border-radius: var(--vkui--size_border_radius_paper--regular) var(--vkui--size_border_radius_paper--regular) 0 0;
   }
   `;

   
   // ======================
   // Fixed Player
   // ======================
   let aboutMe = `
   .aboutMe {
      padding: 8px 20px 150px;
   }
   `;

   // Все стили в один
   let styles =
      is +
      controlsMain +
      controlsUser +
      otherExtenstion +
      cover +
      info +
      progressbar +
      headerPlayer +
      // videoInPostBorderRadius +
      fixedPlayer +
      aboutMe +
      modeDev;

   return effects + styles.replace(/;/g, " !important;");
};
