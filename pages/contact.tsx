import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, MapPin, Send } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website inquiry — ${formData.reason}`);
    const body = encodeURIComponent(
      `From: ${formData.name} <${formData.email}>\nReason: ${formData.reason}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@bsusa.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const labelClass = 'text-sm font-bold text-navy';

  return (
    <>
      <Head>
        <title>Contact — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Contact Better Start USA Foundation, Inc. — email info@bsusa.org, or use the form on this page. Nonprofit registered in the State of Florida."
        />
      </Head>

      <PageHero
        eyebrow="Contact"
        title="Contact us"
        intro="Questions about the programs, requests to volunteer or partner, press, or anything else — we read every message."
      />

      <section>
        <div className="container-page pt-20 pb-24 flex flex-wrap items-start gap-x-16 gap-y-12">
          <div className="flex-[999_1_540px] min-w-0 flex flex-col gap-6">
            <div className="flex flex-col gap-2.5">
              <h2 className="text-[32px] font-extrabold tracking-tight text-navy">Send a message</h2>
              <p className="leading-relaxed text-slate">
                This form opens an email draft in your mail app, pre-filled with what you entered. If you
                prefer, you can email{' '}
                <a href="mailto:info@bsusa.org" className="font-bold text-navy hover:underline">
                  info@bsusa.org
                </a>{' '}
                directly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-mist rounded-[20px] p-6 md:p-9 flex flex-col gap-5">
              <div className="flex flex-wrap gap-5">
                <div className="flex-[1_1_220px] flex flex-col gap-2">
                  <label htmlFor="name" className={labelClass}>Your name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="input-field" />
                </div>
                <div className="flex-[1_1_220px] flex flex-col gap-2">
                  <label htmlFor="email" className={labelClass}>Your email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="input-field" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="reason" className={labelClass}>What&apos;s this about?</label>
                <select id="reason" name="reason" value={formData.reason} onChange={handleChange} className="input-field">
                  <option value="general">General question</option>
                  <option value="join-a-program">Joining a program</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donate">Donating</option>
                  <option value="partner">Partnership</option>
                  <option value="press">Press</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} required className="input-field resize-y" />
              </div>
              <div>
                <button type="submit" className="btn-primary text-base py-4 px-7">
                  <Send className="w-[18px] h-[18px]" aria-hidden="true" />
                  Open email draft
                </button>
              </div>
              {submitted && (
                <p className="text-sm text-slate" role="status">
                  Your email app should have opened. If not, write to{' '}
                  <a href="mailto:info@bsusa.org" className="font-bold text-navy hover:underline">info@bsusa.org</a>.
                </p>
              )}
            </form>
          </div>

          <aside className="flex-[1_1_320px] flex flex-col gap-4">
            <h2 className="eyebrow text-sunrise-dark mb-1">Direct contact</h2>
            <div className="border border-line rounded-2xl p-7 flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-sunrise-dark" aria-hidden="true" />
                <h3 className="text-lg font-extrabold text-navy">Email</h3>
              </div>
              <a href="mailto:info@bsusa.org" className="text-xl font-extrabold text-navy hover:underline">
                info@bsusa.org
              </a>
              <p className="text-[15px] leading-relaxed text-slate">
                We read this mailbox and reply within a few business days.
              </p>
            </div>
            <div className="border border-line rounded-2xl p-7 flex flex-col gap-2.5">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-sunrise-dark" aria-hidden="true" />
                <h3 className="text-lg font-extrabold text-navy">Mailing address</h3>
              </div>
              <p className="leading-relaxed">
                Better Start USA Foundation, Inc.
                <br />
                c/o Georgiy Sayapin, Registered Agent
                <br />
                2501 S Ocean Dr, Apt 1104
                <br />
                Hollywood, FL 33019
              </p>
              <p className="text-sm leading-relaxed text-slate">
                Program sites are in different places depending on the workshop — email first if
                you plan to visit in person.
              </p>
            </div>
            <div className="bg-mist rounded-2xl p-7 flex flex-col gap-2">
              <h3 className="text-lg font-extrabold text-navy">Organization details</h3>
              <p className="text-[15px] leading-[1.7]">
                <strong>Legal name:</strong> Better Start USA Foundation, Inc.
                <br />
                <strong>State of registration:</strong> Florida.
                <br />
                <strong>EIN:</strong> 43-2597508
                <br />
                <strong>Federal tax status:</strong> 501(c)(3) determination not yet issued.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
