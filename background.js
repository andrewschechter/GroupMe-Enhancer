chrome.runtime.onMessage.addListener(
  function(message, sender, response) {
    console.log('received');
    if (message == 'groupme loaded') {
      chrome.storage.sync.get({
        darkmode: false,
        blur : false
      }, function (items) {
        if (items.blur) {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.insertCSS(
              tabs[0].id,
              { file: 'blur.css' }
            );
          });
        } else {
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.insertCSS(
              tabs[0].id,
              { file: 'noblur.css' });
          });
        }
      });
    }
  }
);