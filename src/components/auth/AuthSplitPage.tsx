"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AppleIcon, BrandIcon, CheckCircleIcon, GoogleIcon } from "@/components/icons/AppIcons";

type AuthMode = "login" | "signup";

type AuthSplitPageProps = {
  mode: AuthMode;
};

export function AuthSplitPage({ mode }: AuthSplitPageProps) {
  const [method, setMethod] = useState<"phone" | "email">("phone");

  const content = useMemo(() => {
    if (mode === "signup") {
      return {
        heading: "Create Account",
        sub: "Sign up to start bidding on verified auction properties.",
        cta: "Create Account",
        switchText: "Already have an account?",
        switchHref: "/login",
        switchAction: "Login",
      };
    }

    return {
      heading: "Welcome Back",
      sub: "Login to manage your bids and saved properties.",
      cta: "Send OTP",
      switchText: "Don't have an account?",
      switchHref: "/signup",
      switchAction: "Sign up",
    };
  }, [mode]);

  return (
    <div className="auth-page">
      <section className="auth-visual">
        <Image src="/images/Hall.jpg" alt="Auction interior" fill className="auth-visual__image" priority />
        <div className="auth-visual__overlay" />

        <div className="auth-visual__content">
          <Link href="/" className="auth-brand" aria-label="Auction Dunia home">
            <span className="auth-brand__badge"><BrandIcon size={22} /></span>
            <span>Auction Dunia</span>
          </Link>

          <div className="auth-visual__copy">
            <h1>Your gateway to exclusive property deals.</h1>
            <p>Join over 50,000+ investors securing verified bank-auctioned properties across India.</p>
          </div>

          <div className="auth-visual__trust">
            <span><CheckCircleIcon size={14} /> Verified Listings</span>
            <span><CheckCircleIcon size={14} /> Secure Bidding</span>
          </div>
        </div>
      </section>

      <section className="auth-form-wrap">
        <div className="auth-form-shell">
          <h2>{content.heading}</h2>
          <p>{content.sub}</p>

          <div className="auth-method-switch" role="tablist" aria-label="Login method">
            <button className={method === "phone" ? "is-active" : ""} onClick={() => setMethod("phone")} type="button">Phone Number</button>
            <button className={method === "email" ? "is-active" : ""} onClick={() => setMethod("email")} type="button">Email Address</button>
          </div>

          {method === "phone" ? (
            <>
              <label htmlFor="auth-phone">Phone Number</label>
              <div className="auth-input-row">
                <span>+91</span>
                <input id="auth-phone" placeholder="99887 76655" />
              </div>
            </>
          ) : (
            <>
              <label htmlFor="auth-email">Email Address</label>
              <div className="auth-input-row auth-input-row--single">
                <input id="auth-email" type="email" placeholder="you@example.com" />
              </div>
            </>
          )}

          <button className="auth-primary-btn" type="button">{content.cta}</button>

          <div className="auth-divider"><span>or continue with</span></div>

          <div className="auth-socials">
            <button type="button"><GoogleIcon size={20} /> Google</button>
            <button type="button"><AppleIcon size={20} /> Apple</button>
          </div>

          <p className="auth-switch-copy">
            {content.switchText} <Link href={content.switchHref}>{content.switchAction}</Link>
          </p>

          <div className="auth-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </section>
    </div>
  );
}
