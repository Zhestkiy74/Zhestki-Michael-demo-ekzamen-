function saveForm() {
  const form = document.getElementById('registerForm');
  const formData = {
    login: form.login.value,
    password: form.password.value,
    name: form.name.value,
    tel: form.tel.value,
    email: form.email.value
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  alert('Регистрация прошла успешна');
}



const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
  console.log('Имя:', savedData.login);
  console.log('Email:', savedData.password);
}