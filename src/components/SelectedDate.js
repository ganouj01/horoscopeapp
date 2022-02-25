import { Fragment } from "react"
import classes from './SelectedDate.module.css'

const SelectedDate = ({onDateSelected}) => {
    return <Fragment>
        <h1>Please Select a Date</h1>

        <div className={classes.date}> 
        
        {['yesterday', 'today', 'tomorrow'].map((date) => (
            <button key={date} onClick={() => onDateSelected(date)}>{date}</button>
        ))}
        </div>
  </Fragment>
}

export default SelectedDate