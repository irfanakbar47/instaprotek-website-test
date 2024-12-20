'use client'

import React, { ChangeEvent, useState } from 'react';
import { TInputFieldProps } from './TInputFieldProps';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

const InputField = (props: TInputFieldProps) => {
	const { label, icon, id, type, ref, isPhone, required, onChange } = props;
	const [value, setValue] = useState(props.value ?? '');

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		let newValue = e.target.value;

		if (isPhone) {
			newValue = formatPhoneNumber(newValue);
		}

		setValue(newValue);
		onChange(e as ChangeEvent<HTMLInputElement>);
	};

	return (
		<div className="flex items-center w-full gap-x-4">
			<div className="relative flex justify-center items-center w-[40px] h-[40px] overflow-hidden">
				{icon}
			</div>
			<div className="relative w-full">
				{type !== 'textarea' ? (
					<input
						type={type}
						id={id}
						ref={ref}
						value={value}
						onChange={handleChange}
						className="overflow-hidden text-base block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-teal-5 peer"
						placeholder=" "
						pattern={isPhone ? `\(\d{3}\) \d{3}-\d{4}` : undefined}
						maxLength={isPhone ? 10 : 524288}
						required={required}
						onKeyDown={(e) => {
							if (isPhone && !/[\d-]/.test(e.key) && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
								e.preventDefault();
							}
						}}
					/>
				) : (
					<textarea
						id={id}
						ref={ref}
						value={value}
						onChange={handleChange}
						className="text-base block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b border-black appearance-none focus:outline-none focus:ring-0 focus:border-teal-5 peer resize-none"
						placeholder=" "
						rows={3}
					></textarea>
				)}
				<label
					htmlFor={id}
					className="absolute text-base text-gray-15  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-teal-5 peer peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
				>
					{label}
				</label>
			</div>
		</div>
	);
};

export default InputField;