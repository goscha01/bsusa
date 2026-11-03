import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Briefcase, FileCheck, Compass, CheckCircle } from 'lucide-react';

export default function CareerPathways() {
  return (
    <>
      <Head>
        <title>Career Pathways — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="One-on-one guidance that helps participants assess their skills and prior experience, explore realistic career directions, learn how foreign credentials can be evaluated, and connect with training providers and employers."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4 opacity-90">
              <Briefcase className="w-6 h-6" />
              <span className="uppercase tracking-wide text-sm">Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Career Pathways</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl">
              One-on-one guidance that helps participants assess their skills and prior experience,
              explore realistic career directions, learn how foreign credentials can be evaluated,
              and connect with training providers and employers.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who it is for</h2>
            <p className="text-gray-700 mb-6">
              Newcomers who have work experience from their home country — as a teacher, nurse,
              engineer, mechanic, accountant, driver, electrician, cook, anything — and are trying to
              figure out what that experience is worth here, what it would take to use it in the
              United States, and whether a different direction might get them to work sooner. Also
              for people with no formal work history who are looking for a first job and need help
              choosing where to start.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What a session covers</h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Skills and experience assessment:</strong> a careful look at what a person
                  already knows how to do, what certificates and documents they have, and what parts
                  of that are directly usable here.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Realistic career directions:</strong> what jobs match that profile in the
                  local market right now, which ones pay enough to live on, which have the shortest
                  distance between where the person is today and a first paycheck.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Foreign credential evaluation:</strong> how an overseas diploma or
                  professional license can be reviewed by a US evaluation service, which jobs will
                  accept it, and what additional steps (an exam, a US internship, additional
                  coursework) may be needed.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Training provider referrals:</strong> which community colleges, apprenticeship
                  programs, or short courses lead to the chosen direction, which ones are free or low
                  cost, and how to apply.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Employer introductions:</strong> warm introductions to employers in our
                  network who hire from this program and who understand what it takes to onboard
                  someone new to the country.
                </span>
              </li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div className="card">
                <Compass className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">One advisor</h3>
                <p className="text-sm text-gray-600">
                  You work with the same person across sessions, so nothing has to be re-explained.
                </p>
              </div>
              <div className="card">
                <FileCheck className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Written plan</h3>
                <p className="text-sm text-gray-600">
                  Each person leaves with a concrete plan: next step, who to contact, what to prepare,
                  when to check back.
                </p>
              </div>
              <div className="card">
                <Briefcase className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Follow-through</h3>
                <p className="text-sm text-gray-600">
                  Follow-up sessions help work the plan over the following weeks — not a single
                  consultation and done.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What it costs</h2>
            <p className="text-gray-700 mb-8">
              Nothing. The program is free to participants.
            </p>

            <div className="card bg-primary/5 border-primary/20 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Request an advisor</h3>
              <p className="text-gray-700 mb-5">
                Tell us a little about your background and we'll match you with an advisor for a first
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
