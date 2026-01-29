import * as React from "react";
import { SVGProps } from "react";
const FinTechCoLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 14v2h4v-2H2Zm0-5v2h4V9H2Zm6 5v2h4v-2H8Zm0-5v2h4V9H8Zm6 5v2h4v-2h-4Zm0-5v2h4V9h-4Z"
    />
    <path
      fill="currentColor"
      d="M3 4v3h2V5.414l4 4V8.586L5.414 5H7V3H3a1 1 0 0 0-1 1Zm14-1h-4v2h1.586L11 8.586v.828l4 4V12h2v4a1 1 0 0 1-1 1h-4v2h4a3 3 0 0 0 3-3V4a1 1 0 0 0-1-1Z"
    />
  </svg>
);
export default FinTechCoLogo;
