import React, { useState } from 'react';
import useStyles from '../../styles/Form';
import { options } from '../../data';
import List from '../List';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { headers } from '../../data';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../../actions/reducers'
import { archivedTaskAdd, archivedIdeaAdd, archivedIdeaSub, archivedRandomSub, archivedRandomAdd, ideaAdd, ideaSub, randomAdd, randomSub, taskAdd, taskSub, archivedTaskSub } from '../../actions/actions';
import thunk from 'redux-thunk';

const Form = () => {
    const classes = useStyles();

    const store = createStore(rootReducer, applyMiddleware(thunk))
    store.subscribe(() => { })

    const [value, setValue] = useState({
        name: '',
        newName: '',
        content: '',
        newContent: '',
        listOfNames: ['Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list'],
        listOfContents: ['Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread'],
        listOfOptions: ['Task', 'Task', 'Task', 'Task', 'Task', 'Task', 'Task'],
        listOfDates: ['April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021'],
        noteDate: '',
        listOfNoteDate: ['3/12/2020', '3/12/2020', '3/12/2020', '3/12/2020', '3/12/2020', '3/12/2020', '3/12/2020'],
        listUpdates: ['', '', '', '', '', '', '']
    });
    const [option, setOption] = useState('')
    const [listItem, setListItem] = useState(7);
    const [edit, setEdit] = useState(true);
    const [dropdown, setDropdow] = useState(false)
    const getName = (event) => {
        let values = event.currentTarget.value;
        return (
            setValue({ ...value, name: values })
        )
    }
    const [newItem, setNewItem] = useState(false)


    const getContent = (e) => {
        let newValue = e.currentTarget.value;
        setValue({ ...value, content: newValue })
    }

    const sumbit = () => {
        let today = new Date();
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = months[(today.getMonth())] + ', ' + today.getDate() + ', ' + today.getFullYear();

        setListItem(listItem + 1);

        let listOfNames = value.listOfNames.push(value.name);
        let listOfOptions = value.listOfOptions.push(option);
        let listOfDates = value.listOfDates.push(date);
        let listOfContents;
        let listOfUpdates = value.listUpdates.push('')

        //////////////////////////////////////////////////////////////
        let valid = /\d{1,2}[-,\\,|,/]\d{1,2}[-,\\,|,/]\d{4}/;

        let listOfNoteDate;

        if (valid.test(value.content)) {
            let dateOfContext = value.content.match(valid)[0];
            listOfNoteDate = value.listOfNoteDate.push(dateOfContext)
            listOfContents = value.listOfContents.push(value.content.replace(valid));
        } else {
            listOfNoteDate = value.listOfNoteDate.push('')
            listOfContents = value.listOfContents.push(value.content);
        }
        //////////////////////////////////////////////////////////////

        setValue({
            ...value,
            noteDate: ''
        })

        return {
            listOfNames,
            listOfContents,
            listOfOptions,
            listOfDates,
            listOfNoteDate,
            listOfUpdates
        }
    }

    const update = (index) => {
        return <input
            onChange={(event) => {
                setEdit(true);
                let newValue = event.currentTarget.value;
                value.listOfNames[index] = newValue;
                setValue({ ...value, newName: newValue })
            }}
            defaultValue={edit ? value.newName : value.listOfNames[index]} />
    }

    const getListItem = () => {
        let item = [...Array(listItem)].map((item, index) => {
            return <div className={classes.wrappers} key={index}>
                <EventNoteRoundedIcon />
                <div className={classes.textContainer}>
                    {value.listUpdates[index] === true ? update(index) :
                        <div className={classes.text}>{value.listOfNames[index]}</div>}
                    <div className={classes.text}>{value.listOfDates[index]}</div>
                    <div className={classes.text}>{value.listOfOptions[index]}</div>
                    {value.listUpdates[index] === true ? <input
                        onChange={(e) => {
                            setEdit(true);
                            let newValue = e.currentTarget.value;
                            value.listOfContents[index] = newValue;
                            return setValue({ ...value, newContent: newValue })
                        }}
                        defaultValue={edit ? value.newContent : value.listOfContents[index]} /> :
                        <div className={classes.text}>{value.listOfContents[index]}</div>}
                    <div className={classes.text}>{value.listOfNoteDate[index]}</div>
                    {value.listUpdates[index] === true && <button onClick={() => {
                        value.listUpdates[index] = false
                        setNewItem(value.listUpdates[index])
                    }}>Save</button>}
                </div><div className={classes.icons}>
                    <div key={index} onClick={() => {
                        value.listUpdates[index] = true
                        console.log(value.listUpdates[index])
                        setNewItem(value.listUpdates[index])
                    }}>
                        <EditIcon />
                    </div>
                    <div onClick={() => {
                        if (value.listOfOptions[index] === 'Task') {
                            store.dispatch(archivedTaskAdd())
                            store.dispatch(taskSub())
                        } else if (value.listOfOptions[index] === 'Idea') {
                            store.dispatch(archivedIdeaAdd())
                            store.dispatch(ideaSub())
                        } else {
                            store.dispatch(archivedRandomAdd())
                            store.dispatch(randomSub())
                        }
                        if (index > -1) {
                            value.listOfNames.splice(index, 1) &&
                                value.listOfOptions.splice(index, 1) &&
                                value.listOfContents.splice(index, 1) &&
                                value.listOfDates.slice(index, 1) &&
                                [...Array(listItem)].splice(index, 1)
                        }
                        setListItem(listItem - 1);
                    }}>
                        <ArchiveIcon />
                    </div>
                    <div onClick={() => {
                        if (index > -1) {
                            if (value.listOfOptions[index] === 'Task') {
                                store.dispatch(taskSub())
                                store.dispatch(archivedTaskSub())
                            } else if (value.listOfOptions[index] === 'Idea') {
                                store.dispatch(ideaSub())
                                store.dispatch(archivedIdeaSub())
                            } else if (value.listOfOptions[index] === 'Random Thought') {
                                store.dispatch(randomSub())
                                store.dispatch(archivedRandomSub())
                            }
                            value.listOfNames.splice(index, 1) &&
                                value.listOfOptions.splice(index, 1) &&
                                value.listOfContents.splice(index, 1) &&
                                value.listOfDates.slice(index, 1) &&
                                [...Array(listItem)].splice(index, 1)

                        }
                        setListItem(listItem - 1);

                    }}>
                        <DeleteIcon />
                    </div>
                </div>
            </div >
        })

        return item
    }

    const activeItems = () => {
        if (value.listOfOptions[listItem] === 'Task') {
            store.dispatch(taskAdd())
        } else if (value.listOfOptions[listItem] === 'Idea') {
            store.dispatch(ideaAdd())
        } else if (value.listOfOptions[listItem] === 'Random Thought') {
            store.dispatch(randomAdd())
        }
    }

    const getOption = () => {
        return options.map((el, index) => {
            return <div
                key={index}
                onClick={() => {
                    setOption(el);
                    setDropdow(false)
                }}>{el}</div>
        })
    }

    return <><div className={classes.container}>
        {getListItem()}
        <div className={classes.wrapper}>
            <div className={classes.line}>
                <div className={classes.title}>Name:</div>
                <input onChange={(event) => {
                    getName(event)
                }} defaultValue={value.name} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Category:</div>
                <input defaultValue={option} onClick={() => {
                    setDropdow(true)
                }} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Content:</div>
                <input onChange={(e) => getContent(e)} defaultValue={value.content} />
            </div>
            {dropdown && <div className={classes.dropdown}>{getOption()}</div>}
        </div>
        <button className={classes.button} onClick={() => {
            sumbit();
            activeItems();
        }}>Create note</button>
    </div>
        <List
            head={headers.totalHeader}
            icons={false}
            addIcons={false}
            total={true}
            taskCounter={store.getState().archived.task}
            ideaCounter={store.getState().archived.idea}
            randomCounter={store.getState().archived.random}
            tasks={store.getState().active.task}
            ideas={store.getState().active.idea}
            random={store.getState().active.random}
        />
    </>
}

export default Form;