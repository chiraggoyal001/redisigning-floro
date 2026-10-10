"use client";

import React, { useState } from "react";
import { Mail, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { NeoButton } from "@/components/common/NeoButton";
import { InputField } from "@/components/common/InputField";
import { NeoCard } from "@/components/common/NeoCard";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Question",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="w-full flex flex-col bg-transparent pb-20">
      {/* Header */}
      <section className="w-full pt-12 md:pt-16 pb-4 bg-transparent text-center">
        <div className="max-w-reading mx-auto px-4 sm:px-6 space-y-4">
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-floro-accent">
            Customer Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold font-display text-floro-primary">
            Contact Floro Care
          </h1>
          <p className="text-sm sm:text-base text-floro-secondary leading-relaxed">
            We are here to support your daily worship experience. Reach out anytime with questions or feedback.
          </p>
        </div>
      </section>

      <section className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Support Channels Info */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-2xl font-bold font-display text-floro-primary">
              Direct Support Channels
            </h2>
            <p className="text-sm text-floro-secondary leading-relaxed">
              Our devotee support desk is active early in the morning during daily fulfillment hours.
            </p>

            <div className="space-y-4 pt-2 neo-card-group group/cards">
              <NeoCard variant="white" hasShadow={true} padding="md" className="flex items-start gap-3">
                <div className="p-2 rounded bg-floro-canvas border border-floro-border text-floro-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-floro-primary">Email Support</h4>
                  <p className="text-sm font-semibold text-floro-secondary mt-0.5">care@floro.in</p>
                  <p className="text-xs text-floro-muted mt-0.5">Average reply time: under 4 hours</p>
                </div>
              </NeoCard>

              <NeoCard variant="white" hasShadow={true} padding="md" className="flex items-start gap-3">
                <div className="p-2 rounded bg-floro-canvas border border-floro-border text-floro-success">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-floro-primary">Helpline & WhatsApp</h4>
                  <p className="text-sm font-semibold text-floro-secondary mt-0.5">+91 98765 43210</p>
                  <p className="text-xs text-floro-muted mt-0.5">Available for active subscriber assistance</p>
                </div>
              </NeoCard>

              <NeoCard variant="white" hasShadow={true} padding="md" className="flex items-start gap-3">
                <div className="p-2 rounded bg-floro-canvas border border-floro-border text-floro-indigo">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-floro-primary">Morning Operations Hours</h4>
                  <p className="text-sm font-semibold text-floro-secondary mt-0.5">5:00 AM – 8:00 PM IST</p>
                  <p className="text-xs text-floro-muted mt-0.5">365 days a year including Sundays & holidays</p>
                </div>
              </NeoCard>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <NeoCard variant="white" hasShadow={true} padding="lg" rounded="largeCard">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold font-display text-floro-primary">
                    Send Us a Message
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <InputField
                      label="Your Name"
                      placeholder="e.g. Radhika Sharma"
                      isRequired={true}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <InputField
                      label="Phone Number"
                      placeholder="e.g. 9876543210"
                      isRequired={true}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <InputField
                    label="Email Address"
                    type="email"
                    placeholder="e.g. radhika@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-sm font-bold text-floro-primary">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full h-12 px-4 rounded-control border-2 border-floro-border bg-floro-surface text-sm font-medium focus:outline-none focus:ring-3 focus:ring-floro-info"
                    >
                      <option value="General Question">General Question</option>
                      <option value="Subscription Inquiry">Subscription Inquiry</option>
                      <option value="Delivery Pin Code Inquiry">Delivery PIN Code Inquiry</option>
                      <option value="Custom Temple Offering">Custom Temple Offering</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5 text-left">
                    <label className="text-sm font-bold text-floro-primary">
                      Your Message <span className="text-floro-accent">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can we assist your puja rituals?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-control border-2 border-floro-border bg-floro-surface text-sm font-medium focus:outline-none focus:ring-3 focus:ring-floro-info placeholder:text-floro-muted/60"
                    />
                  </div>

                  <NeoButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    rightIcon={<Send className="w-4 h-4" />}
                  >
                    Submit Message
                  </NeoButton>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="p-3 w-fit mx-auto rounded-full bg-floro-success-soft text-floro-success border-2 border-floro-success">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-floro-primary">
                    Message Received!
                  </h3>
                  <p className="text-sm text-floro-secondary max-w-sm mx-auto">
                    Thank you for reaching out. A member of the Floro team will review your message and reply within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-floro-accent hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              )}
            </NeoCard>
          </div>
        </div>
      </section>
    </main>
  );
}
