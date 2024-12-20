'use client'

import { Accordion, ButtonGroup, CustomImage, Search } from "@/components";
import React, { useState } from 'react';
import { IoMdMail } from "react-icons/io";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function Support() {
	const [activeBtn, setActiveBtn] = useState<string | null>('faq-btn-1');
	const [searchTerm, setSearchTerm] = useState<string>('');

	const handleSearch = (term: string) => {
		setSearchTerm(term);
	};

  return (
		<main className="maxResources flex flex-col mt-[10em] gap-y-10 mb-[6em] px-5 md:px-10 lg:mb-[10em]">
			<div className="mb-5">
				<h1 className="text-3.5xl md:text-3.7xl text-blue-primary1 font-bold">FAQ</h1>
			</div>
			<Search onSearch={handleSearch} />
			<ButtonGroup onButtonClick={setActiveBtn} />
			<Accordion activeBtn={activeBtn} searchTerm={searchTerm} />
			<div className="flex  flex-col pl-5 gap-y-10 md:flex-row md:justify-between md:px-5 lg:px-16">
				<div className="flex flex-col gap-y-5">

					<div className="flex items-center h-[30px] lg:h-[85.15px]">
						<CustomImage
							src='https://acdn.dnamicro.net/instaprotek/instaProtek_primary_logo-full_color.png'
							alt='instaProtek Primary Logo'
							width={300}
							height={57.25}
							className="h-auto w-[200px] lg:w-[300px]"
							priority
						/>
					</div>
					<div className="flex flex-col gap-y-3 text-sm md:text-base">
						<div className="flex gap-x-3">
							<IoMdMail size={24} />
							<a href="mailto:support@instaprotek.com" className="text-green-primary1 font-normal">support@instaprotek.com</a>
						</div>
						<div className="flex gap-x-3">
							<AiOutlineClockCircle size={24} />
							<p className="flex flex-col">
								<span className="font-bold">CUSTOMER SERVICE HOURS</span>
								<span>8AM - 5PM PST Monday-Friday</span>
							</p>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-y-5">
					<CustomImage
						src='https://acdn.dnamicro.net/instaprotek/otterbox_logo.png'
						alt='Otterbox Logo'
						width={300}
						height={57.25}
						className="h-auto w-[200px] lg:w-[300px]"
						priority
					/>
					<div className="flex flex-col gap-y-3 text-sm md:text-base">
						<div className="flex gap-x-3">
							<IoMdMail size={24} />
							<a href="mailto:ottersupport@instaprotek.com" className="text-green-primary1 font-normal">ottersupport@instaprotek.com</a>
						</div>
						<div className="flex gap-x-3">
							<AiOutlineClockCircle size={24} />
							<p className="flex flex-col">
								<span className="font-bold">CUSTOMER SERVICE HOURS</span>
								<span>8AM - 5PM PST Monday-Friday</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
