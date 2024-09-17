import { cn } from "@/utils/cn";

const sizes = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-16 w-16",
  xl: "h-24 w-24",
};

const variants = {
  light: "text-white",
  primary: "text-slate-600",
};

export type SpinnerProps = {
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  className?: string;
};

export const Spinner = ({
  size = "md",
  variant = "primary",
  className = "",
}: SpinnerProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg
        fill="none"
        height="15"
        viewBox="0 0 15 15"
        width="15"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "animate-spin",
          sizes[size],
          variants[variant],
          className,
        )}
      >
        <path
          clipRule="evenodd"
          d="m7.5 2.00154c-.95884 0-1.901.25073-2.73301.72732-.832.47659-1.52491 1.16246-2.00997 1.98955-.48506.8271-.74541 1.76665-.7552 2.72544s.23131 1.90346.69938 2.74025c.46807.8369 1.14683 1.5367 1.96892 2.0302.8221.4935 1.75895.7634 2.71758.783.95864.0196 1.90573-.2118 2.7473-.6713.8416-.4595 1.5483-1.1311 2.0502-1.9481l.8534.5242c-.1759.2863-.3731.5575-.5893.8116-.5134.6029-1.1344 1.1091-1.8343 1.4913-.9949.5432-2.1145.8168-3.24775.7936-1.13325-.0231-2.24075-.3422-3.21259-.9256-.97183-.5833-1.77423-1.4107-2.32755-2.3999-.55333-.9893-.838346-2.10605-.82677-3.23948.01157-1.13342.31934-2.24412.89275-3.22187.57341-.97774 1.39254-1.78855 2.37609-2.35195.69198-.39637 1.44841-.66059 2.23082-.78242.32968-.05133.66398-.07738 1-.07738z"
          fill="#151515"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
