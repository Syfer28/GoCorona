const form = document.getElementById("form");
const userName = document.getElementById("name_field");
const surname = document.getElementById("surname_field");
const tel = document.getElementById("tel_field");
const email = document.getElementById("email_field");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidTel = tel => {
    const rt = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{2}[-\s\.]?[0-9]{6}$/im;
    return rt.test(String(tel));
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const userNameValue = userName.value.trim();
    const surnameValue = surname.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();

    if (userNameValue === '') {
        setError(userName, "is required");
    } else {
        setSuccess(userName);
    }

    if (surnameValue === '') {
        setError(surname, "is required");
    } else {
        setSuccess(surname);
    }

    if (telValue === '') {
        setError(tel, "is required");
    } else if (!isValidTel(telValue)) {
        setError(tel, "is invalid");
    } else {
        setSuccess(tel);
    }

    if (emailValue === '') {
        setError(email, "is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "is invalid");
    } else {
        setSuccess(email);
    }
};
