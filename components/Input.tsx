import { ChangeEvent } from 'react'

interface InputProps {
	id: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	value: string
	label: string
	type?: string
}

const Input: React.FC<InputProps> = ({ id, onChange, value, label, type }) => {
	return (
		<div className="relative">
			<input
				onChange={onChange}
				type={type}
				value={value}
				id={id}
				className="text-md peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-white focus-visible:outline-none focus-visible:ring-0"
				placeholder=" "
			/>
			<label
				className="text-md transform-translate-y-3 absolute left-6 top-4 z-10 origin-[0] scale-75 text-zinc-400 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus-visible:-translate-y-3 peer-focus-visible:scale-75"
				htmlFor={id}
			>
				{label}
			</label>
		</div>
	)
}

export default Input
