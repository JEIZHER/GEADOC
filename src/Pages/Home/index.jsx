import React, { useEffect, Suspense } from 'react'
import Loading from '../../Utils/Loading'
const Form = React.lazy(() => import('../../Components/Form'))
//import Boton from '../../Components/Boton'
import FAQ from '../../Components/FAQ'
// const CardsNews = React.lazy(() => import('../../Components/CardsNews'))
import Observer from '../../Utils/Observer'
function Home() {
	return (
		<>
			<div className='relative text-sm  text-gray-100 mt-12  sm:text-base lg:mt-0 lg:top-0 lg:left-[200px] lg:w-[calc(100%-200px)] min-w-[420px]'>
				<section id='intro' className='bg-intro bg-cover bg-fixed'>
					<div className=' flex flex-col  w-auto h-screen pb-10  pt-12 px-7 sm:px-16 bg-intro2 opacity-95 bg-cover sm:pt-24  lg:pt-[200px]  '>
						{/* <img src="/Logo.png" alt="" className='w-40 '  /> */}

						<div className=' sm:flex sm:flex-col sm:space-x-3 lg:mt-20'>
							<h1 className='text-3xl sm:text-5xl lg:text-6xl text-white  mb-6 font-bold'>
								SOLUCION GEA
							</h1>
							<h2 className='text-2xl  font-bold pt-20'>Desafío</h2>
							<p className='select-none mb-7  font-medium'>
								Gestionar y realizar la trazabilidad digital de una carga desde
								el mismo momento en que la Empresa interesada solicita una
								cotización hasta que la carga llega a su punto destino
							</p>
						</div>
					</div>
				</section>

				<section
					id='one'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 w-full'>
						<h1 className='text-2xl font-bold sm:text-3xl  mb-4'>
							Quienes Somos
						</h1>
					</div>
					<p className='select-none mb-7'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
					<p className='select-none mb-7'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
				</section>

				<section
					id='two'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full  bg-gradient-to-l from-blue-400 to-blue-800'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 '>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Nuestros Aliados
						</h1>
					</div>
					<p className='select-none mb-7'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
					<p className='select-none mb-7'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."</p>
				</section>
				<section
					id='three'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 '>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Cotizaciones
						</h1>
					</div>
					<img className='pb-4 '
					src="/cotizacion.webp" alt="" />
					{/* <Boton referencia='/Quotes' Titulo='COTIZAR' /> */}
				</section>
				<section
					id='four'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Otros servicios
						</h1>
					</div>
					{/* <p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p> */}
				</section>
				<section
					id='five'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>Noticias</h1>
					</div>
					<img src="/noticias.webp" alt="" />
					
				</section>
				<section
					id='six'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex flex-col sm:items-center sm:space-x-3 '>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Aprende con GEA
						</h1>
						<div className='flex flex-row flex-wrap gap-2 object-contain'>
							<img src="/aprenda1.webp" alt="" className='bject-scale-down h-52 w-96'   />
							<img src="/aprender2.webp" alt="" className='bject-scale-down h-52 w-96'   />
							<img src="/aprender3.webp" alt=""  className='bject-scale-down h-52 w-96'  />
							<img src="/aprender5.webp" alt="" className='bject-scale-down h-52 w-96'  />

						</div>
					</div>				
				</section>
				<section
					id='seven'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<FAQ/>				
				</section>
				<section
					id='eigth'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Servicio al cliente
						</h1>
					</div>
					{/* <p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p> */}
				</section>
				<section
					id='nine'
					className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 '>
						<h1 className='text-2xl font-bold mb-4'>GET IN TOUCH</h1>
					</div>
					<p className='select-none mb-7'>
						“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?”
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
