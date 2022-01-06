import React from 'react';
import useStyles from '../../styles/ListItem';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { options } from '../../data';

const ListItem = (props) => {
    const { addIcons, total, taskCounter, ideaCounter, randomCounter, tasks, ideas, random } = props;
    const classes = useStyles();

    return <>
        <>
            {total && <>{options.map((_, index) => {
                const getArchive = () => {
                    if (options[index] === 'Task') {
                        return <div>{taskCounter}</div>
                    } else if (options[index] === 'Idea') {
                        return <div>{ideaCounter}</div>
                    } else {
                        return <div>{randomCounter}</div>
                    }
                }

                const getActive = () => {
                    if (options[index] === 'Task') {
                        return <div>{tasks}</div>
                    } else if (options[index] === 'Idea') {
                        return <div>{ideas}</div>
                    } else {
                        return <div>{random}</div>
                    }
                }

                return <div className={classes.wrapper} key={index}>
                    <EventNoteRoundedIcon />
                    <div className={classes.text}>{options[index]}</div>
                    <div className={classes.text}>{getActive()}</div>
                    <div className={classes.text}>{getArchive()}</div>
                    {addIcons && <div className={classes.icons}>
                        <EditIcon />
                        <ArchiveIcon />
                        <DeleteIcon />
                    </div>}
                </div>
            })}</>}
        </>
    </>
}

export default ListItem;