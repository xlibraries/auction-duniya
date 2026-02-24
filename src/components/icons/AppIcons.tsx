import type { PropertyStatus } from "@/lib/types";

type IconProps = {
  size?: number;
};

export function BrandIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M6 17h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 13.8l3-3 4 4.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 6.5l6 6.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function SearchIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.8" stroke="currentColor" strokeWidth="2" />
      <path d="M16.2 16.2L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
      <path d="M5 19c1.8-2.7 4.1-4 7-4s5.2 1.3 7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BuildingIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="4" y="5" width="7" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 8h1M8 11h1M8 14h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="13" y="9" width="7" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 12h1M16 15h1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function PinIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 19c3-3 5.4-5.8 5.4-8.2a5.4 5.4 0 10-10.8 0c0 2.4 2.4 5.2 5.4 8.2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="10.8" r="1.8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function ArrowRightIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M13.5 6.8L19 12l-5.5 5.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BadgeStatusIcon({ status }: { status: PropertyStatus }) {
  if (status === "live") {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M5 12a7 7 0 017-7M19 12a7 7 0 00-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (status === "upcoming") {
    return (
      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 3v5M16 3v5M4 10h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" aria-hidden="true">
      <path d="M12 3l2.8 5.7 6.2.9-4.5 4.3 1.1 6.1L12 17l-5.6 3 1.1-6.1L3 9.6l6.2-.9L12 3z" fill="currentColor" />
    </svg>
  );
}

export function CheckCircleIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8.5 12.2l2.2 2.3 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HomeStepIcon({ size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 11.5L12 5l8 6.5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 10.8V19h10v-8.2" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldStepIcon({ size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 4l7 2.8V12c0 4.6-3.2 7.8-7 8.9C8.2 19.8 5 16.6 5 12V6.8L12 4z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M9.2 12.3l2.1 2.1 3.8-3.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GavelStepIcon({ size = 24 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M14.8 4.8l4.4 4.4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
      <path d="M6.2 13.4l7.3-7.3 3.1 3.1-7.3 7.3H6.2z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ size = 13 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7.8v4.4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M6.4 4h3.1l1.3 4-2 1.9a15 15 0 006.3 6.3l1.9-2 4 1.3v3.1c0 .8-.6 1.4-1.4 1.4C11.2 19.8 4.2 12.8 4.2 5.4 4.2 4.6 4.8 4 5.6 4h.8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 7l7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function GlobeIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.1 5.2 3.1 8.5S14.1 18.2 12 20.5M12 3.5C9.9 5.8 8.9 8.7 8.9 12s1 6.2 3.1 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ImmersiveIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 12c1.4-2.6 3.8-4 8-4s6.6 1.4 8 4c-1.4 2.6-3.8 4-8 4s-6.6-1.4-8-4z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PauseIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="6" y="5" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="5" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function FullscreenIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShareIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.6 10.7l6.8-4M8.6 13.3l6.8 4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function PrevIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M14.5 6L8.5 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NextIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M9.5 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function GridIcon({ size = 14 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
      <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function HeartIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 20.5l-1-.9C6.2 15.4 3 12.6 3 8.9A4.9 4.9 0 017.9 4c1.7 0 3.3.8 4.1 2.1A5 5 0 0116.1 4 4.9 4.9 0 0121 8.9c0 3.7-3.2 6.5-8 10.7l-1 .9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function TrendUpIcon({ size = 15 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MoneyIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M6 9h2M16 15h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IncrementIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 16l5-5 4 4 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 8h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BiddersIcon({ size = 20 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path d="M3.8 18c.8-2.7 2.8-4 5.2-4 2.3 0 4.3 1.3 5.1 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M14.7 18c.5-1.8 1.8-2.8 3.3-2.8 1.3 0 2.4.6 3.2 1.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function OverviewIcon({ size = 18 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M9 8v8M15 8v8M7 11h4M7 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function DocIcon({ type, size = 16 }: { type: "deed" | "notice" | "terms"; size?: number }) {
  if (type === "terms") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
        <path d="M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M7.5 13.5l4-4 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.3 6.5l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M7 3.5h7l4 4V20a.5.5 0 01-.5.5h-10A.5.5 0 017 20V3.5z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M14 3.5V8h4" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 12h6M9 15h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function DownloadIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 4v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M8.5 10.7L12 14.2l3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CallIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M6.4 4h3.1l1.3 4-2 1.9a15 15 0 006.3 6.3l1.9-2 4 1.3v3.1c0 .8-.6 1.4-1.4 1.4C11.2 19.8 4.2 12.8 4.2 5.4 4.2 4.6 4.8 4 5.6 4h.8z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

export function MapIcon({ size = 16 }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M4 7.5L9 5l6 2.5L20 5v11.5L15 19l-6-2.5L4 19V7.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 5v11.5M15 7.5V19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function OverviewCardIcon({ id, size = 20 }: { id: string; size?: number }) {
  if (id === "area") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
        <path d="M4 18L18 4M8 19h11V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "type") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
        <path d="M3.5 11.5L12 5l8.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10.5V19h10v-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (id === "possession") {
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
        <circle cx="8" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 12h10M17 9l4 3-4 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" aria-hidden="true">
      <path d="M12 4l7 2.8V12c0 4.6-3.2 7.8-7 8.9C8.2 19.8 5 16.6 5 12V6.8L12 4z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9.2 12.3l2.1 2.1 3.8-3.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
