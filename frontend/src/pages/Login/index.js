import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { appendErrorMessages, notifySuccess, notifyWarning } from '../../utils/utils'
import { postApi } from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')

    async function formSubmit(event) {
        event.preventDefault()
        const formData = {
            email
        }
        const response = await postApi('sessions/', formData)
        try {
            if (response.id) {
                localStorage.setItem('user_id', response.id)
                localStorage.setItem('user_email', response.email)
                history.push('/dashboard')
                notifySuccess('Login realizado com sucesso')
            } else {
                notifyWarning(`${ appendErrorMessages(response) }`)
            }
        } catch(err) {
            notifyWarning(`Erro no login. Tente novamente`)
        }
    }



  	return (
        <div className="login-container">
            <img src={ logoImg } alt="AirCnC"/>
            <section className="form">
                <form onSubmit={ formSubmit }>
                    <p>
                        Ofereça <strong>spots</strong> para programadores e encontre
                        <strong> talentos</strong> para sua empresa
                    </p>
                    <input type="email" placeholder="Seu melhor email" onChange={ e => setEmail(e.target.value) }/>
                    <button className="button" type="submit">Entrar</button>
                </form>
            </section>

        </div>
  	)
}

export default Login
