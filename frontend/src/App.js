import React from 'react'
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import './global.css'
import 'react-toastify/dist/ReactToastify.css'


function App() {


  	return (
	  	<div>
			<ToastContainer />
			<Routes></Routes>

	  	</div>
  	)
}

export default App
