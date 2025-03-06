import { player } from "../player";

export let playerDefault = `/*контейнер*/
   /*анимации*/
   @keyframes sizeBig {
      from {
         transform: scale(1.2) translate(-10px, -12px);
         opacity: 0.5;
      }
      20% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.7;
      }
      40% {
         transform: scale(1.5) translate(-10px, -12px);
         opacity: 0.5;
      }
      60% {
         transform: scale(1.9) translate(-18px, -15px);
         filter: blur(9px);
         border-radius: 30px;
         opacity: 0.7;
      }
      to {
         transform: scale(1.2) translate(-10px, -12px);
         opacity: 0.5;
      }
   }

   .vkus-player-new ${player.is} {
      /*border: 2px solid #447BBA !important;*/
      padding: 0 !important;
   }

   .vkus-player-new ${player.in} {
      display: flex !important;
      height: 120px !important; 
      padding: 16px !important;
   }


   /*трек*/
   /*трек-управ*/
   .vkus-player-new ${player.controls.is} {
      padding: 0 !important;
      width: 0;
   }
   .vkus-player-new ${player.controls.main.is} button,
   .vkus-player-new ${player.controls.user.is} button,
   .vkus-player-new ${player.controls.other.is} button,
   .vkus-player-new ${player.buttons.blacklist},
   .vkus-player-new ${player.buttons.lyric},
   .vkus-player-new ${player.buttons.recoms},
   .vkus-player-new ${player.buttons.lyric} {
      position: absolute ;
      bottom: 0 ;
      left: 0 ;
      z-index: 1 ;
      padding: 0 ;
      transition: left .5s, right .5s;
   }

   /* 
   .vkus-player-new ${player.controls.other.is} button {
      border: 2px solid purple !important;
   }
   .vkus-player-new ${player.controls.main.is} button {
      border: 2px solid red !important;
   }
   .vkus-player-new ${player.controls.user.is} {
      border: 2px solid blue !important;
   }   
   */
   .vkus-player-new ${player.controls.main.play} {
      left: 50% !important;
      bottom: 14px !important;
      margin-left: calc(-15px - -52px);
   } 

   .vkus-player-new ${player.controls.main.next} {
      left: 50% !important;
      bottom: 13px !important;
      margin-left: calc(-13px - -82px);
      transform: translateX(4px);
   } 

   .vkus-player-new ${player.controls.main.prev} {
      left: 50% !important;
      bottom: 13px !important;
      margin-left: calc(-13px - -16px);
      transform: translateX(-4px);
   } 

   .vkus-player-new ${player.controls.main.prev} svg,
   .vkus-player-new ${player.controls.main.next} svg {
      width: 30px !important;
      height: 30px !important;
   }

   .vkus-player-new ${player.controls.other.repeat} {
      left: 50% !important;
      bottom: 16px !important;
      margin-left: calc(-12px - 19px);
   } 

   .vkus-player-new ${player.controls.other.shuffle} {
      left: 50% !important;
      bottom: 17px !important;
      margin-left: calc(-12px - 51px);
   } 

   .vkus-player-new ${player.controls.user.share} {
      left: 50% !important;
      bottom: 16px !important;
      margin-left: calc(-12px - -153px);
   } 

   .vkus-player-new ${player.buttons.recoms} {
      left: 50% !important;
      bottom: 16px !important;
      margin-left: calc(-12px - -117px);
   }

   .vkus-player-new ${player.buttons.recoms} * {
      cursor: pointer;
   }

   .vkus-player-new ${player.buttons.add},
   .vkus-player-new ${player.buttons.remove}  {
      position: absolute  !important;
      margin-left: 0;
      bottom: auto !important;
      left: auto !important;
      top: 16px !important;
      right: 79px !important;
   }

   .vkus-player-new ${player.controls.user.broadcastOn},
   .vkus-player-new ${player.controls.user.broadcastOff} {
      margin-left: 0;
      height: fit-content;
      left: 117px  !important;
      bottom: 15px  !important;
   }

   .vkus-player-new ${player.controls.user.broadcastOn}::before,
   .vkus-player-new ${player.controls.user.broadcastOff}::before {
      content: "Не транслируется";
      position: absolute;
      width: 130px;
      text-align: left;
      color: var(--vkui--color_text_secondary);
      margin: 4px 0 0 20px !important;
   }

   .vkus-player-new ${player.controls.user.broadcastOff}::before {
      content: "Транслируется";
      color: var(--vkui--color_icon_accent);
   }

   .vkus-player-new ${player.buttons.blacklist} {
      right: 15px !important;
      top: 16px !important;
      left: auto !important;
      bottom: auto !important;
      /*opacity: 0;*/
   }

   .vkus-player-new .vkusIconBlock {
      position: absolute;
      right: 15px !important;
      top: 16px !important;
      left: auto !important;
      bottom: auto !important;
      border: none;
      background: transparent !important;
      padding: 0 !important;
      transform: scale(.9) !important;
      height: 28px !important;
   }

   .vkus-player-new ${player.buttons.lyric} {
      left: auto !important;
      bottom: auto !important;
      top: 16px !important;
      right: 47px !important;
   }

   /*другие сервисы*/
   /*vk next*/
   .vkus-player-new .e47qq1XqMPp6oTp7 button {
      position: absolute !important;
      left: 50% !important;
      margin-left: calc(-12px - -184px);
      bottom: 16px !important;
   }
   .vkus-player-new .vknext-btn-ecvalazer,
   .vkus-player-new .vknext-btn-download,
   .vkus-player-new .e47qq1XqMPp6oTp7 button.X8NWqf8BjdA0PNtu {
      margin-left: calc(-12px - 82px);
   }

   /*blue player*/
   .vkus-player-new ._2ZFZ8lybNc, 
   .vkus-player-new ._2H1LxJ1VCu, 
   .vkus-player-new .rJnwcSlEHt {
      position: absolute !important;
      bottom: 10px !important;
      right: 159px !important;
      top: auto  !important;
      left: auto !important;   
      position: absolute;
      bottom: 16px;
      right: 118px;
   }

   .vkus-player-new div[id*="1724148523663"] {
      position: absolute !important;
      bottom: 10px !important;
      right: 159px !important;
      top: auto  !important;
      left: auto !important;
   }

   .vkus-player-new ${player.controls.user.sound.is} {
      position: absolute;
      left: auto !important;
      bottom: 16px !important;
      margin-left: 0;
      right: 17px;
      /*border: 2px solid green;*/
   }

   .vkus-player-new ${player.controls.user.sound.is} button {
      position: relative;
   }

   .vkus-player-new ${player.controls.user.sound.is} svg {
      width: 28px !important;
      height: 28px !important;
      margin-right: 13px !important;
      /*transform: translate(124px, 2px);*/
   }

   .vkus-player-new [class*="AudioPlayerVolumeSlider-module__barSize"] {
      width: 100px;
   }

   .vkus-player-new [data-testid="audioplayerplaybackbody-progresstime"] {
   position: absolute !important;
      bottom: 50px !important;
      right: 17px !important;
   }

   /*фон дорожки звука*/
   .vkus-player-new .Slider-module__backTrackBackground--LegyH.Slider-module__sliderPrimary--HV2wY::before {
      background-color: var(--vkui--color_search_field_background);
   }

   /*доп*/
/*
   .vkus-player-new ${player.buttons.is} button {
      border: 2px solid yellow !important;
   }
*/



   /*трек-описание*/
   .vkus-player-new ${player.info.is} {
      width: 100% !important;,
      font-size: 20px !important;
      /*position: absolute;*/
   }


   /*обложка*/
   .vkus-player-new ${player.info.cover.is} {
      padding-right: 12px !important;
      transition: transform 0.7s;
   }
   .vkus-player-new ${player.info.cover.is} * {
      cursor: pointer;
   }
   .vkus-player-new ${player.info.cover.image} {
      height: 88px !important; width: 88px !important; 
      border-radius: 12px !important;
      z-index: 9;
      position: relative !important;
      transition: scale .5s, translateX .6s;
      transition: transform 0.7s;
   }
/*
   .vkus-player-new ${player.info.cover.image}:hover {
      transform: translateX(8px) scale(1.5);
      border-radius: 2px !important;;
      /* border: 1px solid #f1f1f126; 
      z-index: 999999;*/
   }
*/
   .vkus-player-new ${player.info.cover.is}:active {
      transform: scale(.9);
      z-index: 909999900;
      position: relative !important;
   }

   .vkus-player-new ${player.info.cover.image} > div.animate {
      background-color: var(--vkui--color_background_content);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      z-index: -2;
      filter: blur(8px);
      transform: scale(1.5);
      position: absolute !important;
      top: 0;
      left: 0;
      transform: translate(-35px, -36px) scale(2);
      /* border: 2px solid red; */
      animation: sizeBig 10s infinite;
   }
   .vkus-player-new ${player.info.cover.is} svg {
      width: 58px !important;
      height: 88px !important;
      margin-top: 0px !important;
   }


   /*текст*/
   .vkus-player-new ${player.info.text.is} {
      position: absolute !important;
      top: 18px !important;
      left: 116px !important;
      padding: 0 !important;
   }
   .vkus-player-new ${player.info.text.badge} svg {
      font-size: 20px !important;
      padding: 0 1px 4px 4px !important;
      cursor: pointer;
   }

   .vkus-player-new ${player.info.text.badge}::before {
      content: "Explicit Content — трек содержит ненормативную лексику.";
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

   .vkus-player-new ${player.info.text.title} a {
      font-size: 14px !important;
      line-height: normal !important;
      /*font-weight: 600 !important;*/s   
   }

   .vkus-player-new ${player.info.text.artist} {
      font-size: 14px !important;
      line-height: normal !important;
      font-weight: 400 !important;
   }



   /* Дорожка */
   .vkus-player-new ${player.progressbar.is} {      
      height: 8px !important;
      margin-bottom: 44px !important;
      border-radius: 20px !important;
      margin-bottom: 50px !important;
      /* width: 93% !important; */
      position: absolute;
      top: 55px !important;
      left: 118px;
      width: 80%;
      margin-bottom: 0 !important;
      bottom: auto;
   }

   .vkus-player-new .Slider-module__sliderSizeL--JOS_t .Slider-module__fill--Gxkxh,
   .vkus-player-new .AudioPlayerPlaybackProgressBar-module__pending--pZhBg,
   .vkus-player-new .Slider-module__sliderSizeL--JOS_t::before {
      height: 6px !important;
      border-radius: 30px !important;
   }

   .vkus-player-new [data-testid="audioplayerplaybackbody-progresstime"] {
      position: absolute !important;
      bottom: 51px !important;
      right: 20px !important;
   }

   /* Кнопка нажата */
   .vkus-player-new .div-click-button {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 52px;
      height: 52px;
      z-index: 19;
      margin-left: -26px;
      margin-top: -26px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 26px;
      -webkit-animation: ytp-bezel-fadeout 0.5s linear 1 normal forwards;
      animation: 5000ms linear -12.6131ms 1 normal forwards running ytp-bezel-fadeout;
      pointer-events: none;
      color: var(--vkui--color_icon_secondary);
      background: var(--vkui--color_background);
   }

   @keyframes ytp-bezel-fadeout {
   from {
      opacity: 1;
   }
   to {
      opacity: 0;
      -webkit-transform: scale(5);
      transform: scale(3);
   }
}
`;
