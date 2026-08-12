"use client";

import { FormEvent, useState } from "react";

export function LeadForm({
  leadType,
  aiMode = false,
}: {
  leadType: "GENERAL_PROJECT" | "AI_RELIABILITY";
  aiMode?: boolean;
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = { ...Object.fromEntries(form.entries()), leadType };

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setLoading(false);
    setMessage(res.ok ? "Request received successfully." : data.error || "Unable to submit.");
  }

  return (
    <form onSubmit={submit} className="card grid gap-5 p-7 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <Field name="fullName" label="Full name" required />
        <Field name="workEmail" label="Work email" type="email" required />
        <Field name="company" label="Company" required />
        <Field name="phone" label="Phone" />
        <Field name="website" label="Company website" />
        <Field
          name={aiMode ? "agentUrl" : "service"}
          label={aiMode ? "AI agent / chatbot URL" : "Service of interest"}
        />
      </div>

      <label className="grid gap-2 text-sm font-black">
        Tell us about your project
        <textarea
          name="message"
          rows={6}
          className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 font-normal"
        />
      </label>

      {message && <div className="rounded-xl bg-[var(--soft)] p-4">{message}</div>}

      <button disabled={loading} className="btn-primary">
        {loading ? "Submitting..." : aiMode ? "Request free AI sample" : "Start your project"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  required = false,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-black">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-4 font-normal"
      />
    </label>
  );
}
