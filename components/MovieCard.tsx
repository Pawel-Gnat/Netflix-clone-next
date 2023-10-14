import { isEmpty } from 'lodash'
import React from 'react'
import Image from 'next/image'

interface MovieCardProps {
	data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	if (isEmpty(data)) {
		return null
	}

	return (
		<div className="col-space group relative h-[12vw] bg-zinc-900">
			{/* <Image src={data.thumbnailUrl} alt="Thumbnail" width={100} height={100} /> */}
			<img src={data.thumbnailUrl} alt="Thumbnail" />
		</div>
	)
}

export default MovieCard
