import { cn } from "@/lib/utils";
import * as React from "react";
const Logo = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    className={cn("w-full h-full", className)}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M.576 6.733a6.538 6.538 0 0 1 1.164-.104c1.58 0 3.027.563 4.154 1.5" />
      <path d="M5.076 10.629h-3.5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3.5" />
      <path d="M6.326 5.629a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m1.014 4.934c-.351-.061-.351-.565 0-.626a3.176 3.176 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.193 3.193 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.192 3.192 0 0 0 10.594 13l-.026.113c-.079.346-.573.344-.649-.003l-.021-.097a3.176 3.176 0 0 0-2.558-2.45" />
    </g>
  </svg>
);
export default Logo;
