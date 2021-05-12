import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import { notifyWarning, getDateFormatJson, notifySuccess, appendErrorMessages } from '../../utils/utils'

import logoImg from '../../assets/logo.svg'
import { getApi, putApi } from '../../services/api'

import './styles.css'


function Bookings() {

    const [bookings, setBookings] = useState([])
    const user_id = localStorage.getItem('user_id')

    useEffect( () => {
        async function loadbookings() {
            const response = await getApi(`bookings/?status=R`, user_id)
            setBookings(response)
        }

        loadbookings()
    }, [user_id])

    async function submitAnswer(booking, is_approved) {
        const formData = {
            status: 'A',
            is_approved,
            spot: booking.spot,
            user: user_id,
        }
        const response = await putApi(`bookings/${ booking.id }/`, formData, user_id)
        try {
            if (response.id) {
                notifySuccess('Resposta enviada com sucesso')
                setBookings(bookings.filter(obj => obj.id !== booking.id))
            } else {
                notifyWarning(`${ appendErrorMessages(response) }`)
            }
        } catch(err) {
            notifyWarning(`Erro na requição. Tente novamente`)
        }
    }

  	return (
        <div className="bookings-container">
            <header className="header-container">
                <Link className="button  button-small flex-start" to="/dashboard">
                    <FiArrowLeft size={ 18 }/>
                </Link>
                <img src={ logoImg } alt="AirCnC"/>
            </header>

            <section className="content">
                <ul className="booking-list">
                    { bookings.map(booking => (
                        <li className="booking" key={ booking.id }>

                            <strong>{ booking.spot_company } -  { getDateFormatJson(booking.booking_date) }</strong>
                            <span>{ booking.user_email } está solicitando uma reserva</span>

                            <p className="text-center">Aprovar</p>
                            <div className="buttons-container">
                                <button className="button" onClick={ () => submitAnswer(booking, true) }>Sim</button>
                                <button className="button" onClick={ () => submitAnswer(booking, false) }>Não</button>
                            </div>

                        </li>
                    ))}
                </ul>
            </section>

        </div>
  	)
}

export default Bookings