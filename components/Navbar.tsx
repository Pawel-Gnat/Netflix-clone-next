import Image from 'next/image'
import NavbarItem from './NavbarItem'

import { BsChevronDown, BsSearch } from 'react-icons/bs'
import MobileMenu from './MobileMenu'
import { useCallback, useState } from 'react'

const routes = ['Home', 'Series', 'Films', 'New & Popular', 'Browse by languages']

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const toggleMobileMenu = useCallback(() => {
		setShowMobileMenu((current) => !current)
	}, [])

	return (
		<nav className="fixed z-40 w-full">
			<div className="flex flex-row items-center bg-zinc-900/90 px-4 py-6 transition-colors duration-500 md:px-16">
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
					<BsChevronDown className="text-white transition-colors" />
					<MobileMenu visible={showMobileMenu} routes={routes} />
				</div>
				<div className="ml-auto flex flex-row items-center gap-7">
					<div className="cursor-pointer text-gray-200 transition-colors hover:text-gray-300">
						<BsSearch />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
