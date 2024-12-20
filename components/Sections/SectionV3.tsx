'use client'

import React from 'react'
import { FaChevronRight } from "react-icons/fa6";
import { Button, SectionLayoutV1 } from '@/components';
import { blogs } from '@/data';
import { card } from '@/constants';
import { useSmoothScroll } from '@/hooks';
import { ISectionV3Props } from './SectionInterface';

const SectionV3 = (props: ISectionV3Props) => {
	const {id, type, btnLabel, isBlogs, topTitle, title, description, containerStyle } = props;
	const scrollTo = useSmoothScroll();
	
	return (
		<SectionLayoutV1
			id={id}
			topTitle={topTitle}
			title={title}
			description={description}
			containerStyle={containerStyle}
		>
			<div className="flex flex-col maxContent">
				{isBlogs  ? (
					<div className="flex justify-center flex-wrap gap-4 lg:gap-x-9 mx-auto mb-10"> 
						{card.map((item) => (
							<div key={item.id} className="relative rounded-[20px] overflow-hidden bg-no-repeat bg-cover bg-[35%] w-[160px] h-[260px] md:w-[240px] md:h-[340px] lg:w-[298px] lg:h-[421px]" style={{ backgroundImage: `url(${item.imgUrl})` }} aria-label={item.imgAlt}>
								<div className="flex flex-col justify-end z-10 bg-card-overlay w-full h-full p-4">
										<div className='flex flex-col gap-y-3'>
											<p className='text-white text-base md:text-[20px]'>{item.title}</p>
											{item.cardBtnLabel && 
												<Button 
													customStyle='justify-center text-xs md:text-base px-2 py-0.5 lg:px-4 lg:py-2' 
													type="button" 
													label={item.cardBtnLabel}
													onClick={() => scrollTo(item.scrollTarget)} 
												/>
											}
										</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="flex justify-center flex-wrap gap-4 lg:gap-x-9 mx-auto mb-10"> 
						{blogs.map((blog) => (
							<div key={blog.id} className="relative rounded-[20px] overflow-hidden bg-no-repeat bg-cover bg-[35%] w-[160px] h-[260px] md:w-[230px] md:h-[330px] lg:w-[298px] lg:h-[421px]" style={{ backgroundImage: `url(${blog.imgUrl})` }} aria-label={blog.imgAlt}>
								<div className="flex flex-col justify-end z-10 bg-card-overlay w-full h-full p-4">
									<div className='flex flex-col gap-y-3'>
										<p className='text-white text-sm font-medium leading-[16px] lg:font-normal lg:leading-[24px] lg:text-base'>{blog.title}</p>
										<h3 className='text-gray-5 text-xs font-medium lg:font-normal lg:text-sm'>{blog.date}</h3>
									</div>
								</div>
							</div>
						))}
					</div>)}
				{/* {btnLabel && <Button customStyle='mx-auto' type={type} label={btnLabel} icon={<FaChevronRight />} iconPos="right" />} */}
			</div>
		</SectionLayoutV1>
	)
}

export default SectionV3