import { SVGProps } from 'react';

interface IconProperties extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function BoltIcon({ color = '#131315', className, ...properties }: IconProperties) {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...properties}
    >
      <path
        d="M13 3.63818V10.6382H19L11 21.6382V14.6382H5L13 3.63818Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
