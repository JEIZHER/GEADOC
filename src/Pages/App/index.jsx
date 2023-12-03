import { useRoutes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../../Components/SideBar'
import Menu from '../../Components/Menu'
import Footer from '../../Components/Footer'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import Quotes from '../Quotes'
import Client from '../Client'
import { GeaDocProvider } from '../../Context'
import './App.css'

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/Login', element: <Login /> },
		{ path: '/Register', element: <Register /> },
		{ path: '/Quotes', element: <Quotes /> },
		{ path: '/Client', element: <Client /> },
	])
	return routes
}

const App = () => {
	return (
		<BrowserRouter>
			<GeaDocProvider>
				<Menu/>
				<Sidebar />
				<AppRoutes />
			</GeaDocProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App
