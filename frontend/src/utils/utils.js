import { toast } from 'react-toastify';

function appendErrorMessages(response) {
    var messagesList = []
    for (var fieldError in response) {
        var messages = response[fieldError]
        messages = messages.isArray ? messages.join(' ') : messages
        messagesList.push(`${ fieldError }: ${ messages }`)
    }
    return messagesList
}

function notifySuccess(message) {
    toast.success(
        message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    )
}

function notifyWarning(message) {
    toast.warn(
        message, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    )
}

function getDateFormatJson(date){
    const dateArray = date.split('-').map(d => d.trim())
    return `${ dateArray[2] }/${ dateArray[1] }/${ dateArray[0] }`
}

export { appendErrorMessages, notifySuccess, notifyWarning, getDateFormatJson }
