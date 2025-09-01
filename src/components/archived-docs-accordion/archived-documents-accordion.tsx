'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import ChevronIcon from './assets/chevron.svg';

const accordionVariants = cva(['flex p-8 flex-col justify-center items-start gap-8 self-stretch rounded-3xl bg-[#F5F5F8] transition-all duration-500'], {
  variants: {
    isOpen: {
      true: 'mb-8',
      false: 'mb-4',
    },
  },
});

const headerVariants = cva(['flex justify-between items-center cursor-pointer w-full'], {
  variants: {
    isOpen: {
      true: '',
      false: '',
    },
  },
});

interface ArchivedDocument {
  id: string;
  displayDate: string;
}

interface ArchivedDocumentsAccordionProperties {
  titleKey: 'termsConditions' | 'privacy' | 'cookies' | 'fraudPrevention' | 'complaintsPolicy';
  documents: ArchivedDocument[];
  defaultOpen?: boolean;
  className?: string;
}

export function ArchivedDocumentsAccordion({ 
  titleKey, 
  documents, 
  defaultOpen = false, 
  className 
}: ArchivedDocumentsAccordionProperties) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const tArchivedDocuments = useTranslations('pages.archivedDocs.accordions');

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={accordionVariants({ isOpen, className })}>
      <div className={headerVariants({ isOpen })} onClick={toggleAccordion}>
        <h3 className="text-xl md:text-[28px] font-medium leading-[120%] tracking-[0px] text-[#191C1F]" style={{ fontFamily: '"Inter Tight"', fontFeatureSettings: '"liga" off, "clig" off' }}>{tArchivedDocuments(titleKey)}</h3>
        <ChevronIcon 
          className="w-6 h-6 transition-all duration-500" 
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}
        />
      </div>
      
      {isOpen && (
        <div className="flex flex-col gap-2 w-full">
          {documents.length > 0 ? (
            documents.map((document_) => (
              <Link 
                key={document_.id}
                href={`/archived-docs/${document_.id}`}
                className="block text-base font-medium leading-[136%] tracking-[0px] text-[#4169E1] hover:text-[#4169E1]/90 transition-colors"
                style={{ fontFamily: '"Inter Tight"', fontFeatureSettings: '"liga" off, "clig" off' }}
              >
                {document_.displayDate}
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-500 font-normal" style={{ fontFamily: '"Inter Tight"' }}>
              {tArchivedDocuments('noFiles')}
            </p>
          )}
        </div>
      )}
    </div>
  );
} 