'use client'

import { faqs } from '@/data';
import React, { useState } from 'react';
import { TAccordionProps } from './TAccordionProps';

const Accordion = (props: TAccordionProps) => {
  const { activeBtn, searchTerm } = props;

  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (itemNumber: number) => {
    if (openItems.includes(itemNumber)) {
      setOpenItems(openItems.filter(item => item !== itemNumber));
    } else {
      setOpenItems([...openItems, itemNumber]);
    }
  };

  return (
    <div className="border border-gray-5 rounded-xl pb-6">
      {faqs
        .filter(faq =>
          faq.groupId === activeBtn &&
          (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .map((faq, index) => (
          <div key={index} id={faq.id} data-accordion="open">
            <h2 id={`accordion-open-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full text-base md:text-lg p-5 rtl:text-right rounded-t-xl gap-3 ${openItems.includes(index) ? 'text-green-primary1 font-bold' : 'text-red-primary1 font-medium'}`}
                data-accordion-target={`#accordion-open-body-${index}`}
                aria-expanded={openItems.includes(index)}
                aria-controls={`accordion-open-body-${index}`}
                onClick={() => toggleItem(index)}
              >
                <span className='text-left'>{faq.question}</span>
								<span className="w-[24px] h-[24px]">
									{openItems.includes(index) ? (
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.4853 12H3.51472" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg>
									) : (
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.4853 12H3.51472" stroke="black" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3.51471V20.4853" stroke="black" strokeLinecap="round" strokeLinejoin="round" /></svg>
									)}
								</span>
              </button>
            </h2>
            <div
              id={`accordion-open-body-${index}`}
              className={`mx-5 border border-x-0 border-t-0 border-b-1 border-gray-200 text-base overflow-hidden transition-all duration-500 ease-in-out ${openItems.includes(index) ? 'max-h-auto' : 'max-h-0'}`}
              aria-labelledby={`accordion-open-heading-${index}`}
              style={{ transitionProperty: 'max-height, opacity' }}
            >
              <div className="mb-5 p-5 rounded-[20px] bg-blue-primary2">
                <div dangerouslySetInnerHTML={{ __html: faq.description }} className="text-blue-primary1 font-medium">
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Accordion;