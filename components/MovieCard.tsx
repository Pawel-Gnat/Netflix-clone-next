import { isEmpty } from 'lodash'
import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import FavoriteButton from './FavoriteButton'
import { useRouter } from 'next/router'

interface MovieCardProps {
	data: Record<string, any>
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
	const router = useRouter()

	if (isEmpty(data)) {
		return null
	}

	return (
		<div className="col-space group relative h-[12vw] bg-zinc-900">
			<img
				className="h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition-transform delay-300 group-hover:opacity-90 sm:group-hover:opacity-0"
				src={data.thumbnailUrl}
				alt="Thumbnail"
			/>
			<div className="invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition-transform delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible">
				<img
					className="h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition-transform"
					src={data.thumbnailUrl}
					alt="Thumbnail"
				/>
				<div className="absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition-transform lg:p-4">
					<div className="fle-row flex items-center gap-3">
						<button
							className="lh:h-10 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition-colors hover:bg-neutral-400 lg:w-10"
							onClick={() => router.push(`/watch/${data?.id}`)}
						>
							<BsFillPlayFill />
						</button>
						<FavoriteButton movieId={data?.id} />
					</div>
					<p className="mt-4 font-semibold text-green-400">
						New <span className="text-white">2023</span>
					</p>
					<div className="mt-4 flex flex-row items-center gap-2">
						<p className="text-[10px] text-white lg:text-sm">{data.duration}</p>
					</div>
					<div className="mt-4 flex flex-row items-center gap-2">
						<p className="text-[10px] text-white lg:text-sm">{data.genre}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
