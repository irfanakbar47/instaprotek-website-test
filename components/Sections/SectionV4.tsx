'use client'

import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'
import { ISectionV4Props } from './SectionInterface'

const SectionV4 = (props: ISectionV4Props) => {
	const { imgUrl, imgAlt, customStyle } = props
	return (
		<section
			className={`relative overflow-hidden h-screen bg-cover bg-center my-[3em] ${customStyle}`}
			style={{ backgroundImage: `url(${imgUrl})` }}
			aria-label={imgAlt}
		>
				<div className="h-full">
					<div className="flex flex-col justify-center items-center h-full maxContent m-auto">
						<h2 className='text-white text-center text-1xl lg:text-[48px] font-bold lg:leading-[72px] mb-5'>
							Set Your Products <br></br>Apart from Others
						</h2>
					<Link href="/contact"><Button label="Learn More" customStyle="px-2 py-1 lg:px-4 lg:py-2" /></Link>
					</div>
				</div>
		</section>
	)
}

export default SectionV4