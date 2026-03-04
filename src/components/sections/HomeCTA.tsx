import { Button } from "@/components/ui/Button";

export function HomeCTA() {
  return (
    <section className="section-tight home-cta" id="education">
      <div className="container home-cta__inner">
        <h3>Ready to Start Your Journey?</h3>
        <p>Join thousands of happy investors who found their dream property through Auction Dunia.</p>
        <div className="home-cta__actions">
          <Button variant="outline-white">Browse Auctions</Button>
          <Button variant="dark">Contact Expert</Button>
        </div>
      </div>
    </section>
  );
}
