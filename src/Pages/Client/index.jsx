import React, { useEffect} from 'react'
import Observer from '../../Utils/Observer'
function Client() {
	return (
		<div className=' text-sm  text-gray-100  sm:text-base lg:ml-[200px] min-w-[420px] bg-gradient-to-l from-[#2b1f68] to-blue-700'>
			<div className=' sm:flex sm:items-center sm:space-x-3 '>
				<h1 className='text-2xl pl-16 pt-3 font-bold mb-4 sm:text-3xl '>
                Moon Walker inc
				</h1>
			</div>
			<section id='C_one' className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'>
				<img src='/Rastreo1.webp' alt='' />
				<img src='/Rastreo2.webp' alt='' />
			</section>
			<section
				id='C_two'
				className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-800'
			>
				<div className=' sm:flex sm:items-center sm:space-x-3'>
					<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>Cotizaciones</h1>
				</div>
			<img src="/cotizacion.webp" alt="" />
			</section>
			<section
				id='C_three'
				className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
			>
				<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
					<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
						Contratar servicio
					</h1>
				</div>
				<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
			</section>
			<section
				id='C_four'
				className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-800'
			>
				<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
					<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
						LLenar formulario
					</h1>
				</div>
				<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
			</section>
			{useEffect(() => {
				Observer()
			}, [])}
		</div>
	)
}
export default Client
