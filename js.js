// CheckRegularInput

const button = document.querySelector('button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    const tel = document.querySelector('[data-tel]').value;
    const email = document.querySelector('[data-email]').value;
    const telFalse = document.querySelector('.telFalse');
    const emailFalse = document.querySelector('.emailFalse');
    if (tel) {
        if (!((/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/).test(tel))) {
            telFalse.textContent = 'Вами введенный номер не соответствует.'
        }
    }
    if (email) {
        if (!((/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/g).test(email))) {
            emailFalse.textContent = 'Вами введенный email не соответствует.'
        }
    }

});
