import React from 'react';
import ListItem from '../ListItem';
import ListHeader from '../ListHeader';

const List = (props) => {
    return <div>
        <ListHeader head={props.head} icons={props.icons} />
        <ListItem
            addIcons={props.addIcons}
            defaultL={props.defaultL}
            total={props.total}
            taskCounter={props.taskCounter}
            ideaCounter={props.ideaCounter}
            randomCounter={props.randomCounter}
            tasks={props.tasks}
            ideas={props.ideas}
            random={props.random}
        />
    </div>
}

export default List;