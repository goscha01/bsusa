import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Hammer, HardHat, ShieldCheck, CheckCircle } from 'lucide-react';

export default function HandsOnTradeTraining() {
  return (
    <>
      <Head>
        <title>Hands-On Trade Training — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Practical workshops and mentoring in accessible trades, including home service work, led by experienced volunteer practitioners with a focus on safety and professional standards."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4 opacity-90">
              <Hammer className="w-6 h-6" />
              <span className="uppercase tracking-wide text-sm">Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hands-On Trade Training</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl">
              Practical workshops and mentoring in accessible trades, including home service work,
              led by experienced volunteer practitioners with a focus on safety and professional
              standards.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who it is for</h2>
            <p className="text-gray-700 mb-6">
              Newcomers who want to work with their hands and would benefit from learning a trade the
              way it is actually practiced here: with real tools, real materials, and the safety and
              quality standards that American customers and inspectors expect. No prior experience in
              the trade is required. Prior experience from the home country is welcome — we help
              translate it into how the job is done in the US market.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">Trades we cover</h2>
            <p className="text-gray-700 mb-4">
              We focus on accessible trades — ones a person can start earning in without years of
              upfront schooling or an expensive certification, and ones that have steady local
              demand:
            </p>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Residential and commercial cleaning</strong> — equipment, chemicals and
                  safety, scheduling, pricing, customer handoff.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Handyman and small repair work</strong> — common fixes around a home,
                  tools, measuring, when a job needs a licensed trade instead.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Painting, drywall, and basic finish work</strong> — surface prep, materials,
                  getting a clean result that holds up.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Landscaping and seasonal yard work</strong> — equipment basics, safe use of
                  gas and electric tools, how routes and recurring clients work.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Light moving and delivery work</strong> — lifting technique, protecting
                  property, basics of running a one-person moving service.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">How a workshop runs</h2>
            <p className="text-gray-700 mb-4">
              Each workshop is a small group taught by someone who has done the work professionally
              for years. The format is mostly hands-on: tools in your hands, a real job in front of
              you, and the trainer stopping to show the right technique the moment it comes up.
            </p>
            <p className="text-gray-700 mb-6">
              Workshops are held at partner sites — a volunteer's shop, a church hall, or an office we
              borrow for the day — depending on what the day requires.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="card">
                <HardHat className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Experienced trainers</h3>
                <p className="text-sm text-gray-600">
                  Volunteer practitioners who have earned a living in the trade for years and want to
                  pass what they know on to someone starting out.
                </p>
              </div>
              <div className="card">
                <ShieldCheck className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Safety first</h3>
                <p className="text-sm text-gray-600">
                  Personal protective equipment, correct tool use, and ladder, electrical and chemical
                  safety are built into every workshop.
                </p>
              </div>
              <div className="card">
                <Hammer className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Professional standards</h3>
                <p className="text-sm text-gray-600">
                  How to show up, how to leave a job site, how to talk to a customer: the parts that
                  decide whether someone calls you back.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What it costs</h2>
            <p className="text-gray-700 mb-8">
              Nothing. Materials and tools are provided for the workshop.
            </p>

            <div className="card bg-primary/5 border-primary/20 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sign up for a workshop</h3>
              <p className="text-gray-700 mb-5">
                Let us know which trade interests you and we'll put you on the list for the next
                session.
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
