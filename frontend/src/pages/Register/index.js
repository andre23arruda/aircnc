import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'
import { postApi } from '../../services/api'
import { appendErrorMessages } from '../../utils/utils'

function Register() {

    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState(0)

    async function formRegister(event) {
        event.preventDefault()

        const formData = {
            name,
            email,
            whatsapp,
            city,
            uf,
        }

        const response = await postApi('ongs/', formData)
        try {
            if (response.id) {
                alert(`Seu ID de acesso: ${ response.id }`)
                history.push('/')
            }
            else alert(`${ appendErrorMessages(response) }`)
        } catch(err) {
            alert(`Erro no cadastro. Tente novamente`)
        }
    }

  	return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={ 25 } color="#E02041"/>
                        Já tenho cadastro
                    </Link>
                </section>


                <form onSubmit={ formRegister }>
                    <input placeholder="Nome da ONG" onChange={ e => setName(e.target.value )}/>
                    <input type="email" placeholder="Email" onChange={ e => setEmail(e.target.value )}/>
                    <input placeholder="WhatsApp" onChange={ e => setWhatsapp(e.target.value )}/>

                    <div className="input-group">
                        <input placeholder="Cidade" onChange={ e => setCity(e.target.value )}/>
                        <input placeholder="UF" onChange={ e => setUf(e.target.value )}/>
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
  	)
}

export default Register
