import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import type { PropertyStatus } from "@/lib/types";

type BadgeProps = PropsWithChildren<{
  variant: PropertyStatus;
  className?: string;
}>;

export function Badge({ variant, className, children }: BadgeProps) {
  return <span className={cn("ad-badge", `ad-badge--${variant}`, className)}>{children}</span>;
}
