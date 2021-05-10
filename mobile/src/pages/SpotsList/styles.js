import { StyleSheet } from 'react-native';

export default  StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 5,
        marginBottom: 45,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    headerBackButton: {
        width: '10%',
    },

    imgLogo: {
        width: '80%',
        height: 32,
        resizeMode: 'contain',
    }

})
