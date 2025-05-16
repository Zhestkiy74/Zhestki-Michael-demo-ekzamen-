const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
 document.getElementById('login').value = savedData.login;
 document.getElementById('password').value = savedData.password;
}

function redirectAfterDelay() {
    if (document.getElementById('login').value == "admin" && document.getElementById('password').value == "admin"){
        window.location.href = 'admin_panel.html';
    }
    if(document.getElementById('login').value == savedData.login && document.getElementById('password').value == savedData.password){
        window.location.href = "service.html";
    }else{
        alert("Такого акаунта нету")
    }
  }