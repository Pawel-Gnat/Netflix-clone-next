import Image from 'next/image'
import NavbarItem from './NavbarItem'

import { BsBell, BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import { useCallback, useEffect, useState } from 'react'
import AccountMenu from './AccountMenu'

const routes = ['Home', 'Series', 'Films', 'New & Popular', 'Browse by languages']

const TOP_OFFSET = 66

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	const [showAccountMenu, setShowAccountMenu] = useState(false)
	const [showBackground, setShowBackground] = useState(false)

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current)
	}, [])

	const toggleAccountMenu = useCallback(() => {
		setShowAccountMenu((current) => !current)
	}, [])

	useEffect(() => {
		const handleScroll = () => {
			window.scrollY > TOP_OFFSET ? setShowBackground(true) : setShowBackground(false)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav className="fixed z-40 w-full">
			<div
				className={`flex flex-row items-center  px-4 py-6 transition-colors duration-500 md:px-16 ${
					showBackground ? 'bg-zinc-900/90' : ''
				}`}
			>
				<Image
					className="h-4 w-auto lg:h-7"
					src="/images/logo.png"
					width={200}
					height={200}
					alt=""
					aria-hidden="true"
				/>
				<ul className="ml-8 hidden flex-row gap-7 lg:flex">
					{routes.map((route, index) => {
						return <NavbarItem key={index} label={route} />
					})}
				</ul>
				<div
					onClick={toggleMobileMenu}
					className="relative ml-8 flex cursor-pointer flex-row items-center gap-2 lg:hidden"
				>
					<p className="text-sm text-white">Browse</p>
					<BsChevronDown
						className={`text-white transition-transform ${
							showMobileMenu ? 'rotate-180' : 'rotate-0'
						}`}
					/>
					<MobileMenu visible={showMobileMenu} routes={routes} />
				</div>
				<div className="ml-auto flex flex-row items-center gap-7">
					<div className="cursor-pointer text-gray-200 transition-colors hover:text-gray-300">
						<BsSearch />
					</div>
					<div className="cursor-pointer text-gray-200 transition-colors hover:text-gray-300">
						<BsBell />
					</div>
					<div
						onClick={toggleAccountMenu}
						className="relative flex cursor-pointer flex-row items-center gap-2"
					>
						<div className="h-6 w-6 overflow-hidden rounded-md lg:h-10 lg:w-10">
							<Image src="/images/default-blue.png" width={40} height={40} alt="Profile" />
						</div>
						<BsChevronDown
							className={`text-white transition-transform ${
								showAccountMenu ? 'rotate-180' : 'rotate-0'
							}`}
						/>
						<AccountMenu visible={showAccountMenu} />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
