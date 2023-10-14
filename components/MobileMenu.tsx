import React from 'react'

interface MobileMenuProps {
	visible?: boolean
	routes: string[]
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, routes }) => {
	if (!visible) {
		return null
	}

	return (
		<div className="absolute left-0 top-8 flex w-56 flex-col border-2 border-gray-800 bg-black py-5">
			<div className="flex flex-col gap-4">
				{routes.map((route, index) => (
					<div key={index} className="px-3 text-center text-white hover:underline">
						{route}
					</div>
				))}
			</div>
		</div>
	)
}

export default MobileMenu
