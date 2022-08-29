var formName = document.getElementById("name");
var formLastName = document.getElementById("lastName");
var formEmail = document.getElementById("email");
var formPassword = document.getElementById("password");
const submit = document.querySelector(".form");
var showPassword = document.getElementById('icon-pass')


// Função que verifica se um ou mais campos estão vazios
function formInputsNull(e) {
    e.preventDefault()
    if (!formName.value && !formLastName.value && !formEmail.value && !formPassword.value) {
        alert("Os campos precisam ser preenchidos!")
    } else {
        if (!formName.value) {
            alert("Campo nome se encontra vazio")
            formName.focus()
        }
        if (!formLastName.value) {
            alert("Campo sobrenome se encontra vazio")
            formLastName.focus()
        }
        if (!formEmail.value) {
            alert("Campo email se encontra vazio")
            formEmail.focus()
        }
        if (!formPassword.value) {
            alert("Campo senha se encontra vazio")
            formPassword.focus()
        }
    }
}

submit.addEventListener("submit", formInputsNull)


// Revelar/esconder caracteres do password
showPassword.addEventListener('click', (e) => {
    e.preventDefault()

    if (formPassword.getAttribute('type') == 'password') {
        formPassword.setAttribute('type', 'text')
        showPassword.setAttribute('class', 'fa-solid fa-eye-slash')
    } else {
        showPassword.setAttribute('class', 'fa-solid fa-eye')
        formPassword.setAttribute('type', 'password')
    }
})