import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiXCircle, FiPower, FiBookmark } from 'react-icons/fi'
import { notifyWarning } from '../../utils/utils'

import logoImg from '../../assets/logo.svg'
import { getApi, deleteApi } from '../../services/api'

import './styles.css'

const NO_THUMBNAIL = 'https://res.cloudinary.com/utils-cloudinary/image/upload/v1620454863/media/ex2_xdhmga.jpg'

function Dashboard() {
    const history = useHistory()
    const [spots, setSpots] = useState([])
    const [bookings, setBookings] = useState([])
    const user_id = localStorage.getItem('user_id')

    useEffect( () => {
        async function loadSpots() {
            const response = await getApi(`spots/?user=${ user_id }`)
            setSpots(response)
        }

        loadSpots()
    }, [user_id])

    async function deleteSpot(spot_id) {
        await deleteApi(`spots/${ spot_id }/`)
        setSpots(spots.filter(spot => spot.id !== spot_id))
        notifyWarning(`Spot excluído`)
    }

    function logout() {
        localStorage.clear()
        history.push('/')
        notifyWarning(`Sessão finalizada`)
    }

    async function loadBookings() {
        const response = await getApi(`bookings/?user=${ user_id }&status=R`)
		setBookings(response)
	}

    useEffect(() => {
        loadBookings()
    }, [])

    useEffect(() => {
        loadBookings()
        const interval = setInterval(() => {
            loadBookings()
        }, 60000)
        return () => clearInterval(interval)
    }, [])

  	return (
        <div className="dashboard-container">
            <header className="header-container">
                <img src={ logoImg } alt="AirCnC"/>
                <button className="button  button-small" onClick= { logout }>
                    <FiPower size={ 18 }/>
                </button>
            </header>

            <section className="content">
                <ul className="spot-list">
                    { spots.length > 0 ?
                        spots.map(spot => (
                            <li key={ spot.id }>
                                <span className="delete-button" onClick={ () => { deleteSpot(spot.id) } }>
                                    <FiXCircle fontSize={ 20 }></FiXCircle>
                                </span>

                                <header
                                    style={ spot.thumbnail ?
                                                { backgroundImage: `url(${ spot.thumbnail })`}
                                            :
                                                { backgroundImage: `url(${ NO_THUMBNAIL })`}
                                        }
                                ></header>
                                <strong>{ spot.company }</strong>
                                <span>
                                    { spot.price ?
                                        `R$${ spot.price }`
                                    :
                                        'Gratuito'
                                    }</span>
                            </li>
                        ))
                     : (
                        <li>
                            <strong>
                                Você ainda não possui Spots cadastrados.
                            </strong>
                        </li>
                     )
                    }

                </ul>

                    <Link to="/bookings" className="button button-small">
                        <FiBookmark size={ 18 }/>
                        { bookings.length > 0 &&
                            <span className="circle-notification">{ `${ bookings.length }` }</span>
                        }
                    </Link>

                <Link to="/new-spot" className="button">Cadastrar novo spot</Link>
            </section>

        </div>
  	)
}

export default Dashboard