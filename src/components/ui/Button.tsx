import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline" | "dark";

type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant;
    className?: string;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  return (
    <button className={cn("ad-btn", `ad-btn--${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
