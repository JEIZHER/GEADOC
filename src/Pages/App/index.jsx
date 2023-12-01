import { useRoutes, BrowserRouter } from 'react-router-dom'
import Sidebar from '../../Components/SideBar'
import Footer from '../../Components/Footer'
import Home from '../Home'
import Login from '../Login'
import Register from '../Register'
import Quotes from '../Quotes'
import { ContextCryptosProvider } from '../../Context'
import './App.css'

const AppRoutes = () => {
	let routes = useRoutes([
		{ path: '/', element: <Home /> },
		{ path: '/Login', element: <Login /> },
		{ path: '/Register', element: <Register /> },
		{ path: '/Quotes', element: <Quotes /> },
	])
	return routes
}

const App = () => {
	return (
		<BrowserRouter>
			<ContextCryptosProvider>
				<Sidebar />
				<AppRoutes />
			</ContextCryptosProvider>
			<Footer />
		</BrowserRouter>
	)
}

export default App
