
export function validateData({ name, email, message }) {
    let errorData = { errorTypeValidation: '', errorTextValidation: ''}
    const nameRegex = /^[A-Za-zaáÁéÉíÍóÓúÚ\u00f1\u00d1]+$/
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    switch (true) {
        case !name:
            errorData = { errorTypeValidation: 'name', errorTextValidation: 'Nombre es requerido.'}
            return errorData
        case !email:
            errorData = { errorTypeValidation: 'email', errorTextValidation: 'Email es requerido.'}
            return errorData
        case !message:
            errorData = { errorTypeValidation: 'message', errorTextValidation: 'Mensaje es requerido.'}
            return errorData
        case name &&
            (name.length < 2 || name.length > 20 || !nameRegex.test(name)):
            errorData = { errorTypeValidation: 'name', errorTextValidation: 'Tu nombre debe contener entre 2 y 20 letras.'}
            return errorData
        case email &&
            !emailRegex.test(email):
            errorData = { errorTypeValidation: 'email', errorTextValidation: 'Email no válido.'}
            return errorData
        case message && (message.length < 10 || message.length >= 200):
            errorData = { errorTypeValidation: 'message', errorTextValidation: 'Tu mensaje debe contener entre 10 y 200 caracteres.'}
            return errorData
        default:
            return false
    }
}