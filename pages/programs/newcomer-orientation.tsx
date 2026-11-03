import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Compass, Users, MapPin, CheckCircle } from 'lucide-react';

export default function NewcomerOrientation() {
  return (
    <>
      <Head>
        <title>Newcomer Orientation — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Workshops, mentoring, and peer support groups that help newcomers understand how everyday life works in the United States: workplace culture, local services, community resources, and practical next steps."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-3 mb-4 opacity-90">
              <Compass className="w-6 h-6" />
              <span className="uppercase tracking-wide text-sm">Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Newcomer Orientation</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl">
              Workshops, mentoring, and peer support groups that help newcomers understand how
              everyday life works in the United States: workplace culture, local services, community
              resources, and practical next steps.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who it is for</h2>
            <p className="text-gray-700 mb-6">
              Adults who arrived in the United States recently — in the last few years — and are
              still figuring out how things work day to day. No prior English level or education is
              required to join. People who arrived under refugee resettlement, asylum, humanitarian
              parole, family reunification, or any other immigration pathway are all welcome.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What we cover</h2>
            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>How American workplaces work:</strong> what to expect in an interview, how
                  pay stubs and taxes work, what rights an employee has, how to raise a problem with a
                  supervisor without losing the job.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Local services:</strong> how to open a bank account, how health insurance and
                  the clinic system work, how to enroll children in school, how to use public
                  transportation and ridesharing.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Community resources:</strong> food assistance, legal aid, free English
                  classes, childcare support, and the places in each neighborhood where newcomers can
                  turn for help.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                <span>
                  <strong>Practical next steps:</strong> picking the first thing to work on this month
                  — a document, a job search, a medical appointment, a conversation with a landlord —
                  and getting it done with help from a mentor.
                </span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">How it runs</h2>
            <p className="text-gray-700 mb-4">
              Orientation is a mix of three formats, chosen based on what a participant needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="card">
                <Users className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Workshops</h3>
                <p className="text-sm text-gray-600">
                  Small group sessions on one topic at a time, with time for questions and the
                  specifics of each person's situation.
                </p>
              </div>
              <div className="card">
                <MapPin className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Peer groups</h3>
                <p className="text-sm text-gray-600">
                  People who arrived earlier share what worked, what didn't, and where to go when
                  something goes wrong.
                </p>
              </div>
              <div className="card">
                <Compass className="w-7 h-7 text-primary mb-2" />
                <h3 className="font-semibold mb-1">Mentoring</h3>
                <p className="text-sm text-gray-600">
                  One-on-one time with a volunteer who has lived here longer and can walk through a
                  specific problem together.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">What it costs</h2>
            <p className="text-gray-700 mb-8">
              Nothing. The program is funded by donations and run with the help of volunteer mentors.
            </p>

            <div className="card bg-primary/5 border-primary/20 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Join a session</h3>
              <p className="text-gray-700 mb-5">
                Send us a note and we'll let you know when the next workshop or group is starting in
                your area.
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
