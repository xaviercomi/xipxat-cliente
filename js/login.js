
var $signupForm = document.getElementById('login');
const spinLog = document.getElementById('spinner-login');


$signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    starLoading();
    const userForm = new FormData($signupForm);
    $signupForm.reset();
    fetch("https://xipxat.onrender.com/login", {
        method: "POST",
        body: userForm,
        mode: "cors"
    })
        .then(res => {
            if (res.ok) {
                stopLoading();
                swal({
                    title: "Access granted!",
                    text: "ready to chat?",
                    icon: "success",
                    button: "start"
                })
                    .then(value => {
                        if (value) {
                            window.location.replace('./index.html')
                        }
                    })
            } else {
                stopLoading();
                swal({
                    title: 'access NOT granted',
                    text: "try again or register",
                    icon: "error",
                    buttons: ["try again", "register"],
                })
                    .then(value => {
                        if (value) {
                            window.location.replace('./signup.html')
                        }
                    })
            }
        })
        .catch(err => console.log(err))

});

function starLoading() {
    console.log('starLoading');
    spinLog.classList.remove('spin-hide');
}

function stopLoading() {
    console.log('stopLoading');
    spinLog.classList.add('spin-hide');
}


