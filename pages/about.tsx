import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Target, Users, HeartHandshake, ShieldCheck, UserCircle, Scale } from 'lucide-react';

export default function About() {
  return (
    <>
      <Head>
        <title>About — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Better Start USA Foundation, Inc. is a Florida-registered nonprofit providing adult education to immigrants and refugees in the United States."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Better Start USA Foundation, Inc.
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-95">
              A nonprofit helping immigrants and refugees get a foothold in American life and work.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card mb-10 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We provide adult education to immigrants and refugees in the U.S.: workshops on
                American life and work, career guidance, hands-on training in trades, job readiness
                and self-employment skills, so they can become self-sufficient.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Who we serve</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We work with adults who have recently arrived in the United States as immigrants or
                refugees and are trying to build a stable life here. Many have skills and work
                experience from their home country but face unfamiliar systems: how American
                workplaces operate, how licensing and credentialing works, where to go for everyday
                services, how to find a first job, how to start a small business of their own.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our programs are free to participants and open regardless of language background,
                immigration pathway, or prior schooling.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We run four programs that cover the main stages a newcomer passes through on the way
                to self-sufficiency:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <Link href="/programs/newcomer-orientation" className="text-primary hover:underline font-medium">
                    Newcomer Orientation
                  </Link>{' '}
                  — understanding how everyday life works here.
                </li>
                <li>
                  <Link href="/programs/career-pathways" className="text-primary hover:underline font-medium">
                    Career Pathways
                  </Link>{' '}
                  — assessing skills and choosing a realistic direction.
                </li>
                <li>
                  <Link href="/programs/hands-on-trade-training" className="text-primary hover:underline font-medium">
                    Hands-On Trade Training
                  </Link>{' '}
                  — practical workshops in accessible trades.
                </li>
                <li>
                  <Link href="/programs/small-business-support" className="text-primary hover:underline font-medium">
                    Small Business Support
                  </Link>{' '}
                  — getting a one-person business up and running legally.
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="card text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HeartHandshake className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Practical</h3>
                <p className="text-gray-600 text-sm">
                  Everything we teach is something a person can use in the next week — not theory, not
                  a certificate for its own sake.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Peer-supported</h3>
                <p className="text-gray-600 text-sm">
                  People who arrived two years ago mentor people who arrived last month. That is how
                  the knowledge actually transfers.
                </p>
              </div>
              <div className="card text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Safe and legal</h3>
                <p className="text-gray-600 text-sm">
                  Trade training is taught by experienced practitioners with a focus on safety.
                  Business support covers licensing and insurance from the start.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our Board of Directors is responsible for the governance, finances, and strategic
                direction of the Corporation under its Bylaws. Officers are elected annually by the
                Board.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <UserCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Georgiy Sayapin</h3>
                  <p className="text-sm text-gray-600">President</p>
                </div>
                <div className="card">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <UserCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Ruslan Zaichkou</h3>
                  <p className="text-sm text-gray-600">Secretary</p>
                </div>
                <div className="card">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <UserCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Tatsiana Astashonak</h3>
                  <p className="text-sm text-gray-600">Treasurer</p>
                </div>
              </div>
            </div>

            <div id="non-discrimination" className="card mb-10 scroll-mt-24">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-5">
                <Scale className="w-7 h-7 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Non-discrimination</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Better Start USA Foundation, Inc. does not discriminate on the basis of race, color,
                religion, national origin, ancestry, ethnicity, age, sex, gender identity or
                expression, sexual orientation, marital status, disability, medical condition,
                veteran status, or any other characteristic protected by law, in its programs, in
                employment, in volunteer engagement, or in outreach.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We endeavor to make our programs, materials, and services accessible to the people
                we serve, and to make reasonable accommodation for people with disabilities. To
                request an accommodation or report a concern, email{' '}
                <a href="mailto:info@bsusa.org" className="text-primary hover:underline">
                  info@bsusa.org
                </a>
                .
              </p>
            </div>

            <div className="card mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Registration</h2>
              <p className="text-gray-700">
                <strong>Legal name:</strong> Better Start USA Foundation, Inc.
                <br />
                <strong>State of registration:</strong> Florida.
                <br />
                <strong>EIN:</strong> 43-2597508
                <br />
                <strong>Federal tax status:</strong> organized to qualify as a public charity under Section 501(c)(3) of the Internal Revenue Code. IRS determination letter not yet issued.
                <br />
                <strong>Florida charitable solicitation registration:</strong> #CH[pending FDACS registration]
                <br />
                <strong>Contact:</strong>{' '}
                <a href="mailto:info@bsusa.org" className="text-primary hover:underline">
                  info@bsusa.org
                </a>
              </p>
              <p className="text-gray-600 text-sm mt-3">
                Annual reports and additional registration documents are available on request from
                info@bsusa.org and will be posted here as they are issued.
              </p>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get involved</h2>
              <p className="text-lg text-gray-600 mb-6">
                Donate, volunteer, or partner with us to help a newcomer get started.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ways-to-help#donate" className="btn-primary">
                  Donate
                </Link>
                <Link href="/contact" className="btn-outline">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
