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
						{/* <img src="/Logo.png" alt="" className='w-40 '  /> */}

						<div className=' sm:flex sm:flex-col sm:space-x-3 lg:mt-20'>
							<h1 className='text-3xl sm:text-5xl lg:text-6xl text-white  mb-6 font-bold'>
								SOLUCION GEA
							</h1>
							<h2 className='text-2xl  font-bold'>Desafío</h2>
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
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
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
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Otros servicios
						</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
				</section>
				<section
					id='five'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>Noticias</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
				</section>
				<section
					id='six'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Aprende con GEA
						</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
				</section>
				{/* <section
					id='seven'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-[#2b1f68] to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>FAQ</h1>
					</div>
					
				</section> */}
				<div id='seven' className='container pt-24 mx-auto md:px-6 xl:px-24  bg-gradient-to-l from-[#2b1f68] to-blue-700'>
						<section className='pb-24'>
							<h2 className='mb-6 pl-6 text-3xl font-bold'>
							FAQ
							</h2>

							<div id='accordionFlushExample'>
								<div className='rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-200'>
									<h2 className='mb-0' id='flush-headingOne'>
										<button
											className='group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400'
											type='button'
											data-te-collapse-init
											data-te-target='#flush-collapseOne'
											aria-expanded='false'
											aria-controls='flush-collapseOne'
										>
											Anim pariatur cliche reprehenderit?
											<span className='ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 16 16'
												>
													<path
														fillRule='evenodd'
														d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
													/>
												</svg>
											</span>
										</button>
									</h2>
									<div
										id='flush-collapseOne'
										className='!visible border-0'
										data-te-collapse-item
										data-te-collapse-show
										aria-labelledby='flush-headingOne'
										data-te-parent='#accordionFlushExample'
									>
										<div className='py-4 px-5 text-neutral-500 dark:text-neutral-300'>
											Anim pariatur cliche reprehenderit, enim eiusmod high life
											accusamus terry richardson ad squid. 3 wolf moon officia
											aute, non cupidatat skateboard dolor brunch. Food truck
											quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
											tempor, sunt aliqua put a bird on it squid single-origin
											coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
											helvetica, craft beer labore wes anderson cred nesciunt
											sapiente ea proident. Ad vegan excepteur butcher vice
											lomo. Leggings occaecat craft beer farm-to-table, raw
											denim aesthetic synth nesciunt you probably haven't heard
											of them accusamus labore sustainable VHS.
										</div>
									</div>
								</div>
								<div className='rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200'>
									<h2 className='mb-0' id='flush-headingTwo'>
										<button
											className='group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400'
											type='button'
											data-te-collapse-init
											data-te-collapse-collapsed
											data-te-target='#flush-collapseTwo'
											aria-expanded='false'
											aria-controls='flush-collapseTwo'
										>
											Non cupidatat skateboard dolor brunch?
											<span className='ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 16 16'
												>
													<path
														fillRule='evenodd'
														d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
													/>
												</svg>
											</span>
										</button>
									</h2>
									<div
										id='flush-collapseTwo'
										className='!visible hidden border-0'
										data-te-collapse-item
										aria-labelledby='flush-headingTwo'
										data-te-parent='#accordionFlushExample'
									>
										<div className='py-4 px-5 text-neutral-500 dark:text-neutral-300'>
											Anim pariatur cliche reprehenderit, enim eiusmod high life
											accusamus terry richardson ad squid. 3 wolf moon officia
											aute, non cupidatat skateboard dolor brunch. Food truck
											quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
											tempor, sunt aliqua put a bird on it squid single-origin
											coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
											helvetica, craft beer labore wes anderson cred nesciunt
											sapiente ea proident. Ad vegan excepteur butcher vice
											lomo. Leggings occaecat craft beer farm-to-table, raw
											denim aesthetic synth nesciunt you probably haven't heard
											of them accusamus labore sustainable VHS.
										</div>
									</div>
								</div>
								<div className='rounded-none border border-l-0 border-r-0 border-b-0 border-t-0 border-neutral-200'>
									<h2 className='mb-0' id='flush-headingThree'>
										<button
											className='group relative flex w-full items-center rounded-none border-0 py-4 px-5 text-left text-base font-bold transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:text-primary-400'
											type='button'
											data-te-collapse-init
											data-te-collapse-collapsed
											data-te-target='#flush-collapseThree'
											aria-expanded='false'
											aria-controls='flush-collapseThree'
										>
											Praesentium voluptatibus temporibus consequatur non
											aspernatur?
											<span className='ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-[#8FAEE0] dark:group-[[data-te-collapse-collapsed]]:fill-[#eee]'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 16 16'
												>
													<path
														fillRule='evenodd'
														d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
													/>
												</svg>
											</span>
										</button>
									</h2>
									<div
										id='flush-collapseThree'
										className='!visible hidden rounded-b-lg'
										data-te-collapse-item
										aria-labelledby='flush-headingThree'
										data-te-parent='#accordionFlushExample'
									>
										<div className='py-4 px-5 text-neutral-500 dark:text-neutral-300'>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Velit optio vitae inventore autem fugiat rerum sed
											laborum. Natus recusandae laboriosam quos pariatur
											corrupti id dignissimos deserunt, praesentium voluptatibus
											temporibus consequatur non aspernatur laborum rerum nemo
											dolorem libero inventore provident exercitationem sunt
											totam aperiam. Facere sunt quos commodi obcaecati
											temporibus alias amet! Quam quisquam laboriosam quae
											repellendus non cum adipisci odio?
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				<section
					id='eigth'
					className='pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16  h-full bg-gradient-to-l from-blue-400 to-blue-700'
				>
					<div className=' sm:flex sm:items-center sm:space-x-3 h-screen'>
						<h1 className='text-2xl font-bold mb-4 sm:text-3xl'>
							Servicio al cliente
						</h1>
					</div>
					<p className='select-none mb-7 '>jgdgjhjdhgjdhgj</p>
				</section>
				<section
					id='nine'
					className='flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 h-full  bg-gradient-to-l from-[#2b1f68] to-blue-700'
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
