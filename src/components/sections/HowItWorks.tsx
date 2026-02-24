import { HOW_STEPS } from "@/lib/constants";
import { StepCard } from "@/components/cards/StepCard";

export function HowItWorks() {
  return (
    <section className="section how-it-works" id="services">
      <div className="container">
        <p className="section-label">The Process</p>
        <h2 className="how-it-works__title">How It Works</h2>
        <p className="how-it-works__sub">Buying auction properties is simple. Let us guide you in three easy steps.</p>
        <div className="steps-grid">
          {HOW_STEPS.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
