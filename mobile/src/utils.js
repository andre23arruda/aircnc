import { Alert } from 'react-native'

function showAlert(message, title='Algo deu errado') {
    Alert.alert(
        title,
        message,
        [
            {
                text: 'Ok',
                style: 'cancel'
            },
        ],
        {cancelable: false},
    )
}

function toTitleCase(str) {
  	return str.replace(
		/\w\S*/g,
		function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
		}
    )
}


function getDateFormat(date){
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth()).padStart(2, '0')
    return `${ day }/${ month }/${ date.getFullYear() }`
}

function getDateFormatToSubmit(date){
	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth()).padStart(2, '0')
    return `${ date.getFullYear() }-${ month }-${ day }`
}

function getDateFormatJson(date){
    const dateArray = date.split('-').map(d => d.trim())
    return `${ dateArray[2] }/${ dateArray[1] }/${ dateArray[0] }`
}

export { showAlert, toTitleCase, getDateFormat, getDateFormatToSubmit, getDateFormatJson }