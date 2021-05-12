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

    headerButton: {
        width: '10%',
    },

    imgLogo: {
        width: '80%',
        height: 32,
        resizeMode: 'contain',
    },

    buttonText: {
        color: "#E02545",
        backgroundColor: "#FFF",
        width: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: -10,
        alignSelf: 'flex-end',
        marginRight: 5,
        opacity: 0,
        zIndex: 1000,
    },

    buttonTextShow: {
        opacity: 1,
    }



})
