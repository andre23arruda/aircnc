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

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

export { showAlert, toTitleCase }