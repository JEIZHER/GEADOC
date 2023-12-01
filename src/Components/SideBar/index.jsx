import { useLocation } from 'react-router-dom'

const Sidebar = () => {
	const activeStyle = 'btn-menu'
	const Location = useLocation()
	return (
		// Sidebar

		<nav className='hidden fixed top-0 h-12 w-full z-10 lg:pr-1 lg:h-full  lg:w-[200px]  bg-gray-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			{Location.pathname === '/' ? (
				<ul className='flex lg:flex-col  '>
					<div className='flex flex-row lg:block lg:mr-1 lg:mb-20 text-lg'>
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
					</div>

					<div className='menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-10 w-full h-full'>
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
					</div>
				</ul>
			) : Location.pathname === '/Client' ? (
				<ul className='flex lg:flex-col gap-3'>
					<div className='flex flex-row lg:block lg:mr-1 lg:mb-3 text-lg'>
						<li>
							<a href='/' className='pl-4'>
								HOME
							</a>
						</li>
					</div>

					<div className='menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-11 w-full h-full'>
						<li>
							<a
								href='#C_one'
								className={`btn_sidebar lg:pr-[70px]`}
							>
								Rastreo
							</a>
						</li>

						<li>
							<a
								href='#C_two'
								className={`btn_sidebar  lg:pr-[35px]`}
							>
								Cotizaciones
							</a>
						</li>

						<li>
							<a
								href='#C_three'
								className={`btn_sidebar  lg:pr-[50px]`}
							>
								Contratar servicio
							</a>
						</li>

						<li>
							<a
								href='#C_four'
								className={`btn_sidebar  lg:pr-[40px]`}
							>
								LLenar formularios
							</a>
						</li>
					</div>
				</ul>
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
