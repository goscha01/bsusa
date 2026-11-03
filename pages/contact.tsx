import React, { useState } from 'react';
import Head from 'next/head';
import { Mail, MapPin, Send } from 'lucide-react';

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

  return (
    <>
      <Head>
        <title>Contact — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Contact Better Start USA Foundation, Inc. — email info@bsusa.org, or use the form on this page. Nonprofit registered in the State of Florida."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact us</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              Questions about the programs, requests to volunteer or partner, press, or anything
              else — we read every message.
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Send a message</h2>
              <p className="text-gray-700 mb-6">
                This form opens an email draft in your mail app, pre-filled with what you entered.
                If you prefer, you can email{' '}
                <a href="mailto:info@bsusa.org" className="text-primary hover:underline">
                  info@bsusa.org
                </a>{' '}
                directly.
              </p>

              <div className="card">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                      What's this about?
                    </label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleChange}
                      className="input-field"
                    >
                      <option value="general">General question</option>
                      <option value="join-a-program">Joining a program</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donate">Donating</option>
                      <option value="partner">Partnership</option>
                      <option value="press">Press</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="input-field"
                      required
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full inline-flex items-center justify-center">
                    <Send className="w-4 h-4 mr-2" />
                    Open email draft
                  </button>

                  {submitted && (
                    <p className="text-sm text-gray-500 text-center">
                      Your email app should have opened. If not, write to{' '}
                      <a href="mailto:info@bsusa.org" className="text-primary hover:underline">
                        info@bsusa.org
                      </a>
                      .
                    </p>
                  )}
                </form>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Direct contact</h2>

              <div className="card mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@bsusa.org"
                      className="text-primary hover:underline font-medium"
                    >
                      info@bsusa.org
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      We read this mailbox and reply within a few business days.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Mailing address</h3>
                    <p className="text-gray-700">
                      Better Start USA Foundation, Inc.
                      <br />
                      c/o Georgiy Sayapin, Registered Agent
                      <br />
                      2501 S Ocean Dr, Apt 1104
                      <br />
                      Hollywood, FL 33019
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Program sites are in different places depending on the workshop — email first
                      if you plan to visit in person.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card bg-gray-50">
                <h3 className="font-semibold text-gray-900 mb-2">Organization details</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Legal name:</strong> Better Start USA Foundation, Inc.
                  <br />
                  <strong>State of registration:</strong> Florida.
                  <br />
                  <strong>EIN:</strong> 43-2597508
                  <br />
                  <strong>Federal tax status:</strong> 501(c)(3) determination not yet issued
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
