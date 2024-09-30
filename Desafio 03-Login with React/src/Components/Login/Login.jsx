import React from 'react'
import { FaLock, FaUser } from 'react-icons/fa'
import { useState } from 'react'
import './Login.css'

const Login = () => {
    const [username, SetUsername]=useState("")
    const [password, SetPassword]=useState("")

    const handleSubmit=(event)=>{
        event.preventDefault()
        alert (`Enviando os dados: ${username}-${password}`)
    }
  return (
    <div className='Container'>
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-field'><input type="email" placeholder='E-mail' onChange={(e)=>SetUsername(e.target.value)}/>
            <FaUser className='icon'/>
            </div>
            <div className='input-field'><input type="password" placeholder='Password' onChange={(e)=>SetPassword(e.target.value)}/>
            <FaLock className='icon'/>
            </div>
            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembrar
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>
            <button>Enviar</button>
            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login