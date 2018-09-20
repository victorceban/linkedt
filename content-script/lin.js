(function () {
  const defaultTemplate = 'Hello |NAME| \r\nLet us be friends\r\n\r\n-me'
  let template = defaultTemplate;

  function toTitleCase(str) {
    return str.replace(/\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() +
          txt.substr(1).toLowerCase();
      });
  }




  const lockClass = 'cva-filled-56af4b6e-5dcf-4611-b147-5e96b2cd756f';

  function tryStartFillInvite() {
    let template = '';

    var sendInviteTextArea = document.querySelector('#custom-message');
    if (!sendInviteTextArea) {
      seeIfExistsAndClickOnOnAddANoteButton();
    }

    var sendInviteTextArea = document.querySelector('#custom-message');
    if (!sendInviteTextArea || sendInviteTextArea.classList.contains(lockClass)) {
      return;
    }

    chrome.storage.sync.get('cva.LinkedInTemplate', function (val) {
      try {
        template = val['cva.LinkedInTemplate'] || defaultTemplate;


        let nameEl = document.querySelector('.pv-top-card-v2-section__info .pv-top-card-section__name');
        var firstName = toTitleCase(nameEl.innerHTML.trim()).split(' ')[0];
        var savedTemplate = template.replace(/\|NAME\|/g, firstName);
        sendInviteTextArea.value = savedTemplate;
        sendInviteTextArea.classList.add(lockClass)
      } catch (e2) {
        /*supress*/
      }
    });
  }

  function seeIfExistsAndClickOnOnAddANoteButton() {
    try {
      var allInviteButtons = document.querySelectorAll('.send-invite__actions button');
      allInviteButtons.forEach(b => {
        if (b.innerText === 'Cancel') {
          b.style.display = 'none'
        }
        if (b.innerText === 'Add a note') {
          b.click();
        }
      })
    } catch (e) {
      /*supress*/
    }
  }

  setInterval(tryStartFillInvite, 1000);
})();