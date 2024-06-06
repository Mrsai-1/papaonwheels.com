import React ,{useState} from 'react'
import { API_URL } from '../../Data/Api_Url'

const Register = ({ShowLoginHandler}) => {
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const [Loading,setLoading]=useState(true)

const handleSubmite=async (e)=>{
  e.preventDefault();
  try {
    const responce=await fetch(`${API_URL}/vender/register`,{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({username,email,password})
    })

const data =await responce.json();
if(responce.ok){
  console.log(data);
  setEmail('');
  setUsername('');
  setPassword('')
  alert("vender register successfully...")
  ShowLoginHandler()
}

  } catch (error) {
    console.log(error);
    alert("register failed....")
  }
}

  return (
  <>
    <div className='register-section'>
      <h2 className='d-flex justify-content-center py-4'>Register</h2>
      <form className='form' onSubmit={handleSubmite}>
        <div className='form-group d-flex'>
            <label>UserName</label>
            <input type='text' name="username" value={username} onChange={(e)=>setUsername(e.target.value)} className='form-control' />
        </div>
        <div className='form-group d-flex'>
            <label>Email</label>
            <input type='text' name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' />
        </div>
        <div className='form-group d-flex'>
            <label>Password</label>
            <input type='text' name="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' />
        </div>
        <div className='submit-button  d-flex justify-content-center py-5'>
          <button type='submit'  className='btn btn-primary' >SignUp</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default Register
