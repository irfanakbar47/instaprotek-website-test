'use client'

import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Button } from '@/components';
import { useSmoothScroll } from '@/hooks';
import { IHeroProps } from './HeroInterface';

const Hero = (props: IHeroProps) => {
	const {subheading, background, heroTitle, customTitle, scrollTarget} = props 
	const scrollTo = useSmoothScroll();

	return (
		<section className="relative h-screen overflow-hidden mb-[3em]">
			<video autoPlay loop muted playsInline preload="none" className="absolute w-full min-h-screen object-cover z-[-1] md:h-auto">
				<source src={background} type="video/mp4" />
			</video>
			<div className="flex items-end pt-[80px] h-screen bg-black/[41%]">
				<div className="maxHero m-auto">
					<h1 className={`text-white mb-8 text-[24px] leading-[47px] font-semibold tracking-normal text-center md:text-[32px] lg:text-left lg:font-light lg:text-[56px] lg:leading-[86px] ${customTitle}`}>
						{heroTitle}
					</h1>
					{subheading && (
						<p className="text-white mx-auto max-w-[35em] text-base leading-[30px] tracking-normal mb-12 text-center md:text-lg lg:text-left lg:text-1xl lg:mx-0">
							At instaProtek, we specialize in delivering unparalleled service solutions tailored to the unique needs of both enterprises and retailers.
						</p>
					)}
					{/* <Button 
						
						type="button"
						
						label="Learn More" 
						
						icon={<FaChevronRight />} 
						
						iconPos="right" 
						onClick={() => {
							if (scrollTarget) {
								scrollTo(scrollTarget)
							}
						}}
						customStyle='mx-auto lg:ml-0' 
					/> */}
				</div>
			</div>
		</section>
	)
}

export default Hero