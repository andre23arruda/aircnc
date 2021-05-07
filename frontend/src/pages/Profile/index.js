import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import { getApi, deleteApi } from '../../services/api'

import './styles.css'
import logoImg from '../../assets/logo.svg'

function Profile() {

    const history = useHistory()

    const ongName = localStorage.getItem('ongName')
    const ongId = localStorage.getItem('ongId')

    const [incidents, setIncidents] = useState([])

    useEffect( () => {
        getApi('profile', ongId)
        .then(response => {
            setIncidents(response)
        })
    }, [ongId])

    async function deleteIncident(incidentId) {

        const response = await deleteApi(`incidents/${ incidentId }/`, ongId)
        try {
            console.log(response)
            setIncidents(incidents.filter(incident => incident.id !== incidentId))
        } catch(err) {
            alert(`Erro no login. Tente novamente`)
        }
    }

    function logout() {
        localStorage.clear()
        history.push('/')
    }

  	return (
        <div className="profile-container">
            <header>
                <img src={ logoImg } alt="Be the Hero"/>
                <span>Bem vinda, { ongName }</span>

                <Link className="button" to="/new-incident">Cadastrar novo caso</Link>
                <button onClick= { logout }>
                    <FiPower size={ 18 } color="#E02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map(incident => {
                        return (
                            <li key={ incident.id }>
                                <strong>CASO:</strong>
                                <p>{ incident.title }</p>

                                <strong>DESCRIÇÃO:</strong>
                                <p>{ incident.description }</p>

                                <strong>VALOR:</strong>
                                <p>R$ { incident.value.toFixed(2) }</p>

                                <button onClick={ () => { deleteIncident(incident.id) } }>
                                    <FiTrash2 size={ 20 } color="#a8a8b3"/>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
  	)
}

export default Profile
