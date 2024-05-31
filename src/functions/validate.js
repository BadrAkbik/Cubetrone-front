import validator from 'validator'
const USER_REGEX = /^[a-zA-Z\s]{2,10}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{8,24}$/;
const PHONE_REGEX = /^[\+0-9]{9,13}$/
const GENDER_LIST = ['male', 'female']
const VERIFICATION_CODE = /^[\+0-9]{6}$/
const MAX_LENGTH_REGEX = /^.{0,2200}$/
const USER_NAME = /^[a-zA-Z0-9]{6,14}$/

const SignupRules = [
    {
        field: 'first_name',
        validate: (value) => USER_REGEX.test(value) && value.trim(),
        errorMessage: 'please write a valid and not a long name'
    },
    {
        field: 'last_name',
        validate: (value) => USER_REGEX.test(value) && value.trim(),
        errorMessage: 'please write a valid and not a long name'
    },
    {
        field: 'username',
        validate: (value) => USER_NAME.test(value) && value.trim(),
        errorMessage: 'The user name must have between 6 and 14 characters, Allowed characters are only letters and numbers'
    },
    {
        field: 'email',
        validate: (value) => EMAIL_REGEX.test(value) && value.trim(),
        errorMessage: 'please write a valid email'
    },
    {
        field: 'phone_num',
        validate: (value) => !value.trim() || (PHONE_REGEX.test(value) && value.trim()),
        errorMessage: 'please write a valid phone number'
    },
    {
        field: 'gender',
        validate: (value) => GENDER_LIST.includes(value) && value.trim(),
        errorMessage: 'please select gender between male or female'
    },
    {
        field: 'date_of_birth',
        validate: (value) => validator.isDate(value) && value.trim(),
        errorMessage: 'please select a valid date'
    },
    {
        field: 'password',
        validate: (value) => PWD_REGEX.test(value) && value.trim(),
        errorMessage: 'Your password must be at least 8 characters and contain at least one number and letter'
    },
    {
        field: 'password_confirmation',
        validate: (value, data) => value === data.get('password') && value.trim(),
        errorMessage: 'Password confirmation does not match the password you wrote'
    }
];

const loginRules = [
    {
        field: 'email',
        validate: (value) => EMAIL_REGEX.test(value) && value.trim(),
        errorMessage: 'please write a valid email'
    }
]

const emailVerification = [
    {
        field: 'code',
        validate: (value) => VERIFICATION_CODE.test(value) && value.trim(),
        errorMessage: 'please write a 6 digits code'
    }
]
const updateUserRules = [
    {
        field: 'first_name',
        validate: (value) => !value.trim() || (USER_REGEX.test(value) && value.trim()),
        errorMessage: 'please write a valid and not a long name'
    },
    {
        field: 'last_name',
        validate: (value) => !value.trim() || (USER_REGEX.test(value) && value.trim()),
        errorMessage: 'please write a valid and not a long name'
    },
    {
        field: 'username',
        validate: (value) => !value.trim() || (USER_NAME.test(value) && value.trim()),
        errorMessage: 'The user name must have between 6 and 14 characters, Allowed characters are only letters and numbers'
    },
    {
        field: 'email',
        validate: (value) => !value.trim() || (EMAIL_REGEX.test(value) && value.trim()),
        errorMessage: 'please write a valid email'
    },
    {
        field: 'phone_num',
        validate: (value) => !value.trim() || (PHONE_REGEX.test(value) && value.trim()),
        errorMessage: 'please write a valid phone number'
    },
    {
        field: 'gender',
        validate: (value) => !value.trim() || (GENDER_LIST.includes(value) && value.trim()),
        errorMessage: 'please select gender between male or female'
    },
    {
        field: 'about',
        validate: (value) => !value.trim() || (MAX_LENGTH_REGEX.test(value) && value.trim()),
        errorMessage: 'Do not type above 2200 character please'
    },
    {
        field: 'date_of_birth',
        validate: (value) => !value.trim() || (validator.isDate(value) && value.trim()),
        errorMessage: 'please select a valid date'
    },
    {
        field: 'password',
        validate: (value) => !value.trim() || (PWD_REGEX.test(value) && value.trim()),
        errorMessage: 'Your password must be at least 8 characters and contain at least one number and letter'
    },
    {
        field: 'password_confirmation',
        validate: (value, data) => !value.trim() || (value === data.get('password') && value.trim()),
        errorMessage: 'Password confirmation does not match the password you wrote'
    }
];

const rulesMap = {
    signup: SignupRules,
    login: loginRules,
    emailVerification: emailVerification,
    updateUser: updateUserRules
};

export const validateInputs = (data, type) => {
    const errors = {};
    const rules = rulesMap[type];
    if (!rules) {
        throw new Error(`No rules defined for type: ${type}`);
    }

    rules.forEach(({ field, validate, errorMessage }) => {
        const value = data.get(field) || '';
        if (!validate(value, data)) {

            errors[field] = errorMessage;

        }
    });

    const hasErrors = Object.keys(errors).length > 0;

    return { errors, hasErrors };
};