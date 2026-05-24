import { useState } from 'react';
import './login.css'
const Login = ()=>{
    const [firstName, setFirstName] = useState('')
    const [SecondName, setSecondName] = useState('')

    const secondFun = (e)=>{
        setSecondName(e.target.value)
    }

    const values = (v)=>{
        console.log(v,"vv")
        let first = document.querySelector('#first').value
        let second = document.querySelector('#second').value
        console.log(first,second,"fs")
    }

    const formData = (e)=>{
        e.preventDefault(); 
        console.log(e.target.first.value,"userfirst")
        console.log(e.target.second.value,"usersecond")
    }
    return(
        <>
           <div className="login-page">
                <form className="login-form" onSubmit={formData}>
                    <div className="">
                    <input type="text" className="form-control" id="first" name="userfirst" placeholder="First name" onChange={(e)=> setFirstName(e.target.value)}/>
                    </div>
                    <div className="">
                    <input type="text" className="form-control" id="second" name="usersecond" placeholder="Last name" onChange={secondFun}/>
                    </div>
                    <button className='btn btn-success' onClick={()=> values('formvalues')}>Submit</button>
                    <button className='btn btn-success' type='submit'>Form Submit</button>
                </form>
                <div className="login-details">
                    <h1>First Name: {firstName}</h1>
                    <h1>SecondName: {SecondName}</h1>
                </div>
            </div>
        </>
    )
}
export default Login;