'use client'

import { IButtonProps } from '@/types/global'
import React from 'react'

const Button = (props: IButtonProps) => {

	const { type, label, icon, iconPos, bgColor, customStyle, onClick } = props

	return (
		<button
			type={type}
			onClick={onClick}
			className={`flex items-center rounded px-4 py-2 border-0 text-white font-normal gap-x-3 drop-shadow-md transition duration-200 ease-in-out hover:drop-shadow-lg hover:scale-[1.03] ${customStyle} ${!bgColor && 'bg-insta-gradient'}`}>
			{iconPos === 'left' && icon}{label}{iconPos === 'right' && icon}
		</button>
	)
}

export default Button