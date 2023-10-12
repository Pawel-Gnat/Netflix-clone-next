import useCurrentUser from '@/hook/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: { destination: '/auth', permanent: false }
		}
	}

	return {
		props: {}
	}
}

const Profiles = () => {
	const router = useRouter()
	const { data: user } = useCurrentUser()

	return (
		<div className="flex h-full items-center justify-center">
			<div className="flex flex-col">
				<h1 className="text-center text-3xl text-white md:text-6xl">Who is watching?</h1>
				<div className="mt-10 flex items-center justify-center gap-8">
					<button onClick={() => router.push('/')}>
						<div className="group mx-auto w-44 flex-row">
							<div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-md border-2 border-transparent group-hover:cursor-pointer group-hover:border-white">
								<Image
									src="/images/default-blue.png"
									width={176}
									height={176}
									alt=""
									aria-hidden="true"
								/>
							</div>
							<p className="mt04 text-center text-gray-400 group-hover:text-white">{user?.name}</p>
						</div>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Profiles
