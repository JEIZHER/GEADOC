import { useLocation } from 'react-router-dom'

const Sidebar = () => {
	const activeStyle = 'btn-menu'
	const Location = useLocation()
	return (
		// Sidebar

		<nav className='hidden fixed top-0 h-12 w-full z-10  lg:h-full   lg:w-[200px]  bg-gray-900 sm:flex flex-row lg:flex-col justify-center items-center text-white text-bold text-[11px] '>
			{ Location.pathname ==='/'?<ul className='relative menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-9 w-full  lg:ml-6'>
				<li>
			    	<a href="/Login">
						Login
					</a>

				</li>
				<li>
			    	<a href="/Register">
						Registro
					</a>

				</li>
			
				<li>
					<a
						href='#intro'
						className={`btn_sidebar ${activeStyle} lg:pr-[106px]`}
					>
					Bienvenidos
					</a>
				</li>
				<li>
					<a href='#one' className='btn_sidebar lg:pr-[134px]'>
					Quienes Somos
					</a>
				</li>
				<li>
					<a href='#two' className='btn_sidebar lg:pr-[116px]'>
					Nuestros Aliados
					</a>
				</li>
				<li>
					<a href='#three' className='btn_sidebar lg:pr-[75px]'>
					Contactos
					</a>
				</li>
			</ul>:<ul className='relative menu flex flex-row justify-center lg:flex-col gap-3 lg:gap-7 w-full  lg:ml-6'>
				<li>
					<a
						href='/'
						className={`btn_sidebar  lg:pr-[131px]`}
					>
						HOME
					</a>
				</li>
	
				<li>
					<a  className={`btn_sidebar btn-menu3 lg:pr-[113px]`}>
						LogIn
					</a>
				</li>
	
			</ul>}
		</nav>
		
	)
}
export default Sidebar
