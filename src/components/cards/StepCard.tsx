import type { HowStep } from "@/lib/types";

type StepCardProps = {
  step: HowStep;
  index: number;
};

export function StepCard({ step, index }: StepCardProps) {
  return (
    <article className="step-card">
      <div className="step-card__icon">{step.icon}</div>
      <h3>{index + 1}. {step.title}</h3>
      <p>{step.description}</p>
    </article>
  );
}
