"use client";

import { useMemo, useState } from "react";

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const EVENT_TYPES = [
  "Family Gathering",
  "Corporate / Office",
  "Birthday",
  "School / Education",
  "Wedding / Celebration",
  "Conference / Meeting",
  "Other",
] as const;

const BUDGETS = [
  "Under $200",
  "$200 – $400",
  "$400 – $800",
  "$800 – $1,500",
  "$1,500+",
  "Not sure yet",
] as const;

const SERVING_NEEDS = [
  "I'll provide everything",
  "Disposables (plates, utensils, napkins)",
  "Chafing dishes / warmers",
  "Full setup (disposables + warmers)",
  "Not sure",
] as const;

const HEAR_ABOUT = [
  "Google / Search",
  "Social media",
  "Walk-in / Drive-by",
  "Friend or family",
  "Other",
] as const;

export default function CateringForm() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    // Contact
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    preferredContact: "Either" as "Phone" | "Email" | "Either",
    // Event
    eventDate: "",
    eventTime: "",
    guests: "",
    eventType: "Family Gathering",
    eventVenue: "",
    // Service
    serviceType: "Pickup" as "Pickup" | "Delivery",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryState: "MA",
    deliveryZip: "",
    deliveryWindow: "",
    deliveryInstructions: "",
    // Menu
    menuFocus: [] as string[],
    dietaryAllergies: "",
    mustHave: "",
    avoid: "",
    // Extras
    servingNeeds: "Not sure",
    budget: "Not sure yet",
    howDidYouHear: "",
    notes: "",
    consent: false,
  });

  const needsDelivery = useMemo(() => data.serviceType === "Delivery", [data.serviceType]);

  const steps: { num: Step; label: string }[] = useMemo(
    () =>
      needsDelivery
        ? [
            { num: 1, label: "Contacto" },
            { num: 2, label: "Evento" },
            { num: 3, label: "Entrega" },
            { num: 4, label: "Menú" },
            { num: 5, label: "Extras" },
            { num: 6, label: "Confirmar" },
          ]
        : [
            { num: 1, label: "Contacto" },
            { num: 2, label: "Evento" },
            { num: 4, label: "Menú" },
            { num: 5, label: "Extras" },
            { num: 6, label: "Confirmar" },
          ],
    [needsDelivery]
  );

  const currentStepIndex = steps.findIndex((s) => s.num === step);
  const progressPercent = steps.length > 0 ? ((currentStepIndex + 1) / steps.length) * 100 : 0;

  function next() {
    if (step === 2 && needsDelivery) return setStep(3);
    if (step === 2 && !needsDelivery) return setStep(4);
    if (step === 3 && needsDelivery) return setStep(4);
    if (step === 4) return setStep(needsDelivery ? 5 : 5);
    if (step === 5) return setStep(needsDelivery ? 6 : 6);
    if (step < 6) setStep((step + 1) as Step);
  }

  function goToStep(s: Step) {
    setStep(s);
  }

  function back() {
    if (step === 4 && needsDelivery) return setStep(3);
    if (step === 4 && !needsDelivery) return setStep(2);
    if (step === 5 && needsDelivery) return setStep(4);
    if (step === 5 && !needsDelivery) return setStep(3);
    if (step === 6) return setStep(5);
    if (step > 1) setStep((step - 1) as Step);
  }

  function toggleMenuFocus(val: string) {
    setData((d) => ({
      ...d,
      menuFocus: d.menuFocus.includes(val)
        ? d.menuFocus.filter((x) => x !== val)
        : [...d.menuFocus, val],
    }));
  }

  function canProceedFromStep(s: Step): boolean {
    if (s === 1) return !!(data.fullName.trim() && data.phone.trim() && data.email.trim());
    if (s === 2) return !!(data.eventDate && data.eventTime && data.guests.trim() && data.eventType);
    if (s === 3 && needsDelivery)
      return !!(
        data.deliveryAddress.trim() &&
        data.deliveryCity.trim() &&
        data.deliveryZip.trim()
      );
    return true;
  }

  async function submit() {
    const subject = `Catering Request – ${data.fullName} – ${data.eventDate}`;
    const body = [
      "——— CONTACT ———",
      `Full Name: ${data.fullName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      data.companyName ? `Company: ${data.companyName}` : null,
      `Preferred contact: ${data.preferredContact}`,
      "",
      "——— EVENT ———",
      `Date: ${data.eventDate}`,
      `Time: ${data.eventTime}`,
      `Number of guests: ${data.guests}`,
      `Event type: ${data.eventType}`,
      data.eventVenue ? `Venue / location name: ${data.eventVenue}` : null,
      "",
      "——— SERVICE ———",
      `Service: ${data.serviceType}`,
      needsDelivery
        ? [
            `Address: ${data.deliveryAddress}, ${data.deliveryCity}, ${data.deliveryState} ${data.deliveryZip}`,
            data.deliveryWindow ? `Time window: ${data.deliveryWindow}` : null,
            data.deliveryInstructions ? `Instructions: ${data.deliveryInstructions}` : null,
          ]
            .filter(Boolean)
            .join("\n")
        : "Pickup at restaurant",
      "",
      "——— MENU ———",
      `Focus: ${data.menuFocus.length ? data.menuFocus.join(", ") : "Not specified"}`,
      data.dietaryAllergies ? `Dietary / allergies: ${data.dietaryAllergies}` : null,
      data.mustHave ? `Must-have items: ${data.mustHave}` : null,
      data.avoid ? `Items to avoid: ${data.avoid}` : null,
      "",
      "——— EXTRAS ———",
      `Serving needs: ${data.servingNeeds}`,
      `Budget: ${data.budget}`,
      data.howDidYouHear ? `How did you hear about us: ${data.howDidYouHear}` : null,
      data.notes ? `Additional notes: ${data.notes}` : null,
      "",
      `Consent to contact: ${data.consent ? "Yes" : "No"}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:contact@pollosalabrasaelchalan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#C62828]/20 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#C62828]/10 text-2xl text-[#C62828]">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-[#121212]">Request sent</h3>
        <p className="mt-2 text-[#5c5c5c]">
          Your email client should open with a pre-filled message. Send it to complete your catering request. We&apos;ll contact you within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-black/8 bg-white shadow-sm">
      {/* Progress bar */}
      <div className="border-b border-black/8 px-6 py-4">
        <div className="mb-2 flex justify-between text-xs font-medium text-[#5c5c5c]">
          <span>Step {currentStepIndex + 1} of {steps.length}</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#FFF4E0]">
          <div
            className="h-full rounded-full bg-[#C62828] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {steps.map(({ num, label }) => (
            <button
              key={num}
              type="button"
              onClick={() => goToStep(num)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                step === num
                  ? "bg-[#C62828] text-white"
                  : "bg-[#FFF4E0] text-[#121212] hover:bg-[#FFF4E0]/80"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Step 1: Contact */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Contact information</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                We&apos;ll use this to confirm your order and discuss details.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Full name"
                value={data.fullName}
                onChange={(v) => setData({ ...data, fullName: v })}
                placeholder="John Smith"
                required
              />
              <Field
                label="Phone"
                value={data.phone}
                onChange={(v) => setData({ ...data, phone: v })}
                type="tel"
                placeholder="(617) 555-0123"
                required
              />
              <Field
                label="Email"
                value={data.email}
                onChange={(v) => setData({ ...data, email: v })}
                type="email"
                placeholder="john@example.com"
                required
              />
              <div className="sm:col-span-2">
                <Select
                  label="Preferred contact method"
                  value={data.preferredContact}
                  onChange={(v) => setData({ ...data, preferredContact: v as "Phone" | "Email" | "Either" })}
                  options={["Phone", "Email", "Either"]}
                />
              </div>
              <div className="sm:col-span-2">
                <Field
                  label="Company or organization (optional)"
                  value={data.companyName}
                  onChange={(v) => setData({ ...data, companyName: v })}
                  placeholder="For corporate events"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Event */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Event details</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                Minimum 10 guests for catering. For larger events we&apos;ll suggest options.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Event date"
                type="date"
                value={data.eventDate}
                onChange={(v) => setData({ ...data, eventDate: v })}
                required
              />
              <Field
                label="Event time"
                type="time"
                value={data.eventTime}
                onChange={(v) => setData({ ...data, eventTime: v })}
                required
              />
              <Field
                label="Number of guests"
                value={data.guests}
                onChange={(v) => setData({ ...data, guests: v })}
                placeholder="e.g. 25"
                required
              />
              <Select
                label="Type of event"
                value={data.eventType}
                onChange={(v) => setData({ ...data, eventType: v })}
                options={[...EVENT_TYPES]}
              />
              <div className="sm:col-span-2">
                <Field
                  label="Venue or location name (optional)"
                  value={data.eventVenue}
                  onChange={(v) => setData({ ...data, eventVenue: v })}
                  placeholder="e.g. Community Center, Office Building"
                />
              </div>
              <div className="sm:col-span-2">
                <Select
                  label="Pickup or delivery"
                  value={data.serviceType}
                  onChange={(v) => setData({ ...data, serviceType: v as "Pickup" | "Delivery" })}
                  options={["Pickup", "Delivery"]}
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Delivery */}
        {step === 3 && needsDelivery && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Delivery address</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                Delivery area and fees depend on location. We&apos;ll confirm when we contact you.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Field
                  label="Street address"
                  value={data.deliveryAddress}
                  onChange={(v) => setData({ ...data, deliveryAddress: v })}
                  placeholder="123 Main St, Apt 4"
                  required
                />
              </div>
              <Field
                label="City"
                value={data.deliveryCity}
                onChange={(v) => setData({ ...data, deliveryCity: v })}
                placeholder="East Boston"
                required
              />
              <Field
                label="State"
                value={data.deliveryState}
                onChange={(v) => setData({ ...data, deliveryState: v })}
              />
              <Field
                label="ZIP code"
                value={data.deliveryZip}
                onChange={(v) => setData({ ...data, deliveryZip: v })}
                placeholder="02128"
                required
              />
              <div className="sm:col-span-2">
                <Field
                  label="Preferred delivery time window"
                  value={data.deliveryWindow}
                  onChange={(v) => setData({ ...data, deliveryWindow: v })}
                  placeholder="e.g. 5:00 PM – 6:00 PM"
                />
              </div>
              <div className="sm:col-span-2">
                <Textarea
                  label="Delivery instructions (optional)"
                  value={data.deliveryInstructions}
                  onChange={(v) => setData({ ...data, deliveryInstructions: v })}
                  placeholder="Gate code, building name, floor, special access..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Menu */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Menu preferences</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                Select the styles you&apos;re interested in. We&apos;ll propose a custom menu.
              </p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#121212]">
                Menu focus <span className="font-normal text-[#5c5c5c]">(select all that apply)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["Chicken", "Seafood", "Beef", "Mixed / Variety", "Sides & appetizers", "Not sure"].map(
                  (t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => toggleMenuFocus(t)}
                      className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                        data.menuFocus.includes(t)
                          ? "bg-[#C62828] text-white shadow-sm"
                          : "border border-black/12 bg-white text-[#121212] hover:border-[#C62828]/40 hover:bg-[#FFF4E0]/50"
                      }`}
                    >
                      {t}
                    </button>
                  )
                )}
              </div>
            </div>
            <Textarea
              label="Dietary restrictions or allergies"
              value={data.dietaryAllergies}
              onChange={(v) => setData({ ...data, dietaryAllergies: v })}
              placeholder="e.g. Vegetarian options needed, nut allergy, gluten-free..."
            />
            <Textarea
              label="Must-have dishes"
              value={data.mustHave}
              onChange={(v) => setData({ ...data, mustHave: v })}
              placeholder="Specific dishes you want included (e.g. Pollo a la brasa, Ceviche)"
            />
            <Textarea
              label="Items to avoid (optional)"
              value={data.avoid}
              onChange={(v) => setData({ ...data, avoid: v })}
              placeholder="Ingredients or dishes to exclude"
            />
          </div>
        )}

        {/* Step 5: Extras */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Extras & budget</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                Helps us tailor your quote and setup.
              </p>
            </div>
            <Select
              label="Serving supplies needed"
              value={data.servingNeeds}
              onChange={(v) => setData({ ...data, servingNeeds: v })}
              options={[...SERVING_NEEDS]}
            />
            <Select
              label="Estimated budget"
              value={data.budget}
              onChange={(v) => setData({ ...data, budget: v })}
              options={[...BUDGETS]}
            />
            <Select
              label="How did you hear about us? (optional)"
              value={data.howDidYouHear}
              onChange={(v) => setData({ ...data, howDidYouHear: v })}
              options={["", ...HEAR_ABOUT]}
            />
            <Textarea
              label="Additional notes or requests"
              value={data.notes}
              onChange={(v) => setData({ ...data, notes: v })}
              placeholder="Setup time, special requests, questions..."
            />
            <label className="flex items-start gap-3 rounded-xl border border-black/10 bg-[#FFF4E0]/40 p-4">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => setData({ ...data, consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded border-black/20 text-[#C62828] focus:ring-[#C62828]"
              />
              <span className="text-sm text-[#121212]">
                I agree to be contacted by phone or email regarding this catering request. We will
                not use your information for marketing without your consent.
              </span>
            </label>
          </div>
        )}

        {/* Step 6: Confirm (summary) */}
        {step === 6 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-[#121212]">Review your request</h2>
              <p className="mt-1 text-sm text-[#5c5c5c]">
                Submitting will open your email with a pre-filled message. Send it to complete your request.
              </p>
            </div>
            <div className="rounded-xl border border-black/8 bg-[#FFF4E0]/30 p-4 text-sm">
              <SummaryRow label="Contact" value={`${data.fullName} · ${data.phone}`} />
              <SummaryRow label="Event" value={`${data.eventDate} at ${data.eventTime} · ${data.guests} guests · ${data.eventType}`} />
              <SummaryRow label="Service" value={needsDelivery ? `Delivery to ${data.deliveryCity}, ${data.deliveryState}` : "Pickup"} />
              <SummaryRow label="Menu focus" value={data.menuFocus.length ? data.menuFocus.join(", ") : "Not specified"} />
              <SummaryRow label="Budget" value={data.budget} />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/8 pt-6">
          <button
            type="button"
            onClick={back}
            disabled={step === 1}
            className="rounded-xl border border-black/15 px-5 py-3 text-sm font-semibold text-[#121212] transition-colors hover:bg-black/5 disabled:pointer-events-none disabled:opacity-50"
          >
            Back
          </button>
          {step < 6 ? (
            <button
              type="button"
              onClick={next}
              disabled={step === 6 ? false : !canProceedFromStep(step)}
              className="rounded-xl bg-[#C62828] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A31F1F] disabled:pointer-events-none disabled:opacity-50"
            >
              Next
            </button>
          ) : (
            <button
              type="button"
              onClick={submit}
              disabled={!data.consent}
              className="rounded-xl bg-[#C62828] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#A31F1F] disabled:pointer-events-none disabled:opacity-50"
            >
              Submit & open email
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2 py-1.5">
      <span className="font-medium text-[#5c5c5c] min-w-[100px]">{label}:</span>
      <span className="text-[#121212]">{value}</span>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-[#121212]">
        {label}
        {required && <span className="ml-0.5 text-[#C62828]">*</span>}
      </span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#121212] outline-none transition-colors placeholder:text-[#8E8E8E] focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-[#121212]">{label}</span>
      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full resize-y rounded-xl border border-black/15 bg-white px-4 py-3 text-[#121212] outline-none transition-colors placeholder:text-[#8E8E8E] focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20 min-h-[80px]"
      />
    </label>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-[#121212]">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-[#121212] outline-none transition-colors focus:border-[#C62828] focus:ring-2 focus:ring-[#C62828]/20"
      >
        {options.map((o) => (
          <option key={o || "empty"} value={o}>
            {o || "— Select —"}
          </option>
        ))}
      </select>
    </label>
  );
}
