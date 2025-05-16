const savedData = JSON.parse(localStorage.getItem('formData'));
if (savedData) {
document.getElementById('username').textContent = savedData.name;
}


function logout(){
    localStorage.removeItem('formData');
    window.location.href = 'index.html';
}





function saveService(service) {
        // Просто сохраняем выбранную услугу
        localStorage.setItem('lastSelectedService', service);
        
        // Выводим в консоль текущее содержимое localStorage
        const savedData = localStorage.getItem('lastSelectedService');
        console.log('Сохранено в localStorage:', savedData);
        window.location.href = 'application_form.html';
    }
    
    // При загрузке страницы выводим в консоль сохраненное значение (если есть)
    window.addEventListener('load', () => {
        const savedService = localStorage.getItem('lastSelectedService');
        if (savedService) {
            console.log('Текущая сохраненная услуга:', savedService);
        } else {
            console.log('В localStorage нет сохраненных услуг');
        }
    });