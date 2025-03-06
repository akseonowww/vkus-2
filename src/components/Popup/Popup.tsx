import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import * as Switch from "@radix-ui/react-switch";
import "./Popup.css"; // Импортируем CSS для стилей

const Popup = () => {
   const [isEnabled, setIsEnabled] = useState(false);
   const [isChecked, setIsChecked] = useState(false);

   const handleToggle = () => {
      setIsEnabled(!isEnabled);
   };

   const handleChange = (event) => {
      setIsChecked(event.target.checked);
   };

   return (
      <Popover.Root>
         <Popover.Trigger>More info</Popover.Trigger>
         <Popover.Portal>
            <Popover.Content>
               Some more info…
               <div className="Popup">
                  <header className="Popup-header">
                     <h1>VKUS</h1>
                     <span>({chrome.runtime.getManifest().version})</span>
                  </header>
                  <main className="Popup-main">
                     <form>
                        <div style={{ display: "flex", alignItems: "center" }}>
                           <label
                              className="Label"
                              htmlFor="airplane-mode"
                              style={{ paddingRight: 15 }}
                           >
                              Airplane mode
                           </label>
                           <Switch.Root
                              className="SwitchRoot"
                              id="airplane-mode"
                           >
                              <Switch.Thumb className="SwitchThumb" />
                           </Switch.Root>
                        </div>
                     </form>

                     <label>
                        <input
                           type="checkbox"
                           checked={isEnabled}
                           onChange={handleToggle}
                        />
                        Новый плеер
                     </label>
                     <h2>Видимость блоков</h2>
                     <div className="checkbox-group">
                        {[
                           "Плеер",
                           "Навигация",
                           "Мои треки",
                           "Снипеты",
                           "Собрано алгоритмами",
                           "Какой сейчас вайб?",
                           "Слушайте друг друга",
                           "Собрано редакцией",
                        ].map((label, index) => (
                           <label key={index}>
                              <input
                                 type="checkbox"
                                 checked={isChecked}
                                 onChange={handleChange}
                              />
                              {label}
                           </label>
                        ))}
                     </div>

                     <Popover.Root>
                        <Popover.Trigger asChild>
                           <button className="update-button">Обновить</button>
                        </Popover.Trigger>
                        <Popover.Portal>
                           <Popover.Content className="popover-content">
                              <p>Нажмите, чтобы обновить настройки!</p>
                              <Popover.Arrow className="popover-arrow" />
                           </Popover.Content>
                        </Popover.Portal>
                     </Popover.Root>
                  </main>
               </div>
               <Popover.Arrow />
            </Popover.Content>
         </Popover.Portal>
      </Popover.Root>
   );
};

export default Popup;
