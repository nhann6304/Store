const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// button 
const modal = $('.modal')
const loginBtn = $('#header__navbar-item-login');
const registerBtn = $('#header__navbar-item-Register')
const returnShowbtn = $$('.auth-form__controls-back');

// show log and  Register
const showRegister = $('.auth-form-Register');
const showLogin = $('.auth-form-login');
//   app
const app = {
    handleEvents: function () {
        loginBtn.onclick = function () {
            modal.style.display = "flex";
            showLogin.style.display = "none";
        }

        registerBtn.onclick = function () {
            modal.style.display = "flex";
            showRegister.style.display = "none";
        }

        returnShowbtn.forEach(function (item) {
            item.addEventListener("click", function () {
                modal.style.display = "none";
                showLogin.style.display = "block";
                showRegister.style.display = "block";
            });
        });
    },

    start: function () {
        this.handleEvents();
    }
}

app.start();