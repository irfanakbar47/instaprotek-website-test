'use client'

import React, { useState, useRef, useEffect } from 'react'
import { faq_btnGroup } from '@/data'
import Link from 'next/link'
import { TButtonGroupProps } from './TButtonGroupProps'

const ButtonGroup = (props: TButtonGroupProps) => {
    const { onButtonClick } = props;

    const [activeBtn, setActiveBtn] = useState<string | null>(faq_btnGroup[0]?.id);
    const btnRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleButtonClick = (id: string, index: number) => {
        setActiveBtn(id);
        onButtonClick(id);
        btnRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    useEffect(() => {
        const initialIndex = faq_btnGroup.findIndex(btn => btn.id === activeBtn);
        if (initialIndex !== -1) {
            btnRefs.current[initialIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
    }, [activeBtn]);

    return (
			<div className="flex justify-center overflow-x-auto no-scrollbar" style={{scrollbarWidth: 'none'}}>
				<div className="inline-flex space-x-2 w-[21em] sm:w-[32em] md:w-[37em] lg:space-x-0 lg:w-auto">
					{faq_btnGroup.map((btn, index) => (
						<div
							key={btn.id}
							//ref={el => btnRefs.current[index] = el}
							ref={(el: HTMLDivElement | null) => {
								  btnRefs.current[index] = el;
								}}
							className="inline-block h-9 lg:contents"
						>
							<Link
								href="#"
								aria-current={activeBtn === btn.id ? "page" : undefined}
								className={`py-2 px-2 text-base lg:text-lg font-medium text-gray-900 lg:px-4 lg:border lg:border-gray-200
									${index === 0 ? 'lg:rounded-l-full' : index === faq_btnGroup.length - 1 ? 'lg:rounded-r-full' : ''}
									${activeBtn === btn.id ? 'border-b-2 border-green-primary1 lg:border-0 lg:bg-green-primary1 lg:text-white' : 'bg-white hover:bg-gray-100'}
									whitespace-nowrap
								`}
								onClick={() => handleButtonClick(btn.id, index)}
							>
								{btn.label}
							</Link>
						</div>
					))}
				</div>
			</div>
    )
}

export default ButtonGroup;
