function appendErrorMessages(response) {
    var messagesList = []
    for (var fieldError in response) {
        var messages = response[fieldError]
        messages = messages.isArray ? messages.join(' ') : messages
        messagesList.push(`${ fieldError }: ${ messages }`)
    }
    return messagesList
}

export { appendErrorMessages }