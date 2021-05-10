import { Alert } from 'react-native'

function showAlert(message) {
    Alert.alert(
        'Algo deu errado',
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

export { showAlert }