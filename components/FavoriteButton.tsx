import useBillboard from '@/hooks/useBillboard'
import React, { useCallback, useMemo } from 'react'
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import axios from 'axios'
import useFavorites from '@/hooks/useFavorite'
import useCurrentUser from '@/hooks/useCurrentUser'

interface FavoriteButtonProps {
	movieId: string
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ movieId }) => {
	const { mutate: mutateFavorites } = useFavorites()
	const { data: currentUser, mutate } = useCurrentUser()

	const isFavorite = useMemo(() => {
		const list = currentUser?.favoriteIds || []

		return list.includes(movieId)
	}, [currentUser, movieId])

	const toggleFavorites = useCallback(async () => {
		let response

		if (isFavorite) {
			response = await axios.delete('api/favorite', {
				data: { movieId }
			})
			// response = await axios.delete(`/api/favorite?movieId=${movieId}`)
		} else {
			response = await axios.post('api/favorite', { movieId })
		}

		const updatedFavoriteIds = response?.data?.favoriteIds

		mutate({ ...currentUser, favoriteIds: updatedFavoriteIds })

		mutateFavorites()
	}, [movieId, isFavorite, currentUser, mutate, mutateFavorites])

	const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

	return (
		<button
			onClick={toggleFavorites}
			className="group/item flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition-colors hover:border-neutral-300 lg:h-10 lg:w-10"
		>
			<Icon className="text-white" />
		</button>
	)
}

export default FavoriteButton
