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
    },

    bookingsList: {
        marginTop: 20,
    },

    booking: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ccc',
        marginBottom: 15,
        marginHorizontal: 5,
        padding: 20,
        borderRadius: 5,
    },

    info: {
        width: '75%',
    },

    bookingProp: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
    },

    okButton: {
        backgroundColor: '#b3b3b3',
        padding: 20,
        borderRadius: 10,

    },

    okButtonText: {
        color: '#FFF',
        fontSize: 25,
    }


})
