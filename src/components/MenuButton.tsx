import React from 'react'

function MenuButton({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {


	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
		document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden'
	}
	return (
		<div onClick={toggleMenu} className="fixed top-0 right-0 flex flex-col justify-center items-center h-12 w-12 md:hidden z-50 cursor-pointer pr-2">
			<span className={`${isMenuOpen ? 'absolute -rotate-45' : 'mb-1.5'} origin-center block w-[35px] h-[5px] bg-primary transition-all ease-in-out duration-500 `}></span>
			<span className={`${isMenuOpen ? 'absolute opacity-0' : 'mb-1.5'} block w-[35px] h-[5px] bg-primary transition-all ease-in-out duration-500`}></span>
			<span className={`${isMenuOpen ? 'absolute rotate-45' : ''} origin-center  block w-[35px] h-[5px] bg-primary transition-all ease-in-out duration-500`}></span>
		</div>
	)
}

export default MenuButton