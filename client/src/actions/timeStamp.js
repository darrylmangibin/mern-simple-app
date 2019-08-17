import moment from 'moment';

const timeStamp = (ts) => {
  return `Last Edited ${moment(ts).fromNow()}`
}

export default timeStamp;