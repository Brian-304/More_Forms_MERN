import React, { useState } from  'react';
//Used for CSS
import styles from './UserForm.module.css';
    

const UserForm = () => {
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("");
    //Variables to set errors
    const [inputFirstName, setFirstNameError] = useState("");
    const [inputLastName, setLastNameError] = useState("");
    const [inputEmail, setEmailError] = useState("");
    const [inputPassWord, setPassWordError] = useState("");
    const [inputConfirmPassWord, setConfirmPassWordError] = useState("");
    const [matchPassword, setMatchPassWordError] = useState("");


// Validation Functions that get called onchange from inputs 
    const valFirstName = (e) => {
        if(e.target.value.length < 1) {
            setFirstNameError("Field is required");
        } else if(e.target.value.length < 2) {
            setFirstNameError("Field must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }

    const valLastName = (e) => {
        if(e.target.value.length < 1) {
            setLastNameError("Field is required");
        } else if(e.target.value.length < 2) {
            setLastNameError("Field must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }

    const valEmail = (e) => {
        if(e.target.value.length < 1) {
            setEmailError("Field is required");
        } else if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }

    // This function gets called from valPassword and valConfirmedPassword
    const valMatchPassWord = (newPassword, newConfirmedPassword) => {
        if(newPassword !== newConfirmedPassword) {
            setMatchPassWordError("Password must match");
        } else {
            setMatchPassWordError("");
        }
    }

    const valPassWord = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPassWordError("Field is required");
        } else if(e.target.value.length < 8) {
            setPassWordError("Field must be at least 8 characters");
        } else {
            setPassWordError("");
        }
        valMatchPassWord(e.target.value, confirmpassword)
    }

    const valConfirmPassWord = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPassWordError("Field is required");
        } else if(e.target.value.length < 8) {
            setConfirmPassWordError("Field must be at least 8 characters");
        } else {
            setConfirmPassWordError("");
        }
        valMatchPassWord(password, e.target.value)
    }

    

    
    return(
        <form onSubmit= { (e) => e.preventDefault}>
            <div>
                <label>First Name: </label> 
                <input className={styles.inputrow} type="text" onChange={ valFirstName } />
                {
                    inputFirstName ?
                    <p style={{color:'red'}}>{inputFirstName}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input className={styles.inputrow} type="text" onChange={ valLastName } />
                {
                    inputLastName ?
                    <p style={{color:'red'}}>{inputLastName}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input className={styles.inputrow} type="text" onChange={ valEmail } />
                {
                    inputEmail ?
                    <p style={{color:'red'}}>{inputEmail}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input className={styles.inputrow} type="text" onChange={ valPassWord } />
                {
                    inputPassWord ?
                    <p style={{color:'red'}}>{inputPassWord}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input className={styles.inputrow} type="text" onChange={ valConfirmPassWord } />
                {
                    inputConfirmPassWord ?
                    <p style={{color:'red'}}>{inputConfirmPassWord}</p> :
                    ''
                }
                {
                    matchPassword ?
                    <p style={{color:'red'}}>{matchPassword}</p> :
                    ''
                }
            </div>
            <br />
            
        </form>
    );
};
    
export default UserForm;
