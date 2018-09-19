const waitDialogMode = 'wdm';
const waitTextMode = 'wdd';

try {
  chrome.storage.sync.get('cva.LinkedInTemplate', function (val) {
    try {
      let tryv1 = document.querySelector('.iwrite-in h1 strong');
      window['cva.LinkedInTemplate'] = val['cva.LinkedInTemplate'] || 'Hello |NAME| \r\nLet us be friends\r\n\r\n-me';
      window['cva.LinkedInTemplate.waitmode'] = waitDialogMode;
      if (!tryv1) {
        setInterval(tryv2asdasjejajwejhkhkjbnshgfjskjehfes, 1000);
        setInterval(addNoteClickerDASda34234asdasd, 1000)
        return;
      }

      var who = toTitleCase(document.querySelector('.iwrite-in h1 strong').innerHTML).split(' ')[0];

      what = what.replace(/\|NAME\|/g, who);

      document.querySelector('[value="IF"]').checked = true;
      document.querySelector('[name="greeting"]').value = what;

    } catch (e2) {
      console.log('e iner:', e2);
    }

  });

  function toTitleCase(str) {
    return str.replace(/\w\S*/g,
      function (txt) {
        return txt.charAt(0).toUpperCase() +
          txt.substr(1).toLowerCase();
      });
  }
} catch (e) {
  console.log('e outer:', e);
}

function addNoteClickerDASda34234asdasd(){
  var sendInvite = document.querySelector('.send-invite__actions .button-secondary-large');
  if(sendInvite)
  {
    sendInvite.click();
    tryv2asdasjejajwejhkhkjbnshgfjskjehfes(document.getElementById('custom-message'));
  }
}

function tryv2asdasjejajwejhkhkjbnshgfjskjehfes(el) {
  let tryv2 = el || document.getElementById("connect-message-content");
  if (!tryv2) {
    window['cva.LinkedInTemplate.waitmode'] = waitDialogMode;
    return;
  }
  if (window['cva.LinkedInTemplate.waitmode'] === waitTextMode) {
    return;
  }
  
  window['cva.LinkedInTemplate.waitmode'] = waitTextMode;
  var what = window['cva.LinkedInTemplate'];
  let nameEl = document.querySelector('.namecard .fullname') || document.querySelector('.pv-top-card-section__information .pv-top-card-section__name');
  var who = toTitleCase(nameEl.innerHTML).split(' ')[0];
  what = what.replace(/\|NAME\|/g, who);
  tryv2.value = what;
}