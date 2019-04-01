function restoreOptions(){
    // Use default value = 8px
  chrome.storage.sync.get({
      blur_radius: 8,
  }, function (items) {
        document.getElementById('blur-radius').value = items.blur_radius;
        document.getElementById('value').textContent = items.blur_radius;
  });
}

function saveOptions()
{
    var value = document.getElementById('blur-radius').value;
    chrome.storage.sync.set({ blur_radius: value }, function () {
          // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'options saved.';
        setTimeout(function() {
        status.textContent = '';
        },  1500);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    restoreOptions();
      //handles blur radius range slider
    var value = document.getElementById('value');
    var slider = document.getElementById('blur-radius');
    value.textContent = slider.value;
    document.getElementById('blur-radius').addEventListener('input', function () {
        value.textContent = slider.value;
    });
    document.getElementById('save').addEventListener('click', saveOptions);
})