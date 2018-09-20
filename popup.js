document.addEventListener('DOMContentLoaded', function () {
  var b = document.getElementById('saveButton');
  var ta = document.getElementById('templateBody');
  chrome.storage.sync.get('cva.LinkedInTemplate', function (val) {
    ta.value = val['cva.LinkedInTemplate'] || 'Hello |NAME| \r\nLet\'s connect\r\n\r\n -me';
  });

  b.addEventListener('click', saveClicked);
  const switchToSaveMode = () => {
    b.value = 'save';
    b.disabled = false;
  }
  ta.addEventListener('change', () => switchToSaveMode());

  ta.addEventListener('keyup', () => switchToSaveMode());

});

function saveClicked() {
  cvaStoreTemplate(document.getElementById('templateBody').value);
}


function cvaStoreTemplate(val) {
  console.log('store called', val);
  document.getElementById('saveButton').disabled = true;
  chrome.storage.sync.set({
    'cva.LinkedInTemplate': val,
  }, function () {
    document.getElementById('saveButton').innerHTML = 'saved';
  });
}