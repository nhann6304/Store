const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// button 
const modal = $('.modal')
const loginBtn = $('#header__navbar-item-login');
const registerBtn = $('#header__navbar-item-Register')
const returnShowbtn = $$('.auth-form__controls-back');
const paginationbtn = $$('.pagination-item');

// show log and  Register
const showPaginationactive = $$('.pagination-item');
console.log(showPaginationactive);
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
        },

            returnShowbtn.forEach(function (item) {
                item.addEventListener("click", function () {
                    modal.style.display = "none";
                    showLogin.style.display = "block";
                    showRegister.style.display = "block";
                });
            }),
            paginationbtn.forEach(function (page) {
                page.addEventListener('click', function (event) {
                    event.preventDefault();
                    paginationbtn.forEach(function (item) {
                        item.classList.remove('pagination-item--active');
                    });
                    page.classList.add('pagination-item--active');
                });
            });
    },

    start: function () {
        this.handleEvents();
    }
}

app.start();

