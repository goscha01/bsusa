import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Store, FileText, Calculator, CheckCircle } from 'lucide-react';

export default function SmallBusinessSupport() {
  return (
    <>
      <Head>
        <title>Small Business Support — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Guidance for participants who choose self-employment: registering a business, licensing and insurance requirements, setting rates for their own work, and basic bookkeeping."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4 opacity-90">
              <Store className="w-6 h-6" />
              <span className="uppercase tracking-wide text-sm">Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Small Business Support</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl">
              Guidance for participants who choose self-employment: registering a business, licensing
              and insurance requirements, setting rates for their own work, and basic bookkeeping.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who it is for</h2>
            <p className="text-gray-700 mb-6">
              Participants who have decided — or are seriously considering — that their best path to
              a stable income is to work for themselves. Often this is someone who has finished a
              trade workshop and wants to take on their first paying jobs on their own, or someone
              who was running their own business in their home country and now has to figure out how
              it works here. People at any stage are welcome: from "I think I want to try this" to
              "I have my first customer tomorrow and don't know what to charge."
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What we help with</h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Registering a business:</strong> what kind of entity makes sense for a
                  one-person operation (sole proprietor, LLC), how to register it with the state, how
                  to get an EIN, and what the fees are.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Licensing and insurance:</strong> which trades require a license in this
                  state, how to get one, what insurance is required (and what liability coverage is a
                  good idea even when it isn't required), and how to find an affordable policy.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Setting rates:</strong> working out an hourly rate or a job price that
                  actually covers materials, taxes, gas, insurance and a living wage — rather than the
                  cash-in-hand number that leaves nothing at the end of the month.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Basic bookkeeping:</strong> keeping track of what came in, what went out,
                  what belongs to the business and what belongs to the household — enough to file
                  taxes correctly at the end of the year and to know whether the business is
                  actually making money.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Finding customers:</strong> how to get the first few jobs — through local
                  listings, word of mouth, and simple online tools — without spending money on
                  advertising that doesn't pay back.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">How we work with you</h2>
            <p className="text-gray-700 mb-4">
              A first session is a careful look at where you are now and what the next three steps
              are. Follow-ups work through those steps with you, together. We don't take a share of
              the business and we don't sell anything — the people helping are volunteer small
              business owners and accountants who want to see new businesses succeed.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="card">
                <FileText className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Paperwork, done once</h3>
                <p className="text-sm text-gray-600">
                  Registration, licensing and insurance set up correctly from the start — not fixed
                  up after a problem.
                </p>
              </div>
              <div className="card">
                <Calculator className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Numbers that work</h3>
                <p className="text-sm text-gray-600">
                  Rates and bookkeeping that leave the business owner with a real income at the end
                  of the month, not an exhausted guess.
                </p>
              </div>
              <div className="card">
                <Store className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Your business, yours</h3>
                <p className="text-sm text-gray-600">
                  We help you set it up. You own it. No fees, no equity, no hidden strings.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What it costs</h2>
            <p className="text-gray-700 mb-8">
              Nothing from us. State registration fees and insurance premiums are paid by the
              business owner — we'll show you exactly what to expect before you commit.
            </p>

            <div className="card bg-primary/5 border-primary/20 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request a first session</h3>
              <p className="text-gray-700 mb-5">
                Tell us what you're thinking about starting and we'll set up a first meeting with a
                business advisor.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
