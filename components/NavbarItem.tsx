import React from 'react'

interface NavbarItemProps {
	label: string
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
	return (
		<li className="cursor-pointer text-white transition-colors hover:text-gray-300">{label}</li>
	)
}

export default NavbarItem
