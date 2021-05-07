import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { postApi } from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import { appendErrorMessages } from '../../utils/utils'


function NewIncident() {

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(0)

    async function formIncident(event) {
        event.preventDefault()

        const formData = {
            title,
            description,
            value,
            ong: ongId,
        }

        const response = await postApi('incidents/', formData, ongId)
        try {
            if (response.title) {
                alert(`Incidente cadastrado`)
                history.push('/profile')
            }
            else alert(`${ appendErrorMessages(response) }`)
        } catch(err) {
            alert(`Erro no cadastro. Tente novamente`)
        }
    }

  	return (
        <div className="newIncident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Be the Hero"/>

                    <h1>Novo incidente</h1>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={ 25 } color="#E02041"/>
                        Voltar
                    </Link>
                </section>


                <form onSubmit={ formIncident }>
                    <input placeholder="Título" onChange={ e => setTitle(e.target.value) } />
                    <textarea placeholder="Descrição" onChange={ e => setDescription(e.target.value) }></textarea>
                    <input placeholder="Valor (R$)" onChange={ e => setValue(e.target.value) }/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
  	)
}

export default NewIncident
