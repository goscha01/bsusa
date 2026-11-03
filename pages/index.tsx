import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, ArrowRight } from 'lucide-react';

const programs = [
  {
    title: 'Newcomer Orientation',
    href: '/programs/newcomer-orientation',
    summary:
      'Workshops, mentoring, and peer support groups that help newcomers understand how everyday life works in the United States: workplace culture, local services, community resources, and practical next steps.',
  },
  {
    title: 'Career Pathways',
    href: '/programs/career-pathways',
    summary:
      'One-on-one guidance that helps participants assess their skills and prior experience, explore realistic career directions, learn how foreign credentials can be evaluated, and connect with training providers and employers.',
  },
  {
    title: 'Hands-On Trade Training',
    href: '/programs/hands-on-trade-training',
    summary:
      'Practical workshops and mentoring in accessible trades, including home service work, led by experienced volunteer practitioners with a focus on safety and professional standards.',
  },
  {
    title: 'Small Business Support',
    href: '/programs/small-business-support',
    summary:
      'Guidance for participants who choose self-employment: registering a business, licensing and insurance requirements, setting rates for their own work, and basic bookkeeping.',
  },
];

function SunriseIllustration() {
  return (
    <svg viewBox="0 0 440 300" className="w-full max-w-[440px] h-auto" aria-hidden="true">
      <g stroke="#E07A2E" strokeWidth="9" strokeLinecap="round">
        <line x1="220" y1="70" x2="220" y2="40" />
        <line x1="285" y1="87.4" x2="300" y2="61.4" />
        <line x1="155" y1="87.4" x2="140" y2="61.4" />
        <line x1="332.6" y1="135" x2="358.6" y2="120" />
        <line x1="107.4" y1="135" x2="81.4" y2="120" />
      </g>
      <path d="M110 200 A110 110 0 0 1 330 200 Z" fill="#E07A2E" />
      <rect x="0" y="200" width="440" height="100" fill="#2A4A78" />
      <path d="M214 200 L226 200 L310 300 L130 300 Z" fill="#10233F" />
      <line x1="220" y1="292" x2="220" y2="210" stroke="#F2A266" strokeWidth="4" strokeDasharray="16 12" />
      <line x1="0" y1="200" x2="440" y2="200" stroke="#FFFFFF" strokeWidth="3" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Better Start USA Foundation, Inc. — Adult education for immigrants and refugees</title>
        <meta
          name="description"
          content="BSUSA provides adult education to immigrants and refugees in the U.S.: orientation to American life and work, career guidance, hands-on trade training, and small business support."
        />
      </Head>

      <section className="bg-navy text-white">
        <div className="container-page py-20 md:py-24 flex flex-wrap items-center gap-x-16 gap-y-12">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-6">
            <div className="eyebrow text-sunrise-light">Adult education for newcomers</div>
            <h1 className="text-4xl md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.06]">
              A better start for immigrants and refugees in the United States
            </h1>
            <p className="max-w-[620px] text-lg md:text-[19px] leading-relaxed text-onnavy">
              Better Start USA Foundation, Inc. (BSUSA) provides adult education to newcomers: workshops on
              American life and work, career guidance, hands-on training in trades, job readiness, and
              self-employment skills — so people can become self-sufficient.
            </p>
            <div className="flex flex-wrap gap-3.5 pt-2">
              <Link href="/programs/newcomer-orientation" className="btn-primary text-base px-7 py-4">
                Explore our programs
              </Link>
              <Link href="/ways-to-help#donate" className="btn-outline-light text-base px-7 py-[14px]">
                Donate
              </Link>
            </div>
          </div>
          <div className="flex-[1_1_360px] flex justify-center">
            <SunriseIllustration />
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-24 flex flex-wrap gap-x-16 gap-y-6">
          <h2 className="flex-[1_1_240px] eyebrow text-sunrise-dark text-[15px]">Our mission</h2>
          <p className="flex-[999_1_560px] min-w-0 text-2xl md:text-[30px] font-semibold leading-[1.4] tracking-[-0.01em] text-navy">
            We provide adult education to immigrants and refugees in the U.S.: workshops on American life
            and work, career guidance, hands-on training in trades, job readiness, and self-employment
            skills, so they can become self-sufficient.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-page py-24 flex flex-col gap-12">
          <div className="max-w-[640px] flex flex-col gap-3">
            <h2 className="text-4xl md:text-[42px] font-extrabold tracking-[-0.02em] text-navy">What we offer</h2>
            <p className="text-lg leading-relaxed text-slate">
              Four programs, each built around a different step on the way to self-sufficiency.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
            {programs.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className="group bg-white border border-line rounded-2xl px-7 py-8 flex flex-col gap-4 hover:border-sunrise hover:shadow-md transition"
              >
                <div className="eyebrow text-sunrise-dark">Step {i + 1}</div>
                <h3 className="text-[22px] font-extrabold leading-tight text-navy">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate flex-grow">{p.summary}</p>
                <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-navy">
                  Learn more
                  <ArrowRight className="w-[18px] h-[18px] text-sunrise transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-24">
          <div className="bg-sunrise-tint rounded-3xl px-8 md:px-12 py-14 md:py-16 flex flex-wrap items-center gap-x-16 gap-y-8">
            <div className="flex-[999_1_480px] min-w-0 flex flex-col gap-4">
              <Heart className="w-10 h-10 text-sunrise-dark" aria-hidden="true" />
              <h2 className="text-3xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">
                Help a newcomer get started
              </h2>
              <p className="text-lg leading-relaxed text-slate">
                Every workshop, mentor hour, and small business we help launch is paid for by donations and
                the time of volunteers. There are three ways to help.
              </p>
            </div>
            <div className="flex-[1_1_260px] flex flex-col gap-3">
              <Link href="/ways-to-help#donate" className="btn-primary text-base py-4">
                Donate
              </Link>
              <Link href="/ways-to-help#volunteer" className="btn-navy text-base py-4">
                Volunteer
              </Link>
              <Link href="/ways-to-help#partner" className="btn-outline text-base py-[14px]">
                Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
