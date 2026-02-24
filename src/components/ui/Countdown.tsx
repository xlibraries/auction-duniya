const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7.8v4.4l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type CountdownProps = {
  label?: string;
  date?: string;
};

export function Countdown({ label, date }: CountdownProps) {
  const text = label || date;
  if (!text) return null;

  return (
    <span className="property-time">
      <ClockIcon /> {text}
    </span>
  );
}
