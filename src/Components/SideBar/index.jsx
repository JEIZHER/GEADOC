import { useLocation } from 'react-router-dom'

const Sidebar = () => {
	const activeStyle = 'btn-menu'
	const Location = useLocation()
	return (
		// Sidebar

		<nav className='hidden fixed top-0 h-12 w-full z-10 lg:pr-1 lg:h-full  lg:w-[200px]  bg-gray-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			{Location.pathname === '/' ? (
				<ul className='lg:flex lg:flex-col  '>
					<div className='lg:mr-1 mb-20 text-lg'>
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

					<div className='menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-9 w-full'>
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
								Contactos
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
						<a className={`btn_sidebar btn-menu3 lg:pr-[113px]`}>LogIn</a>
					</li>
				</ul>
			)}
		</nav>
	)
}
export default Sidebar
