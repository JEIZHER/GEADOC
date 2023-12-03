import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import {GeaDocContext} from '../../Context'

const Sidebar = () => {
	const context = useContext(GeaDocContext)
	const activeStyle = 'btn-menu'
	const Location = useLocation()
	return (
		<nav className={ ` ${context.isOpen &&'hidden'} fixed top-12  lg:top-0  z-10 pr-1 h-full  w-[200px]  bg-gray-900  flex flex-col lg:flex justify-center items-center text-white text-bold text-[11px]`} >
			{Location.pathname === '/' ? (
				<div className='flex flex-col  '>
					<ul className='block mr-1 mb-20 text-lg'>
						<li>
							<a href='/Login' className='pl-4'>
								Login
							</a>
						</li>
						<li>
							<a href='/Register' className='pl-4'>
								Registro
							</a>
						</li>
					</ul>

					<ul className='menu flex  justify-center flex-col gap-4 lg:gap-10 w-full h-full'>
						<li>
							<a
								href='#intro'
								className={`btn_sidebar ${activeStyle} lg:pr-[47px]`}
							>
								Bienvenidos
							</a>
						</li>
						<li>
							<a href='#one' className='btn_sidebar lg:pr-[70px]'>
								Quienes Somos
							</a>
						</li>
						<li>
							<a href='#two' className='btn_sidebar lg:pr-[48px]'>
								Nuestros Aliados
							</a>
						</li>
						<li>
							<a href='#three' className='btn_sidebar lg:pr-[41px]'>
								Cotizaciones
							</a>
						</li>

						<li>
							<a href='#four' className='btn_sidebar lg:pr-[60px]'>
								Otros servicios
							</a>
						</li>
						<li>
							<a href='#five' className='btn_sidebar lg:pr-[60px]'>
								Noticias
							</a>
						</li>
						<li>
							<a href='#six' className='btn_sidebar lg:pr-[60px]'>
								Aprende con GEA
							</a>
						</li>
						<li>
							<a href='#seven' className='btn_sidebar lg:pr-[105px]'>
								FAQ
							</a>
						</li>
						<li>
							<a href='#eigth' className='btn_sidebar lg:pr-[60px]'>
								Servicio al cliente
							</a>
						</li>
						<li>
							<a href='#nine' className='btn_sidebar lg:pr-[60px]'>
								Contactos
							</a>
						</li>
					</ul>
				</div>

			) : Location.pathname === '/Client' ? (
				<div className='flex lg:flex-col gap-3'>
					<ul className='flex flex-row lg:block lg:mr-1 lg:mb-3 text-lg'>
						<li>
							<a href='/' className='pl-4'>
								HOME
							</a>
						</li>
					</ul>

					<ul className='menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-11 w-full h-full'>
						<li>
							<a href='#C_one' className={`btn_sidebar lg:pr-[70px]`}>
								Rastreo
							</a>
						</li>

						<li>
							<a href='#C_two' className={`btn_sidebar  lg:pr-[35px]`}>
								Cotizaciones
							</a>
						</li>

						<li>
							<a href='#C_three' className={`btn_sidebar  lg:pr-[50px]`}>
								Contratar servicio
							</a>
						</li>

						<li>
							<a href='#C_four' className={`btn_sidebar  lg:pr-[40px]`}>
								LLenar formularios
							</a>
						</li>
					</ul>
				</div>

			) : (
				<ul className='relative menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-7 w-full  lg:ml-6'>
					<li>
						<a href='/' className={`btn_sidebar  lg:pr-[131px]`}>
							HOME
						</a>
					</li>

					<li>
						<a className={`btn_sidebar bg-blue-700 lg:pr-[113px]`}>
							{Location.pathname}
						</a>
					</li>
				</ul>
			)}
		</nav>
	)
}
export default Sidebar
