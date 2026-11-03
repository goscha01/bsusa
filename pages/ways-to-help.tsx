import React from 'react';
import Head from 'next/head';
import { Heart, Users, HeartHandshake, Mail } from 'lucide-react';

export default function WaysToHelp() {
  return (
    <>
      <Head>
        <title>Ways to Help — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Three ways to help immigrants and refugees get started in the United States: donate to Better Start USA Foundation, Inc., volunteer your time, or partner with us as an employer or organization."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Ways to Help</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
              Three ways to help a newcomer get started: give, show up, or open a door.
            </p>
          </div>
        </section>

        <section id="donate" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Donate</h2>
              <p className="text-gray-700 mb-4">
                Donations pay for the small, concrete things our programs run on: materials for a
                trade workshop, a bus pass so someone can get to a job interview, filing fees for
                registering a first business, a translation of a document. Every contribution is
                used for program work.
              </p>
              <p className="text-gray-700 mb-6">
                <strong>How to give right now:</strong> email{' '}
                <a href="mailto:info@bsusa.org?subject=Donation" className="text-primary hover:underline">
                  info@bsusa.org
                </a>{' '}
                and we'll send you the details for one-time or recurring donations by check or bank
                transfer. An online donation form will be published on this page as soon as it is
                set up.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6 text-sm text-gray-700">
                <p className="mb-2">
                  <strong>Tax-deductibility:</strong> Better Start USA Foundation, Inc. is organized
                  to qualify as a tax-exempt public charity under Section 501(c)(3) of the Internal
                  Revenue Code. The IRS has not yet issued a determination letter. Once a favorable
                  determination is issued, qualifying contributions are generally deductible as
                  charitable contributions, and the IRS typically treats exempt status as effective
                  back to the date of incorporation (if the application is timely filed). Donors
                  should consult their own tax advisor for guidance on a specific contribution.
                </p>
                <p>
                  <strong>EIN:</strong> 43-2597508
                </p>
              </div>
              <a href="mailto:info@bsusa.org?subject=Donation" className="btn-primary inline-flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email us to donate
              </a>
            </div>
          </div>
        </section>

        <section id="volunteer" className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Volunteer</h2>
              <p className="text-gray-700 mb-4">
                We are looking for people who can give a few hours a month in one of these roles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>Mentors</strong> — walk alongside a newcomer who is working on something
                  concrete: a job search, a document, a first customer. One hour a week is enough to
                  make a difference.
                </li>
                <li>
                  <strong>Trade trainers</strong> — experienced practitioners in cleaning,
                  handyman work, painting, landscaping, light moving, or related trades, willing to
                  run an occasional workshop.
                </li>
                <li>
                  <strong>Career advisors</strong> — HR, recruiting, or hiring-manager experience,
                  especially in industries that are hiring entry-level in your area.
                </li>
                <li>
                  <strong>Small business advisors</strong> — small business owners, accountants,
                  insurance agents, or paralegals willing to help someone through the paperwork of
                  getting legal.
                </li>
                <li>
                  <strong>Workshop hosts</strong> — organizations with a room, a kitchen, or a yard
                  that can be borrowed for a half-day workshop.
                </li>
              </ul>
              <a href="mailto:info@bsusa.org?subject=Volunteer" className="btn-primary inline-flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email us to volunteer
              </a>
            </div>
          </div>
        </section>

        <section id="partner" className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="card">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                <HeartHandshake className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Partner</h2>
              <p className="text-gray-700 mb-4">
                We work with organizations in three ways:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                <li>
                  <strong>Employers</strong> who are hiring entry-level and are open to a warm
                  introduction from a candidate's advisor instead of a cold application.
                </li>
                <li>
                  <strong>Training providers</strong> — community colleges, apprenticeship programs,
                  short-course providers whose offerings fit a career pathway we can refer to.
                </li>
                <li>
                  <strong>Community organizations</strong> — resettlement agencies, places of
                  worship, cultural associations, legal aid clinics — anyone already working with the
                  same participants and looking for a program to refer them to.
                </li>
              </ul>
              <a href="mailto:info@bsusa.org?subject=Partnership" className="btn-primary inline-flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email us about partnership
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
