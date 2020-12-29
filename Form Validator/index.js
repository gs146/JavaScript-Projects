// console.log("linked file")

const name = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')

$('#failure').hide();
$('#success').hide()

let validEmail = false;
let validUser = false
let validPhone = false
// console.log(name, email, phone)


name.addEventListener('blur', () => {
    console.log('name is blurred')
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;

    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Entered name is valid");
        name.classList.remove('is-invalid');
        validUser = true;
    }

    else {
        validUser = false;
        console.log("Please enter valid name!")
        name.classList.add('is-invalid')
    }

})

email.addEventListener('blur', () => {
    console.log('email is blurred')

    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;

    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Entered email is valid");
        email.classList.remove('is-invalid');
        validEmail = true;
    }

    else {
        validEmail = false;
        console.log("Please enter valid email!")
        email.classList.add('is-invalid')
    }
})

phone.addEventListener('blur', () => {
    console.log('phone is blurred')

    let regex = /^([0-9]){10}$/;

    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Entered phone is valid");
        phone.classList.remove('is-invalid');
        validPhone = true;
    }

    else {
        validPhone = false;
        console.log("Please enter valid phone!")
        phone.classList.add('is-invalid')
    }
})

let submit = document.getElementById('submit')
submit.addEventListener('click', (event) => {
    event.preventDefault()
    console.log("You clicked on submit button!")

    let success = document.getElementById('success');
    let failure = document.getElementById('failure');

    if (validEmail && validPhone && validUser) {
        console.log("Data entered is all correct!..Ready to submit!")
        // success = document.getElementById('success')
        success.classList.add('show')
        // failure.classList.remove('show')
        // $('#failure').alert('close')
        $('#failure').hide();
        $('#success').show()
    }
    else {
        console.log('Entered detail from name email or phone is incorrect!')
        // failure = document.getElementById('failure')
        failure.classList.add('show')
        // success.classList.remove('show')
        // $('#success').alert('close')
        $('#success').hide()
        $('#failure').show();
    }
})