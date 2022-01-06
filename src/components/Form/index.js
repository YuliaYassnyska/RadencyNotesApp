import React, { useState } from 'react';
import useStyles from '../../styles/Form';
import { options } from '../../data';
import List from '../List';
import EditIcon from '@material-ui/icons/Edit';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import { headers } from '../../data';

const Form = () => {
    const classes = useStyles();
    const [option, setOption] = useState('');
    const [dropdown, setDropdown] = useState(false);
    const [value, setValue] = useState({
        name: '',
        newName: '',
        content: '',
        newContent: '',
        listOfNames: ['Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list', 'Shopping list'],
        listOfContents: ['Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread', 'Tomatoes, bread'],
        listOfOptions: ['Task', 'Task', 'Task', 'Task', 'Task', 'Task', 'Task'],
        date: '',
        listOfDates: ['April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021', 'April, 20, 2021'],
        noteDate: '',
        listOfNoteDate: ['', '', '', '', '', '', ''] 
    });
    const [counter, setCounter] = useState({
        task: 0,
        idea: 0,
        random: 0
    });
    const [active, setActive] = useState({
        task: 7,
        idea: 0,
        random: 0
    });
    const [listItem, setListItem] = useState(7);
    const [update, setUpdate] = useState(false);
    const [edit, setEdit] = useState(true);

    const numOfOptions = options.length;

    const getName = (event) => {
        let values = event.currentTarget.value;
        return (
            setValue({ ...value, name: values })
        )
    }

    const getContent = (e) => {
        let newValue = e.currentTarget.value;
        console.log(newValue)
        // var valid = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
        var valid = /^\d{2}([./-])\d{2}\1\d{4}$/gi
        console.log("12-12-2000sadasd".match(valid))
        if (valid.test(newValue)) {
            setValue({ ...value, content: newValue, noteDate: newValue})
            console.log('hi')
        } else {
            setValue({ ...value, content: newValue })
        }
    }

    const getOption = () => {
        return options.map((el, index) => {
            return <div
                active={index === numOfOptions}
                key={index}
                onClick={() => {
                    setOption(el);
                    setDropdown(false);
                }}>{el}</div>
        })
    }

    const sumbit = () => {
        var today = new Date();
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var date = months[(today.getMonth())] + ', ' + today.getDate() + ', ' + today.getFullYear();

        setListItem(listItem + 1);

        var listOfNames = value.listOfNames.push(value.name);
        var listOfContents = value.listOfContents.push(value.content);
        var listOfOptions = value.listOfOptions.push(option);
        var listOfDates = value.listOfDates.push(date);
        var listOfNoteDate = value.listOfNoteDate.push(value.noteDate);

        return {
            listOfNames,
            listOfContents,
            listOfOptions,
            listOfDates,
            listOfNoteDate,
            name: '',
            content: ''
        };
    }

    const getListItem = () => {
        var item = [...Array(listItem)].map((_, index) => {

            return <><div className={classes.wrappers}>
                <EventNoteRoundedIcon />
                <div className={classes.textContainer}>
                    {update ? <input
                        onChange={(event) => {
                            setEdit(true);
                            var newValue = event.currentTarget.value;
                            value.listOfNames[index] = newValue;
                            return setValue({ ...value, newName: newValue })
                        }}
                        value={edit ? value.newName : value.listOfNames[index]} /> :
                        <div className={classes.text}>{value.listOfNames[index]}</div>}
                    <div className={classes.text}>{value.listOfDates[index]}</div>
                    <div className={classes.text}>{value.listOfOptions[index]}</div>
                    {update ? <input
                        onChange={(e) => {
                            setEdit(true);
                            var newValue = e.currentTarget.value;
                            value.listOfContents[index] = newValue;
                            return setValue({ ...value, newContent: newValue })
                        }}
                        value={edit ? value.newContent : value.listOfContents[index]} /> :
                        <div className={classes.text}>{value.listOfContents[index]}</div>}
                    <div className={classes.text}>{value.listOfNoteDate[index]}</div>
                    {update && <button onClick={() => setUpdate(false)}>Save</button>}
                </div><div className={classes.icons}>
                    <div onClick={() => {
                        setUpdate(true);
                    }}>
                        <EditIcon />
                    </div>
                    <div onClick={() => {
                        if (value.listOfOptions[index] === 'Task') {
                            setCounter({ ...counter, task: counter.task + 1 })
                        } else if (value.listOfOptions[index] === 'Idea') {
                            setCounter({ ...counter, idea: counter.idea + 1 })
                        } else {
                            setCounter({ ...counter, random: counter.random + 1 })
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
                                setActive({ ...active, task: active.task - 1 })
                            } else if (value.listOfOptions[index] === 'Idea') {
                                setActive({ ...active, idea: active.idea - 1 })
                            } else if (value.listOfOptions[index] === 'Random Thought') {
                                setActive({ ...active, random: active.random - 1 })
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
            </div>
            </>
        })

        return item
    }

    const activeItems = () => {
        return [...Array(listItem)].forEach((_, index) => {
            index = listItem;
            if (value.listOfOptions[index] === 'Task') {
                setActive({ ...active, task: active.task + 1 })
            } else if (value.listOfOptions[index] === 'Idea') {
                setActive({ ...active, idea: active.idea + 1 })
            } else if (value.listOfOptions[index] === 'Random Thought') {
                setActive({ ...active, random: active.random + 1 })
            }
        })
    }



    return <><div className={classes.container}>
        {getListItem()}
        <div className={classes.wrapper}>
            <div className={classes.line}>
                <div className={classes.title}>Name:</div>
                <input onChange={(event) => getName(event)} value={value.name} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Category:</div>
                <input value={option} onClick={() => {
                    setDropdown(true);
                }} />
            </div>
            <div className={classes.line}>
                <div className={classes.title}>Content:</div>
                <input onChange={(e) => getContent(e)} value={value.content} />
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
            taskCounter={counter.task}
            ideaCounter={counter.idea}
            randomCounter={counter.random}
            tasks={active.task}
            ideas={active.idea}
            random={active.random}
        />
    </>
}

export default Form;