import React, { useEffect, Suspense } from 'react'
import Loading from '../../Utils/Loading'
const Form = React.lazy(() => import('../../Components/Form'))
import Boton from '../../Components/Boton'
// const CardsNews = React.lazy(() => import('../../Components/CardsNews'))
import Observer from '../../Utils/Observer'
function Home() {
	return (
		<>
			<div className=' text-sm  text-gray-100  sm:text-base lg:ml-[200px] min-w-[420px]'>
				<section id='intro' className='bg-intro bg-cover bg-fixed h-screen'>
					<div className=' flex flex-col  w-auto h-screen pb-10  pt-12 px-7 sm:px-16 bg-intro2 opacity-95 bg-cover sm:pt-24  lg:pt-[200px]  '>
						<img src="/Logo.png" alt="" className='w-40 '  />

						<div className=' sm:flex sm:flex-col sm:space-x-3 lg:mt-20'>
							<h1 className='text-3xl sm:text-5xl lg:text-6xl text-white  mb-6 font-bold'>
								SOLUCION GEA
							</h1>
							<h2 className='text-2xl  font-bold'>Desafío</h2>
							<p className='select-none mb-7  font-medium'>
								Gestionar y realizar la trazabilidad digital de una carga desde
								el mismo momento en que la Empresa interesada solicita una
								cotización hasta que la carga llega a su punto destino(testing
								website)
							</p>
						</div>
					</div>
				</section>

				<section
					id='one'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-violet-500 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 w-full h-screen '>
						<h1 className='text-2xl font-bold sm:text-3xl  mb-4'>
							Quienes Somos
						</h1>
					</div>
					<p className='select-none mb-7'>contenido sobre la pagina</p>
				</section>

				<section
					id='two'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full  bg-gradient-to-l from-blue-400 to-blue-800'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen '>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Nuestros Aliados
						</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
				</section>
				<section
					id='three'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Cotizaciones
						</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
					<Boton referencia='/Quotes' Titulo='COTIZAR' />
				</section>

				<section
					id='four'
					className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-violet-500 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 '>
						<h1 className='text-2xl font-bold mb-4'>GET IN TOUCH</h1>
					</div>
					<p className='select-none mb-7'>
						“We would love to hear from you! If you have any questions,
						comments, or concerns, please don’t hesitate to reach out to us. Our
						team is dedicated to providing you with the best possible
						experience, and we are always here to help. You can contact us by
						filling out the form below, sending us an email at
						cripto-limitless.gmail.com. We look forward to hearing from you
						soon!”
					</p>
					<Suspense fallback={<Loading />}>
						<Form />
					</Suspense>
				</section>

				{useEffect(() => {
					Observer()
				}, [])}
			</div>
		</>
	)
}

export default Home
