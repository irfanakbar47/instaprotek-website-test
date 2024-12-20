'use client'

import Link from 'next/link';
import React from 'react';
import { CustomImage } from "@/components";
import { footer_items } from '@/constants';
import { useNavigateAndScroll } from '@/hooks';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
	const today = new Date();
	const year = today.getFullYear();
	const navigateAndScroll = useNavigateAndScroll();

	const handleMouseClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
		const selection = footer_items
			.flatMap((items) => items.footer_links.flatMap((item) => item.links))
			.find((link) => link.id === targetId);

		navigateAndScroll(event, targetId, selection);
	}

	return (
		<footer className="bg-blue-primary1 pb-5">
			<div className="flex flex-col maxContent gap-x-32 py-16 border-b-[1px] border-green-primary1 lg:flex-row">
				<ul className="flex flex-col gap-y-5">
					{footer_items.map((items, index) => items.footer_logos.map((logo) => (
						<li key={logo.id} className={`${logo.mobile && 'hidden lg:block'}`}>
							<Link href={logo.href} scroll={true}>
								<CustomImage
									src={logo.imgUrl}
									alt={logo.imgAlt}
									width={logo.width}
									height={logo.height}
									className={`${index === 0 && 'w-[120px] mb-10 lg:w-auto lg:mb-0'}`}
									priority
								/>
							</Link>
						</li>
					)))}
				</ul>
				<div className="flex w-full justify-between flex-col gap-y-10 mb-10 lg:flex-row">
					{footer_items.map((items) => items.footer_links.map((item) => (
						<div key={item.id}>
							<a href={item.href}>
								<h4
									className={`text-white text-lg font-medium mb-4 hover:text-gray-5 transition-colors duration-300 ${item.id !== 'footer_get-in-touch' ? 'cursor-pointer' : 'cursor-default'}`}
								>
									{item.label}
								</h4>
							</a>
							<ul className="flex flex-col gap-y-3">
								{item.links.map((links) => (
									<li key={links.label} className="flex items-center gap-x-1 text-sm text-gray-5 hover:text-white transition-colors duration-300">
										{
											links.id === 'footer_phone-number' ? <BiSolidPhoneCall size="1.2em" />
												: links.id === 'footer_address-location' && <IoLocationSharp size="1.2em" />
										}
										<Link href={links.href} onClick={(event) => handleMouseClick(event, links.id)}>
											{links.label}
										</Link>
									</li>
								))}
							</ul>
							{item.id === 'footer_get-in-touch' && (
								<ul className="flex gap-x-2 te">
									<li className='footer_socmed-icons'>
										<Link href="https://www.facebook.com/instaprotek" target="_blank"><FaFacebookF size={22} /></Link>
									</li>
									{/* <li className='footer_socmed-icons'>
										<FaInstagram size={22} />
									</li>
									<li className='footer_socmed-icons'>
										<FaTwitter size={22} />
									</li> */}
									<li className='footer_socmed-icons'>
										<Link href="https://www.linkedin.com/company/instaprotek/" target="_blank"><FaLinkedinIn size={22} /></Link>
									</li>
								</ul>
							)}
						</div>
					)))}
				</div>
				<div className="flex w-full justify-between flex-col gap-y-10 lg:hidden lg:flex-row">
					<ul className="flex flex-col gap-y-1">
						{footer_items.map((items, index) => items.footer_logos.map((logo) => (
							<li key={logo.id} className={`${!logo.mobile && 'hidden '}`}>
								<Link href={logo.href}>
									<CustomImage
										src={logo.imgUrl}
										alt={logo.imgAlt}
										width={logo.width}
										height={logo.height}
										className={`${index === 0 && 'w-[126px] lg:w-auto lg:mb-0'}`}
										priority
									/>
								</Link>
							</li>
						)))}
					</ul>
				</div>
			</div>
			<div className="flex flex-col-reverse maxContent py-2 text-white justify-center lg:flex-row lg:justify-between">
				<h4 className='block text-xs text-center'>&copy; {year} instaProtek. All Rights Reserved.</h4>
				<ul className="flex justify-between gap-y-3">
					{footer_items.map((item) =>
						item.footer_about_links.map((link, index) => (
							<li key={link.id} className="flex items-center text-sm gap-x-1">
								<Link href={link.href}>
									<h5 className='text-xs'>{link.label}</h5>
								</Link>
								{index < item.footer_about_links.length - 1 && <span className="px-1">|</span>}
							</li>
						))
					)}
				</ul>
			</div>
		</footer>
	);
};

export default Footer;