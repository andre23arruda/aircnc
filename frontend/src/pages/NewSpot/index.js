import React, { useMemo, useState } from 'react'
import { FiCamera } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { appendErrorMessages, notifySuccess, notifyWarning } from '../../utils/utils'
import { postFormDataApi } from '../../services/api'
import logoImg from '../../assets/logo.svg'
import './styles.css'

function NewSpot() {
    const history = useHistory()
    const [thumbnail, setThumbnail] = useState(null)
    const [company, setCompany] = useState('')
    const [price, setPrice] = useState(0)
    const [techs, setTechs] = useState('')

    const user_id = localStorage.getItem('user_id')

    const preview = useMemo( () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null
    }, [thumbnail])

    async function formSubmit(event) {
        event.preventDefault()

        const data = {
            company,
            price,
            thumbnail,
            techs,
        }

        const response = await postFormDataApi('spots/', data, user_id)
        try {
            if (response.id) {
                history.push('/dashboard')
                notifySuccess('Spot cadastrado sucesso')
            } else {
                notifyWarning(`${ appendErrorMessages(response) }`)
            }
        } catch(err) {
            notifyWarning(`Erro no cadastro. Tente novamente`)
        }
    }

  	return (
        <div className="register-container">
            <img src={ logoImg } alt="AirCnC"/>
            <section className="form">
                <Link className="button  button-small" style={{ margin: '0 0 10px 0', lineHeight: 2 }} to="/dashboard">
                    <FiArrowLeft size={ 18 }/>
                </Link>

                <form onSubmit={ formSubmit }>

                    <label id="thumbnail" className={ preview ? 'has-preview' : '' } style={{ backgroundImage: `url(${ preview })`}}>
                        <input type="file" onChange={ e => setThumbnail(e.target.files[0]) }/>
                        { preview ? '' : <FiCamera color={ "#999" } fontSize={ 35 }/> }
                    </label>

                    <label htmlFor="company">EMPRESA *</label>
                    <input id="company" placeholder="Sua empresa incrível" onChange={ e => setCompany(e.target.value) }/>

                    <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
                    <input id="techs" placeholder="Tecnologias utilizadas" onChange={ e => setTechs(e.target.value) }/>

                    <label htmlFor="price">VALOR DA DIÁRIA <span>(em branco para gratuito)</span></label>
                    <input id="price" placeholder="Valor cobrado por dia (R$)" onChange={ e => setPrice(e.target.value) }/>


                    <button className="button" type="submit">Cadastrar</button>
                </form>

            </section>

        </div>
  	)
}

export default NewSpot
