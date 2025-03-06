import React from "react";

const Options = () => {
   let theme = true
   // Сохранение данных
   console.log('[VKUS] API Settings');
   console.group('[VKUS] API Settings');
//    chrome.storage.local.set({theme: "default"}, () => {
//       console.log('Настройка сохранена');
//    })

//    chrome.storage.local.set({key: 'value'}, function() {
//       console.log('Данные сохранены');
//   });
  
// chrome.storage.local.sync.set({ mySetting: 'value' }, function() {
   // console.log('Настройка сохранена');
// });

   // Получение данных
   chrome.storage.local.get(['theme'], function(result) {
      console.log('Значение theme:', result.theme);
   });

   chrome.storage.local.get(['key'], function(result) {
      console.log('Значение ключа:', result.key);
  });

  const handleUpdateSetting = () => {
      console.group("Тема")
      chrome.storage.local.get(['theme'], function(result) {
         console.log('Старая тема:', result.theme);
      });
      chrome.storage.local.set({theme: "new"}, () => {
         console.log('Настройка сохранена');
      })
      chrome.storage.local.get(['theme'], function(result) {
         console.log('Новая тема:', result.theme);
      });
      console.groupEnd()
   }
  
   console.groupEnd()

    return (
      <div>
         {/* <div className="bg-white rounded-lg shadow-md p-6"> */}
            {/* <h1 className="text-2xl font-semibold mb-6 animate__animated animate__bounce">Настройки</h1> */}

            
            {/* Кнопка сохранить настройки */}
            {/* <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={() => handleUpdateSetting()}>
               Новый дизайн
            </button> */}
         {/* </div> */}
      </div>
   );
};

export default Options;
