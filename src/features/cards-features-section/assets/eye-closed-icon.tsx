import { SVGProps } from 'react';

interface IconProperties extends SVGProps<SVGSVGElement> {
  color?: string;
}

export function EyeClosedIcon({ color = '#131315', className, ...properties }: IconProperties) {
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
        d="M21 9.63818C18.6 12.3052 15.6 13.6382 12 13.6382C8.4 13.6382 5.4 12.3052 3 9.63818M3 15.6384L5.5 11.8384M20.9998 15.6144L18.5078 11.8384M9 17.6382L9.5 13.6382M15 17.6382L14.5 13.6382"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
