

export default {
    email: [
        { required: true, message: 'Please enter your email account.' },
        { type: 'email', message: 'Please enter a valid email' }
    ],

    password: [
        { required: true, message: 'Please enter your password.' }
    ]
}