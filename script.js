//Code 2 sample:

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var ageError = document.getElementById('age-error');
var genderError = document.getElementById('gender-error');
var imageError = document.getElementById('image-error');
var submitError = document.getElementById('submit-error');
// var submitBtn = document.getElementById('submitBtn');

var vname = false;
var vphone = false;
var vemail = false;
var vage = false;
var vgender = false;
var vimage = false;

// Reference the submit button
document.addEventListener('DOMContentLoaded', function() {
    var submitBtn = document.getElementById('submitBtn');
});

// Restrict input to letters and spaces for name
document.getElementById('Name').addEventListener('input', restrictNameInput);
function restrictNameInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^a-zA-Z ]/g, ''); 
    validateName();
}


// function restrictNameInput(event) {
//     const value = event.target.value;
//     event.target.value = value.replace(/[^a-zA-Z ]/g, ''); 
//     validateName();
// }

// Restrict input to numeric values for phone and age
document.getElementById('Phone').addEventListener('input', restrictNumericInput);
document.getElementById('Age').addEventListener('input', restrictNumericInput);
function restrictNumericInput(event) {
    const value = event.target.value;
    event.target.value = value.replace(/[^0-9]/g, ''); 
    // validatePhone();
    // validateAge();
}



function validateName(event) {
    var nameInput = document.getElementById('Name');
    var name = nameInput.value;
    var key = event.key;


    // Check if the pressed key is a number
    if (isNaN(key)) {
        // If it's a number, prevent it from being entered and show the error
        //event.preventDefault();
        nameError.innerHTML = 'Only alphabets are allowed';
        nameError.classList.remove('success');
        nameError.classList.add('error');
        vname = false;
    } 
    else if(name.length === 0) {
        nameError.innerHTML = 'Name is required';
        nameError.classList.remove('success');
        nameError.classList.add('error');
        vname = false;
    } 
    
    if (name.length < 3) {
        nameError.innerHTML = 'Name must be at least 3 characters long and alphabets';
        nameError.classList.remove('success');
        nameError.classList.add('error');
        vname = false;
    }
    else{
        nameError.innerHTML = 'Valid name';
        nameError.classList.remove('error');
        nameError.classList.add('success');
        vname = true;
    }

    checkSubmitButton(); // Enable or disable submit button based on validation
}





// Validate phone number
function validatePhone() {
    var phoneInput = document.getElementById('Phone');
    var phone = phoneInput.value;

    // Allow only digits and limit input to 10 digits
    phone = phone.replace(/\D/g, ''); // Remove any non-digit characters
    if (phone.length > 10) {
        phone = phone.slice(0, 10); // Limit the input to the first 10 digits
    }
    phoneInput.value = phone; // Update the input value to exclude extra digits

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        phoneError.classList.remove('success');
        phoneError.classList.add('error');
        vphone = false;
    } else if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number must be exactly 10 digits';
        phoneError.classList.remove('success');
        phoneError.classList.add('error');
        vphone = false;
    } else {
        phoneError.innerHTML = 'Valid phone number';
        phoneError.classList.remove('error');
        phoneError.classList.add('success');
        vphone = true;
    }
    
    checkSubmitButton();
}


// Validate email
function validateEmail() {
    var email = document.getElementById('Email').value;
    var emailPattern = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        emailError.classList.remove('success');
        emailError.classList.add('error');
        vemail = false;
    } else if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Please enter a valid email address';
        emailError.classList.remove('success');
        emailError.classList.add('error');
        vemail = false;
    } else {
        emailError.innerHTML = 'Valid email';
        emailError.classList.remove('error');
        emailError.classList.add('success');
        vemail = true;
        
    }
    checkSubmitButton();
}

// Validate age
function validateAge() {
    var age = document.getElementById('Age').value;
    if (age.length === 0) {
        ageError.innerHTML = 'Age is required';
        ageError.classList.remove('success');
        ageError.classList.add('error');
        vage = false;
    } else if (isNaN(age) || age < 18 || age > 100) {
        ageError.innerHTML = 'Age must be between 18 and 100';
        ageError.classList.remove('success');
        ageError.classList.add('error');
        vage = false;
    } else {
        ageError.innerHTML = 'Valid age';
        ageError.classList.remove('error');
        ageError.classList.add('success');
        vage = true;
        
    }
    checkSubmitButton();
}

// Validate gender
function validateGender() {
    var gender = document.getElementById('Gender').value;
    if (gender === "") {
        genderError.innerHTML = 'Gender is required';
        genderError.classList.remove('success');
        genderError.classList.add('error');
        vgender = false;
    } else {
        genderError.innerHTML = 'Valid gender';
        genderError.classList.remove('error');
        genderError.classList.add('success');
        vgender = true;
        
    }
    checkSubmitButton();
}

// Validate image
function validateImage() {
    var fileInput = document.getElementById('File');
    var file = fileInput.files[0];
    var allowedTypes = ['image/jpeg', 'image/png'];

    if (!file) {
        imageError.innerHTML = 'Image is required';
        imageError.classList.remove('success');
        imageError.classList.add('error');
        vimage = false;
    } else if (!allowedTypes.includes(file.type)) {
        imageError.innerHTML = 'Only .jpg and .png files are allowed';
        imageError.classList.remove('success');
        imageError.classList.add('error');
        vimage = false;
    } else if (file.size > 5 * 1024 * 1024) { // 5MB
        imageError.innerHTML = 'Image size must not exceed 5MB';
        imageError.classList.remove('success');
        imageError.classList.add('error');
        vimage = false;
    } else {
        imageError.innerHTML = 'Valid image';
        imageError.classList.remove('error');
        imageError.classList.add('success');
        vimage = true;
        
    }
    checkSubmitButton();
}

// Event listeners for validation
document.getElementById('Name').addEventListener('onchange', validateName);
document.getElementById('Phone').addEventListener('onchange', validatePhone);
document.getElementById('Email').addEventListener('onchange', validateEmail);
document.getElementById('Age').addEventListener('onchange', validateAge);
document.getElementById('Gender').addEventListener('onchange', validateGender);
document.getElementById('File').addEventListener('onchange', validateImage);

function checkSubmitButton() {

    if (vname && vphone && vemail && vage && vgender && vimage) {

        console.log("if");

           submitBtn.disabled = false; // Enable submit button
    }

    else {
            console.log("else");
            submitBtn.disabled = true; // Disable submit button
        }


    // //Show success message and proceed to submit the form
    // showSuccessMessage();

    // //Delay the form submission slightly to show the success message before redirecting
    // setTimeout(function() {
    //     document.getElementById('form').submit(); // Proceed to thankyou.html
    // }, 1200); // 1.2 seconds delay

    // return false; // Prevent immediate form submission to allow the success message to show
}


