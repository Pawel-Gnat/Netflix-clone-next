import Navbar from '@/components/Navbar'
import useCurrentUser from '@/hook/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'

export async function getServerSideProps(context: NextPageContext) {
	const session = await getSession(context)

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false
			}
		}
	}

	return {
		props: {}
	}
}

export default function Home() {
	const { data: user } = useCurrentUser()

	return (
		<>
			<Navbar />
			{/* <h1>Netflix Clone</h1> */}
			{/* <p>Logged in as : {user?.name}</p> */}
			{/* <button onClick={() => signOut()}>Logout</button> */}
		</>
	)
}
