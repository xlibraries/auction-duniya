type CountdownProps = {
  label?: string;
  date?: string;
};

export function Countdown({ label, date }: CountdownProps) {
  if (label) {
    return <span className="property-time">{label}</span>;
  }
  if (date) {
    return <span className="property-time">{date}</span>;
  }
  return null;
}
