import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    head: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#B2B8A3',
        height: '2rem',
        color: '#FFFFFF',
        alignItems: 'center',
        borderRadius: '5px',
        fontWeight: 'bold',
        margin: '0.8rem 0rem',
    },
    column: {
        display: 'flex',
        padding: '0 0 0 5rem',
        minWidth: '10rem',
        maxWidth: '30rem'
    },
    icons: {
        display: 'flex',
        marginLeft: '5rem'
    }
}));