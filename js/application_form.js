

const savedBtnData = localStorage.getItem('lastSelectedService');
if (savedBtnData) {
document.getElementById('service').textContent = savedBtnData;
}


document.getElementById('serviceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const savedBtnData = localStorage.getItem('lastSelectedService');
    // Получаем данные формы
    const formData = {
        address: document.getElementById('address').value,
        contact: document.getElementById('contact').value,
        date: document.getElementById('date').value,
        time: document.getElementById('time').value,
        service: savedBtnData,
        payment: document.querySelector('input[name="payment"]:checked').value
    };
    
    // Здесь можно добавить отправку данных на сервер
    console.log('Данные заявки:', formData);
    
    // Показываем сообщение об успехе
    alert('Ваша заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
    window.location.href = 'service.html';
    // Очищаем форму (опционально)
    this.reset();
});
