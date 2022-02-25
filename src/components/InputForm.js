import { useRef } from "react"
import classes from './InputForm.module.css'


const InputForm = (props) => {

    const emailInputRef = useRef()
    const nameInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault()

        const enteredEmail = emailInputRef.current.value
        const enteredName = nameInputRef.current.value
        
        props.inputData({email: enteredEmail, name: enteredName})
    }

    return <form onSubmit={submitHandler}>
        <div className={classes.form}>

        <div className="name">
        <label htmlFor='name'>Enter your name:</label>
        <input id="name" ref={nameInputRef} minLength='1' required />
        </div>
        
        <div className="email">
        <label htmlFor='email'>Enter your email:</label>
        <input id="email" ref={emailInputRef} type='email' required />
        </div>

        <button type="submit" className={classes.submit}>Submit</button>
        </div>
    </form>
}

export default InputForm