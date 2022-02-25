import { Fragment } from "react"
import getSigns from '../lib/api';
import { useEffect, useState } from "react";
import classes from './SelectedSign.module.css'

const SelectedSign = ({onSignSelected}) => {
    const [signs, setSigns] = useState([])
    
    useEffect(() => {
        getSigns().then(setSigns)
      }, [])

    return <Fragment>
        <h1>Please Select a Sign</h1>
        <div className={classes.sign}>
        {signs.map((sign) => (
            <button key={sign} onClick={() => onSignSelected(sign)}>{sign}</button>
        ))}
        </div>
  </Fragment>
}

export default SelectedSign