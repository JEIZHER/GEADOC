import { useContext } from 'react'
import {GeaDocContext} from '../../Context'

const Menu = () => {
    const context = useContext(GeaDocContext)
	return (
		<nav className='fixed top-0 h-12 w-full z-10 lg:hidden bg-gray-900 flex flex-row  items-center text-white text-bold text-[11px] '>
			<div className='pl-4' onClick={() => context.setIsOpen(!context.isOpen)}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24px'
					viewBox='0 0 24 24'
					width='24px'
					fill='#FFFFFF'
				>
					<path d='M0 0h24v24H0V0z' fill='none' />
					<path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
				</svg>
			</div>
		</nav>
	)
}
export default Menu
