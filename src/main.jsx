import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'
import { app } from './configs/firebase.js'
import './index.scss'
import { persistor, store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store} app={app}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</BrowserRouter>
)
