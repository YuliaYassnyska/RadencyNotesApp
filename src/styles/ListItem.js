import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    wrapper: {
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