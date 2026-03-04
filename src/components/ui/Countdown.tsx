import { ClockIcon } from "@/components/icons/AppIcons";

type CountdownProps = {
  label?: string;
  date?: string;
};

export function Countdown({ label, date }: CountdownProps) {
  const text = label || date;
  if (!text) return null;

  return (
    <span className="property-time">
      <ClockIcon size={13} /> {text}
    </span>
  );
}
