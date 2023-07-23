
var $signupForm = document.getElementById('register');
const spinUp = document.getElementById('spinner-signup');

$signupForm.addEventListener('submit', (event) => {
    event.preventDefault();
    starLoading();
    const userForm = new FormData($signupForm);
    $signupForm.reset();
    fetch("https://xipxat.onrender.com/signup", {
        method: 'POST',
        body: userForm,
        mode: 'cors'
    })
        .then(res => {
            if (res.ok) {
                stopLoading();
                swal({
                    title: "Great!",
                    text: "new user added",
                    icon: "success",
                    button: "log in",
                })
                    .then(() => window.location.replace('./login.html'))
            } else {
                stopLoading();
                swal({
                    title: "User NOT added",
                    text: "Are you registered?",
                    icon: "error",
                    buttons: ["try again", "log in"],
                })
                    .then(value => {
                        if (value) {
                            window.location.replace('./login.html')
                        }
                    })
            }
        })
        .catch(error => {
            console.log(error)
        });
});

function starLoading() {
    console.log('starLoading');
    spinUp.classList.remove('spin-hide');
}

function stopLoading() {
    console.log('stopLoading');
    spinUp.classList.add('spin-hide');
}
