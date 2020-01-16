import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import Layout from '../cores/Layout';
import axios from 'axios';

const Signup = () => {
    const [values, setValues] = useState({
        name: 'kishan',
        email: 'kishan@gmail.com',
        password: '123456789',
        buttonText: 'SignUp'
    });

    const {name, email, password, buttonText} = values;

    const handleChange = name => (event) => {
        setValues({...values, [name]:event.target.value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({...values,buttonText: 'Submitting'})
        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}`,
            data: {name, email, password}
        })
        .then(response => {
            console.log('SIGNUP SUCCESS', response);
            setValues({...values, name: '', password: ''});
        })
        .catch(error => {
            console.log('SIGNUP ERROR', error.response.data);
            setValues({...values, buttonText: 'Submit'});
        })

    }; 

    const SignupForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={clickSubmit} >{buttonText}</button>
            </div>
        </form>
    );

    return(
        <Layout>
            <div className="col-md-6 offset-md-3">
                {JSON.stringify({name, email, password})}
                 <h1 className="p-5 text-center">Signup</h1>
                     <SignupForm />
            </div>
        </Layout>
    );
};

export default Signup;