import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D1D9D9',
        alignItems: 'center',
        padding: '1rem',
        marginBottom: '1rem',
        color: '#687980',
        zIndex: 3,
        height: '1rem'
    },
    line: {
        display: 'flex',
        flexDirection: 'row',
        fontWeight: 'bold',
        marginRight: '1rem',
        zIndex: 1,
    },
    dropdown: {
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        transform: 'translate(-294%, 60%)',
        backgroundColor: '#ffffff',
        padding: '1rem',
        borderColor: '#D1D9D9',
        border: '0.1rem solid',
    },
    title: {
        display: 'flex',
        marginRight: '0.5rem'
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        display: 'flex',
        marginBottom: '1rem',
        justifyContent: 'center'
    },
    wrappers: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#D1D9D9',
        height: '3rem',
        color: '#687980',
        alignItems: 'center',
        fontWeight: 'bold',
        padding: '0rem 1rem',
        margin: '0 0 0.4rem 0rem'
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    text: {
        display: 'flex',
        margin: '0 2rem',
        width: '10.6rem',
        padding: '0 0 0 0.4rem'
    },
    icons: {
        display: 'flex',
        marginLeft: '0.8rem'
    }
}));