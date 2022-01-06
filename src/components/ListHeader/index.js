import React from 'react';
import useStyles from '../../styles/ListHeader';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';

const ListHeader = (props) => {
    const { head, icons } = props
    const classes = useStyles();


    const getColumn = () => {
        return head.map((el, index) => {
            return <div className={classes.column} key={index}>{el}</div>
        })
    }

    return <div className={classes.head}>{getColumn()}
        {icons && <div className={classes.icons}><ArchiveIcon />
            <DeleteIcon /></div>}
    </div>
}

export default ListHeader;