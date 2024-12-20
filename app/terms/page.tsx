'use client';

import React, { useRef } from 'react';
import { SideNavbar, ScrollToTopButton } from '@/components';
import { termsSections } from '@/data';
import { useScrollToContent, useScrollToHash, useScrollToTop } from '@/hooks';

import LimitedProductGuarantee from '@/app/terms/sections/LimitedProductGuarantee';
import OtterBoxProtectionProgram from '@/app/terms/sections/OtterBoxProtectionProgram';
import CaseGuarantee from '@/app/terms/sections/CaseGuarantee';
import CameraLensGuarantee from '@/app/terms/sections/CameraLensGuarantee';
import WarrantyReplacement from '@/app/terms/sections/WarrantyReplacement';

const Terms = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const { showScrollToTop, atBottom, activeSection } = useScrollToContent(contentRef);
  const scrollToTop = useScrollToTop(contentRef);

  useScrollToHash(contentRef, 20);

  return (
    <main id="terms-and-condition" className="relative min-h-screen overflow-hidden | gap-y-10 mt-[10em] | px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40 2xl:px-48">

      <header id="terms-header" className="mb-5">
        <h1 className="text-3.7xl text-blue-primary1 font-bold text-center xl:text-left xl:ml-24">
          Terms and Condition
        </h1>
      </header>

      <div className="grid grid-cols-12 gap-y-5 mt-10">

        <div id="terms-side-navbar" className="hidden xl:inline-block lg:col-span-3">
          <SideNavbar sections={termsSections} activeSection={activeSection} />
        </div>

        <div
          id="terms-content"
          ref={contentRef}
          className="hide-scrollbar | relative col-span-12 xl:col-span-9 h-screen | overflow-y-scroll scroll-smooth | px-0 xl:px-8 lg:pb-60 | text-base"
        >
          {/* Terms and condition's Sections - Start */}
          <div id="limited-product-guarantee">
            <LimitedProductGuarantee />
          </div>
          <div id="otterBox-protection-program">
            <OtterBoxProtectionProgram />
          </div>
          <div id="case-guarantee">
            <CaseGuarantee />
          </div>
          <div id="camera-lens-guarantee">
            <CameraLensGuarantee />
          </div>
          <div id="warranty-replacement">
            <WarrantyReplacement />
          </div>
          {/* Terms and condition's Sections - End */}

          <ScrollToTopButton
            showScrollToTop={showScrollToTop}
            atBottom={atBottom}
            scrollToTop={scrollToTop}
            customStyle={`${atBottom ? 'absolute left-[40%] pt-8' : 'fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-50'}`}
            customFillStyle={'rounded-full bg-blue-primary2 hover:bg-gray-5 shadow-md hover:shadow-lg transition-colors duration-300 p-4'}
            customChevronStyle={'w-6 h-6 object-contain fill-current text-blue-primary1'}
          />
        </div>

      </div>
    </main>
  );
};

export default Terms;