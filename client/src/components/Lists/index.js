import React from 'react';
import { Link } from 'react-router-dom';
import classes from './styles.module.css';
import timeStamp from '../../actions/timeStamp';

const Lists = (props) => {
  return (
    <React.Fragment>
      <Link
        to={`/${props.note._id}`}
        className={classes.lists}
      >
        <p className={classes.title}>{ props.note.title.length <= 0 ? 'Unnamed Note' : props.note.title }</p>
        <p className={classes.subtitle}>{timeStamp(props.note.updatedAt)}</p>
      </Link>
    </React.Fragment>
  )
}

export default Lists;