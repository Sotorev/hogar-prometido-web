import React from 'react'

type Props = {
	setIsMenuOpen: (value: boolean) => void,
	isMenuOpen: boolean,
}


const MobileSideBar = ({ isMenuOpen, setIsMenuOpen }: Props) => {

	
	return (
		<div>
			<div className={`${!isMenuOpen ? 'hidden' : 'block'} fixed inset-0 opacity-50 z-20 backdrop-blur-3xl`}></div>
			<div
				id='sidebar'
				className={`${!isMenuOpen ? 'translate-x-full' : 'translate-x-0'} sidebar flex flex-col justify-evenly items-center h-screen w-1/2 md:hidden fixed bg-neutral-800
			right-0 top-0 z-40 transition-all ease-in-out duration-500 transform translate-x-0`}
			>


				{/* Add backdrop div */}
				<nav className='w-full h-screen flex items-center justify-center'>

					<ul className='flex flex-col justify-start h-2/3 overflow-scroll mx-2' style={{ paddingTop: '1rem' }}>
						<li className="text-white">
							<a href="galeria">Galeria</a>
						</li>
						<li className="text-white">
							<a href="contacto">Contacto</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>

	)
}

export default MobileSideBar