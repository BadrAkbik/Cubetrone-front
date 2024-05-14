import validator from 'validator'
const USER_REGEX = /^[a-zA-Z\s]*$/
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{8,24}$/;
const PHONE_REGEX = /^[\+0-9]{9,13}$/
const GENDER_LIST = ['male', 'female']

export const validateSignupInputs = (data) => {
    const errors = {}

    const first_name = data.get('first_name') || ''
    const last_name = data.get('last_name') || ''
    const email = data.get('email') || ''
    const gender = data.get('gender') || ''
    const phone_num = data.get('phone_num') || ''
    const date_of_birth = data.get('date_of_birth') || ''
    const password = data.get('password') || ''
    const password_confirmation = data.get('password_confirmation') || ''

    if (!USER_REGEX.test(first_name + last_name) || !first_name.trim() || !last_name.trim()) {
        errors.first_name = 'please write a valid name'
    }
    if (!email.trim() || !EMAIL_REGEX.test(email)) {
        errors.email = 'please write a valid email'
    }
    if (!phone_num.trim() || !PHONE_REGEX.test(phone_num)) {
        errors.phone_num = 'please write a valid phone number'
    }
    if (!gender.trim() || !GENDER_LIST.includes(gender)) {
        errors.gender = 'please select gender between male or female'
    }
    if (!date_of_birth.trim() || !validator.isDate(date_of_birth)) {
        errors.date_of_birth = 'please select a valid date'
    }
    if (!password.trim() || !PWD_REGEX.test(password)) {
        errors.password = 'Your password must be at least 8 characters and contains at least one number and letter'
    }
    if (!password_confirmation.trim() || !password === password_confirmation) {
        errors.password_confirmation = 'Password confirmation does not match the password you wrote'
    }

    let hasErrors = false;
    for (const key in errors) {
        if (errors[key]) {
            hasErrors = true;
            break;
        }
    }

    return { errors: errors, hasErrors: hasErrors }
}

export const validateLoginInputs = (data) => {
    const errors = {}

    const email = data.get('email') || ''
    const password = data.get('password') || ''
    
    if (!email.trim() || !EMAIL_REGEX.test(email)) {
        errors.email = 'please write a valid email'
    }
    if (!password.trim() || !PWD_REGEX.test(password)) {
        errors.password = 'Your password must be at least 8 characters and contains at least one number and letter'
    }

    let hasErrors = false;
    for (const key in errors) {
        if (errors[key]) {
            hasErrors = true;
            break;
        }
    }

    return { errors: errors, hasErrors: hasErrors }
}
