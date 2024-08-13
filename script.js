function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/; 
    return phonePattern.test(phone);
}

function validateTextInput(text) {
    return text.trim().length > 0; 
}

function validateField(fieldId, validationFunc, errorMessage) {
    const field = document.getElementById(fieldId);
    const errorSpan = document.getElementById(fieldId + 'Error');
    
    if (!validationFunc(field.value)) {
        errorSpan.textContent = errorMessage;
        return false;
    } else {
        errorSpan.textContent = '';
        return true;
    }
}

function validateBookingForm() {
    let isValid = true;

    // Validate each field
    isValid &= validateField('name', validateTextInput, 'Please enter your full name.');
    isValid &= validateField('email', validateEmail, 'Please enter a valid email address.');
    isValid &= validateField('phone', validatePhoneNumber, 'Please enter a valid 10-digit phone number.');
    isValid &= validateField('reason', validateTextInput, 'Please enter the reason for your appointment.');
    isValid &= validateField('date', validateTextInput, 'Please select a preferred date for your visit.');

    return isValid;
}

function attachValidation(formId) {
    const form = document.getElementById(formId);
    form.onsubmit = function(event) {
        if (!validateBookingForm()) {
            event.preventDefault(); 
        }
    };
}


// Function to toggle form visibility
const toggleFormVisibility = () => {
    const form = document.getElementById('bookingForm');
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
};


const initialize = () => {
    const bookAppointmentBtn = document.getElementById('bookAppointmentBtn');
    if (bookAppointmentBtn) {
        bookAppointmentBtn.addEventListener('click', toggleFormVisibility);
    }
    attachValidation('appointmentForm'); 
};

// Initialize when the window loads
window.addEventListener('load', initialize);
