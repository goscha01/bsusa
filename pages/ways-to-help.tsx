import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heart, Users, HeartHandshake, Mail } from 'lucide-react';
import PageHero from '../components/PageHero';

const roles = [
  {
    title: 'Mentors',
    text: 'Walk alongside a newcomer who is working on something concrete: a job search, a document, a first customer. One hour a week is enough to make a difference.',
  },
  {
    title: 'Trade trainers',
    text: 'Experienced practitioners in cleaning, handyman work, painting, landscaping, light moving, or related trades, willing to run an occasional workshop.',
  },
  {
    title: 'Career advisors',
    text: 'HR, recruiting, or hiring-manager experience, especially in industries that are hiring entry-level in your area.',
  },
  {
    title: 'Small business advisors',
    text: 'Small business owners, accountants, insurance agents, or paralegals willing to help someone through the paperwork of getting legal.',
  },
  {
    title: 'Workshop hosts',
    text: 'Organizations with a room, a kitchen, or a yard that can be borrowed for a half-day workshop.',
  },
];

const partners = [
  {
    title: 'Employers',
    text: "Who are hiring entry-level and are open to a warm introduction from a candidate's advisor instead of a cold application.",
  },
  {
    title: 'Training providers',
    text: 'Community colleges, apprenticeship programs, short-course providers whose offerings fit a career pathway we can refer to.',
  },
  {
    title: 'Community organizations',
    text: 'Resettlement agencies, places of worship, cultural associations, legal aid clinics — anyone already working with the same participants and looking for a program to refer them to.',
  },
];

const donationUses = ['Workshop materials', 'Bus passes to interviews', 'Business filing fees', 'Document translation'];

function SectionIcon({ children, onMist = false }: { children: React.ReactNode; onMist?: boolean }) {
  return (
    <span className={`w-[52px] h-[52px] rounded-full flex items-center justify-center ${onMist ? 'bg-white' : 'bg-sunrise-tint'}`}>
      {children}
    </span>
  );
}

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

      <PageHero
        eyebrow="Get involved"
        title="Ways to Help"
        intro="Three ways to help a newcomer get started: give, show up, or open a door."
      >
        <nav aria-label="On this page" className="flex flex-wrap gap-3 pt-3.5">
          <Link href="#donate" className="btn-primary">Donate</Link>
          <Link href="#volunteer" className="btn-outline-light">Volunteer</Link>
          <Link href="#partner" className="btn-outline-light">Partner</Link>
        </nav>
      </PageHero>

      <section id="donate" className="scroll-mt-4">
        <div className="container-page py-[88px] flex flex-wrap items-start gap-x-[72px] gap-y-10">
          <div className="flex-[999_1_520px] min-w-0 flex flex-col gap-[18px]">
            <div className="flex items-center gap-3.5">
              <SectionIcon>
                <Heart className="w-[26px] h-[26px] text-sunrise-dark" aria-hidden="true" />
              </SectionIcon>
              <h2 className="text-4xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Donate</h2>
            </div>
            <p className="text-lg leading-[1.7]">
              Donations pay for the small, concrete things our programs run on: materials for a trade
              workshop, a bus pass so someone can get to a job interview, filing fees for registering a first
              business, a translation of a document. Every contribution is used for program work.
            </p>
            <ul className="flex flex-wrap gap-2.5 pt-1.5">
              {donationUses.map((u) => (
                <li key={u} className="bg-mist rounded-full px-4 py-2 text-sm font-bold text-navy">
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-[1_1_340px] bg-navy text-white rounded-[20px] p-9 flex flex-col gap-4">
            <h3 className="text-[22px] font-extrabold">How to give right now</h3>
            <p className="leading-relaxed text-onnavy">
              Email{' '}
              <a href="mailto:info@bsusa.org?subject=Donation" className="font-bold text-sunrise-light underline">
                info@bsusa.org
              </a>{' '}
              and we&apos;ll send you the details for one-time or recurring donations by check or bank
              transfer.
            </p>
            <p className="text-sm leading-relaxed text-[#A9B6CA]">
              An online donation form will be published on this page as soon as it is set up.
            </p>
            <a href="mailto:info@bsusa.org?subject=Donation" className="btn-primary text-base py-4 mt-1.5">
              <Mail className="w-[18px] h-[18px]" aria-hidden="true" />
              Email us to donate
            </a>
            <div className="mt-2 rounded-xl border border-[#2A3F5F] bg-[#0B1A32] p-4 text-[13px] leading-relaxed text-[#C9D4E5]">
              <p className="font-semibold text-white mb-1">Tax-deductibility</p>
              <p className="mb-2">
                Better Start USA Foundation, Inc. is organized to qualify as a tax-exempt public
                charity under Section 501(c)(3) of the Internal Revenue Code. The IRS has not yet
                issued a determination letter. Once a favorable determination is issued, qualifying
                contributions are generally deductible as charitable contributions, and the IRS
                typically treats exempt status as effective back to the date of incorporation (if
                the application is timely filed). Donors should consult their own tax advisor for
                guidance on a specific contribution.
              </p>
              <p>
                <strong className="text-white">EIN:</strong> 43-2597508
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="volunteer" className="bg-mist scroll-mt-4">
        <div className="container-page py-[88px] flex flex-col gap-9">
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <div className="max-w-[640px] flex flex-col gap-3.5">
              <div className="flex items-center gap-3.5">
                <SectionIcon onMist>
                  <Users className="w-[26px] h-[26px] text-sunrise-dark" aria-hidden="true" />
                </SectionIcon>
                <h2 className="text-4xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Volunteer</h2>
              </div>
              <p className="text-lg leading-relaxed">
                We are looking for people who can give a few hours a month in one of these roles:
              </p>
            </div>
            <a href="mailto:info@bsusa.org?subject=Volunteer" className="btn-navy text-base py-4">
              Email us to volunteer
            </a>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
            {roles.map((r) => (
              <li key={r.title} className="bg-white rounded-2xl p-7 flex flex-col gap-2.5 border-t-4 border-sunrise">
                <h3 className="text-xl font-extrabold text-navy">{r.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="partner" className="scroll-mt-4">
        <div className="container-page py-[88px] flex flex-col gap-9">
          <div className="flex flex-wrap items-end justify-between gap-x-12 gap-y-5">
            <div className="max-w-[640px] flex flex-col gap-3.5">
              <div className="flex items-center gap-3.5">
                <SectionIcon>
                  <HeartHandshake className="w-[26px] h-[26px] text-sunrise-dark" aria-hidden="true" />
                </SectionIcon>
                <h2 className="text-4xl md:text-[40px] font-extrabold tracking-[-0.02em] text-navy">Partner</h2>
              </div>
              <p className="text-lg leading-relaxed">We work with organizations in three ways:</p>
            </div>
            <a href="mailto:info@bsusa.org?subject=Partnership" className="btn-outline text-base py-[14px]">
              Email us about partnership
            </a>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partners.map((p) => (
              <li key={p.title} className="bg-mist rounded-2xl p-8 flex flex-col gap-2.5">
                <h3 className="text-[21px] font-extrabold text-navy">{p.title}</h3>
                <p className="text-[15px] leading-relaxed text-slate">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
