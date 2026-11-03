import Head from 'next/head';
import Link from 'next/link';
import { Target, Users, ShieldCheck, ArrowRight, UserCircle, Scale } from 'lucide-react';
import PageHero from '../components/PageHero';

const steps = [
  { title: 'Newcomer Orientation', text: 'Understanding how everyday life works here.', href: '/programs/newcomer-orientation' },
  { title: 'Career Pathways', text: 'Assessing skills and choosing a realistic direction.', href: '/programs/career-pathways' },
  { title: 'Hands-On Trade Training', text: 'Practical workshops in accessible trades.', href: '/programs/hands-on-trade-training' },
  { title: 'Small Business Support', text: 'Getting a one-person business up and running legally.', href: '/programs/small-business-support' },
];

const values = [
  {
    icon: Target,
    title: 'Practical',
    text: 'Everything we teach is something a person can use in the next week — not theory, not a certificate for its own sake.',
  },
  {
    icon: Users,
    title: 'Peer-supported',
    text: 'People who arrived two years ago mentor people who arrived last month. That is how the knowledge actually transfers.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe and legal',
    text: 'Trade training is taught by experienced practitioners with a focus on safety. Business support covers licensing and insurance from the start.',
  },
];

const officers: { name: string; role: string; photo?: string }[] = [
  { name: 'Georgiy Sayapin', role: 'President', photo: '/leadership/georgiy-sayapin.jpg' },
  { name: 'Ruslan Zaichkou', role: 'Secretary' },
  { name: 'Tatsiana Astashonak', role: 'Treasurer' },
];

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

      <PageHero
        eyebrow="About us"
        title="About Better Start USA Foundation, Inc."
        intro="A nonprofit helping immigrants and refugees get a foothold in American life and work."
      />

      <section>
        <div className="container-page py-20 flex flex-wrap items-start gap-x-[72px] gap-y-12">
          <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-12">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[32px] font-extrabold tracking-tight text-navy">Our mission</h2>
              <p className="border-t-[3px] border-sunrise pt-[18px] text-[22px] font-semibold leading-normal text-navy">
                We provide adult education to immigrants and refugees in the U.S.: workshops on American life
                and work, career guidance, hands-on training in trades, job readiness and self-employment
                skills, so they can become self-sufficient.
              </p>
            </div>

            <div className="flex flex-col gap-3.5 text-[17px] leading-[1.7]">
              <h2 className="text-[32px] font-extrabold tracking-tight text-navy">Who we serve</h2>
              <p>
                We work with adults who have recently arrived in the United States as immigrants or refugees
                and are trying to build a stable life here. Many have skills and work experience from their
                home country but face unfamiliar systems: how American workplaces operate, how licensing and
                credentialing works, where to go for everyday services, how to find a first job, how to start
                a small business of their own.
              </p>
              <p>
                Our programs are <strong className="text-navy">free to participants</strong> and open
                regardless of language background, immigration pathway, or prior schooling.
              </p>
            </div>

            <div className="flex flex-col gap-[18px]">
              <h2 className="text-[32px] font-extrabold tracking-tight text-navy">What we do</h2>
              <p className="text-[17px] leading-[1.7]">
                We run four programs that cover the main stages a newcomer passes through on the way to
                self-sufficiency:
              </p>
              <ol className="border-t border-line">
                {steps.map((s, i) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="group flex items-center gap-5 py-5 px-1 border-b border-line hover:bg-mist"
                    >
                      <span className="w-11 h-11 flex-shrink-0 rounded-full bg-sunrise-tint text-sunrise-dark text-[17px] font-extrabold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="flex-grow flex flex-col gap-0.5">
                        <span className="text-lg font-extrabold text-navy">{s.title}</span>
                        <span className="text-[15px] text-slate">{s.text}</span>
                      </span>
                      <ArrowRight className="w-5 h-5 text-sunrise transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="flex-[1_1_300px] bg-mist rounded-2xl p-8 flex flex-col gap-[18px]">
            <h2 className="eyebrow text-sunrise-dark">Registration</h2>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">Legal name</div>
              <div className="font-bold text-navy">Better Start USA Foundation, Inc.</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">State of registration</div>
              <div className="font-bold text-navy">Florida</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">EIN</div>
              <div className="font-bold text-navy">43-2597508</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">Federal tax status</div>
              <div className="text-sm leading-relaxed text-navy">
                Organized to qualify as a public charity under Section 501(c)(3) of the Internal
                Revenue Code. IRS determination letter not yet issued.
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">Florida solicitation registration</div>
              <div className="font-bold text-navy">#CH[pending FDACS registration]</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[13px] font-bold text-muted">Contact</div>
              <a href="mailto:info@bsusa.org" className="font-bold text-navy hover:underline">
                info@bsusa.org
              </a>
            </div>
            <p className="border-t border-[#D5DCE6] pt-4 text-sm leading-relaxed text-slate">
              Annual reports and additional registration documents are available on request from
              info@bsusa.org and will be posted here as they are issued.
            </p>
          </aside>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-page py-20 flex flex-col gap-9">
          <h2 className="text-4xl font-extrabold tracking-tight text-navy">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white rounded-2xl p-8 flex flex-col gap-3.5">
                  <Icon className="w-8 h-8 text-sunrise-dark" aria-hidden="true" />
                  <h3 className="text-[22px] font-extrabold text-navy">{v.title}</h3>
                  <p className="leading-relaxed text-slate">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-20 flex flex-col gap-9">
          <div className="flex flex-col gap-3.5">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">Leadership</h2>
            <p className="max-w-[720px] text-[17px] leading-[1.7] text-slate">
              Our Board of Directors is responsible for the governance, finances, and strategic
              direction of the Corporation under its Bylaws. Officers are elected annually by the
              Board.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officers.map((o) => (
              <div key={o.name} className="bg-mist rounded-2xl p-8 flex flex-col gap-4">
                {o.photo ? (
                  <img
                    src={o.photo}
                    alt={`${o.name}, ${o.role}`}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-sunrise-tint"
                  />
                ) : (
                  <div className="w-24 h-24 bg-sunrise-tint rounded-full flex items-center justify-center">
                    <UserCircle className="w-12 h-12 text-sunrise-dark" aria-hidden="true" />
                  </div>
                )}
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[20px] font-extrabold text-navy">{o.name}</h3>
                  <p className="text-sm text-slate">{o.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="non-discrimination" className="bg-mist scroll-mt-24">
        <div className="container-page py-20 flex flex-wrap items-start gap-x-12 gap-y-8">
          <div className="flex-[1_1_280px] flex flex-col gap-3">
            <div className="w-14 h-14 bg-sunrise-tint rounded-full flex items-center justify-center">
              <Scale className="w-7 h-7 text-sunrise-dark" aria-hidden="true" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">Non-discrimination</h2>
          </div>
          <div className="flex-[2_1_480px] flex flex-col gap-4 text-[17px] leading-[1.7] text-slate">
            <p>
              Better Start USA Foundation, Inc. does not discriminate on the basis of race, color,
              religion, national origin, ancestry, ethnicity, age, sex, gender identity or
              expression, sexual orientation, marital status, disability, medical condition,
              veteran status, or any other characteristic protected by law, in its programs, in
              employment, in volunteer engagement, or in outreach.
            </p>
            <p>
              We endeavor to make our programs, materials, and services accessible to the people we
              serve, and to make reasonable accommodation for people with disabilities. To request
              an accommodation or report a concern, email{' '}
              <a href="mailto:info@bsusa.org" className="text-sunrise-dark font-semibold hover:underline">
                info@bsusa.org
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container-page py-20 flex flex-wrap items-center justify-between gap-x-12 gap-y-6">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">Get involved</h2>
            <p className="text-lg text-slate">Donate, volunteer, or partner with us to help a newcomer get started.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/ways-to-help#donate" className="btn-primary text-base py-4 px-7">
              Donate
            </Link>
            <Link href="/contact" className="btn-outline text-base py-[14px] px-7">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
