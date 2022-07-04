

export default {
    name: [
        { required: true, message: 'Please enter your fullname' },
        { pattern: /^[a-z ,.'-]+$/i, message: 'Please enter a valid name' },
    ],
    email: [
        { required: true, message: 'Please enter your email' },
        { type: 'email', message: 'Please enter a valid email' }
    ],
    password: [
        { required: true, message: 'Please enter your password.' },
        { min: 8, message: 'Password must be atleast 8 characters.'},
        { pattern: /^(?=.*?[0-9]).{0,}$/, message: 'Password must contain a number.' },
        { pattern: /^(?=.*?[a-z]).{0,}$/, message: 'Password must contain a lowercase letter.' },
        { pattern: /^(?=.*?[A-Z]).{0,}$/, message: 'Password must contain an uppercase letter.' } //Must have letter and number
    ],
    password_confirmation: [
        { required: true, message: 'Please confirm your password.' },
        ({ getFieldValue  }) => ({
            validator: async(_, value) => {
                if (!value || getFieldValue('password') === value) {
                    return
                }
                throw new Error('The two password you entered does not match')
            }
        })
    ]
}