import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  Compass,
  Briefcase,
  Hammer,
  Store,
  Heart,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  const programs = [
    {
      icon: Compass,
      title: 'Newcomer Orientation',
      href: '/programs/newcomer-orientation',
      summary:
        'Workshops, mentoring, and peer support groups that help newcomers understand how everyday life works in the United States: workplace culture, local services, community resources, and practical next steps.',
    },
    {
      icon: Briefcase,
      title: 'Career Pathways',
      href: '/programs/career-pathways',
      summary:
        'One-on-one guidance that helps participants assess their skills and prior experience, explore realistic career directions, learn how foreign credentials can be evaluated, and connect with training providers and employers.',
    },
    {
      icon: Hammer,
      title: 'Hands-On Trade Training',
      href: '/programs/hands-on-trade-training',
      summary:
        'Practical workshops and mentoring in accessible trades, including home service work, led by experienced volunteer practitioners with a focus on safety and professional standards.',
    },
    {
      icon: Store,
      title: 'Small Business Support',
      href: '/programs/small-business-support',
      summary:
        'Guidance for participants who choose self-employment: registering a business, licensing and insurance requirements, setting rates for their own work, and basic bookkeeping.',
    },
  ];

  return (
    <>
      <Head>
        <title>Better Start USA Foundation, Inc. — Adult education for immigrants and refugees</title>
        <meta
          name="description"
          content="BSUSA provides adult education to immigrants and refugees in the U.S.: orientation to American life and work, career guidance, hands-on trade training, and small business support."
        />
      </Head>

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              A better start for immigrants and refugees in the United States
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-95 max-w-3xl mx-auto">
              Better Start USA Foundation, Inc. (BSUSA) provides adult education to newcomers:
              workshops on American life and work, career guidance, hands-on training in trades, job
              readiness, and self-employment skills — so people can become self-sufficient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs/newcomer-orientation" className="btn-secondary text-lg px-8 py-4">
                Explore our programs
              </Link>
              <Link
                href="/ways-to-help#donate"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We provide adult education to immigrants and refugees in the U.S.: workshops on American
              life and work, career guidance, hands-on training in trades, job readiness, and
              self-employment skills, so they can become self-sufficient.
            </p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What we offer</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Four programs, each built around a different step on the way to self-sufficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="card hover:shadow-xl transition-shadow block"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <p.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-gray-600 mb-3">{p.summary}</p>
                      <span className="text-primary font-medium inline-flex items-center">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Help a newcomer get started
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Every workshop, mentor hour, and small business we help launch is paid for by donations
              and the time of volunteers. There are three ways to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/ways-to-help#donate" className="btn-primary">
                Donate
              </Link>
              <Link href="/ways-to-help#volunteer" className="btn-outline">
                Volunteer
              </Link>
              <Link href="/ways-to-help#partner" className="btn-outline">
                Partner
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
