import Input from '@/components/Input'
import axios from 'axios'
import Image from 'next/image'
import { ChangeEvent, useState, useCallback, FormEvent } from 'react'
import { signIn } from 'next-auth/react'

const Auth = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	const [variant, setVariant] = useState('login')

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) => (currentVariant === 'login' ? 'register' : 'login'))
	}, [])

	const login = useCallback(async () => {
		try {
			await signIn('credentials', {
				email,
				password,
				callbackUrl: '/profiles'
			})
		} catch (error) {
			console.log(error)
		}
	}, [email, password])

	const register = useCallback(async () => {
		try {
			await axios.post('/api/register', {
				email,
				name,
				password
			})

			login()
		} catch (error) {
			console.log(error)
		}
	}, [email, name, password, login])

	const handleForm = (e: FormEvent) => {
		e.preventDefault()
		variant === 'login' ? login() : register()
	}

	return (
		<div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
			<div className="h-full w-full bg-black lg:bg-opacity-50">
				<nav className="px-12 py-5">
					<Image src="/images/logo.png" width={120} height={12} alt="Logo" />
				</nav>
				<div className="flex justify-center">
					<div className="mt-2 w-full self-center rounded-md bg-black/70 p-16 lg:w-2/5 lg:max-w-md">
						<h1 className="mb-8 text-4xl font-semibold text-white">
							{variant === 'login' ? 'Sign in' : 'Register'}
						</h1>
						<form onSubmit={handleForm}>
							<div className="flex flex-col gap-4">
								{variant === 'register' && (
									<Input
										label="Username"
										onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
										id="name"
										value={name}
									/>
								)}
								<Input
									label="Email"
									onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
									id="email"
									type="email"
									value={email}
								/>
								<Input
									label="Password"
									onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
									id="password"
									type="password"
									value={password}
								/>
							</div>
							<button className="mt-10 w-full rounded-md bg-red-600 py-3 text-white transition-colors hover:bg-red-700">
								{variant === 'login' ? 'Sign in' : 'Sign up'}
							</button>
						</form>
						<p className="mt-12 text-neutral-500">
							{variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
							<button
								onClick={toggleVariant}
								className="ml-1 cursor-pointer text-white hover:underline"
							>
								{variant === 'login' ? 'Create an account' : 'Login'}
							</button>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Auth
