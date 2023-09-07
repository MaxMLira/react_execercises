import {useRef, useState} from "react";


import './RegisterForm.css';

type User ={
    firstName: string;
    lastName: string;
    email: string;
}
export const RegisterForm  = ()=> {    
    const [user, setUser] = useState<User>({firstName:'', lastName:'', email:''});
    const [submited, setSubmited] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(false);
    const firsNameRef = useRef<string | any>('');
    const lastNameRef = useRef<string | any>('');
    const emailNameRef = useRef<string | any>('');
    const onSubmitHandler = (event:any) =>{
        event.preventDefault();
        const firstName= firsNameRef.current.value; 
        const lastName= lastNameRef.current.value;
        const email= emailNameRef.current.value;
        if(firstName && lastName && email){
            setUser({firstName:firstName, lastName:lastName, email:email});
            setValid(true);
            register(user);
        }
        setSubmited(true);
        
    }

    const register = (newUser:User) => {
        console.log(' registered user: '+user.firstName);
    };
    return (
        <div className="form-container">
          <h1>Register</h1>          
          <form className="register-form" onSubmit={onSubmitHandler}>
                <div className="form-group">                
                    
                    {submited && valid && <div className="success-message">Success! Thank you for registering</div>}
                    { submited && !valid && <span id="first-name-error" className="error">Please enter a first name</span> }
                    <input
                        ref={firsNameRef}
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                    />
                </div>                
                {submited && !valid && <span id="last-name-error" className="error">Please enter a last name</span> }
                <div className="form-group">
                        <input
                            ref={lastNameRef}
                            id="last-name"
                            className="form-field"
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                        />
                </div>
                {submited && !valid &&  <span id="email-error" className="error">Please enter an email address</span> }                             
                <div className="form-group">
                    <input
                        ref={emailNameRef}
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                    />
                </div>                    
                <button className="form-field" type="submit">Register</button>                  
            </form>                      
        </div>
    );
}