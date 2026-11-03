import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CheckCircle2, LucideIcon } from 'lucide-react';
import PageHero from './PageHero';
import { programs } from './Header';

export interface ProgramFeature {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface ProgramLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  step: number;
  whoItIsFor: React.ReactNode;
  listTitle: string;
  listIntro?: React.ReactNode;
  /** 'rows' = one item per line; 'cards' = grid of cards (for short items) */
  listStyle?: 'rows' | 'cards';
  items: { label: string; text: string }[];
  /** Extra sections in the main column after the list */
  extra?: React.ReactNode;
  featuresTitle: string;
  featuresIntro?: React.ReactNode;
  features: ProgramFeature[];
  cost: { headline: string; text: string };
  cta: { title: string; text: string };
}

export default function ProgramLayout(props: ProgramLayoutProps) {
  const { pathname } = useRouter();
  const Icon = props.icon;
  return (
    <>
      <Head>
        <title>{`${props.title} — Better Start USA Foundation, Inc.`}</title>
        <meta name="description" content={props.description} />
      </Head>

      <PageHero
        eyebrow={`Program · Step ${props.step} of 4`}
        title={props.title}
        intro={props.description}
        aside={
          <div className="hidden md:flex flex-none w-[168px] h-[168px] rounded-full border-[3px] border-sunrise items-center justify-center">
            <Icon className="w-[76px] h-[76px] text-white" strokeWidth={1.6} aria-hidden="true" />
          </div>
        }
      />

      <nav aria-label="Programs" className="bg-white border-b border-line">
        <div className="container-page flex flex-wrap gap-x-9 overflow-x-auto">
          {programs.map((p, i) => {
            const active = pathname === p.href;
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={active ? 'page' : undefined}
                className={`pt-5 pb-4 text-[15px] font-bold border-b-[3px] whitespace-nowrap ${
                  active ? 'text-navy border-sunrise' : 'text-muted border-transparent hover:text-navy'
                }`}
              >
                {i + 1}. {p.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <section>
        <div className="container-page pt-16 pb-20 flex flex-wrap items-start gap-x-[72px] gap-y-12">
          <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-12">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[32px] font-extrabold tracking-tight text-navy">Who it is for</h2>
              <div className="flex flex-col gap-3.5 text-[17px] leading-[1.7]">{props.whoItIsFor}</div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-[32px] font-extrabold tracking-tight text-navy">{props.listTitle}</h2>
                {props.listIntro && <p className="text-[17px] leading-[1.7]">{props.listIntro}</p>}
              </div>
              {props.listStyle === 'cards' ? (
                <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3.5">
                  {props.items.map((it) => (
                    <li key={it.label} className="flex flex-col gap-2 bg-mist rounded-[14px] p-6">
                      <CheckCircle2 className="w-6 h-6 text-sunrise-dark" aria-hidden="true" />
                      <h3 className="text-lg font-extrabold leading-snug text-navy">{it.label}</h3>
                      <p className="text-[15px] leading-relaxed text-slate">{it.text}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="flex flex-col gap-3.5">
                  {props.items.map((it) => (
                    <li key={it.label} className="flex gap-4 items-start bg-mist rounded-[14px] px-6 py-[22px]">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-sunrise-dark" aria-hidden="true" />
                      <p className="text-base leading-[1.65]">
                        <strong className="text-navy">{it.label}</strong> {it.text}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {props.extra}
          </div>

          <aside className="flex-[1_1_300px] flex flex-col gap-4 lg:sticky lg:top-6">
            <div className="border border-line rounded-2xl p-7 flex flex-col gap-2">
              <h2 className="eyebrow text-sunrise-dark">What it costs</h2>
              <div className="text-4xl font-extrabold tracking-tight text-navy">{props.cost.headline}</div>
              <p className="text-[15px] leading-relaxed text-slate">{props.cost.text}</p>
            </div>
            <div className="bg-navy text-white rounded-2xl p-7 flex flex-col gap-3">
              <h3 className="text-[22px] font-extrabold">{props.cta.title}</h3>
              <p className="text-[15px] leading-relaxed text-onnavy">{props.cta.text}</p>
              <Link href="/contact" className="btn-primary mt-1.5">
                Contact us
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-page pt-20 pb-24 flex flex-col gap-8">
          <div className="flex flex-col gap-2.5">
            <h2 className="text-4xl font-extrabold tracking-tight text-navy">{props.featuresTitle}</h2>
            {props.featuresIntro && <p className="text-[17px] text-slate">{props.featuresIntro}</p>}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {props.features.map((f) => {
              const FIcon = f.icon;
              return (
                <div key={f.title} className="bg-white rounded-2xl p-8 flex flex-col gap-3.5">
                  <FIcon className="w-8 h-8 text-sunrise-dark" aria-hidden="true" />
                  <h3 className="text-[22px] font-extrabold text-navy">{f.title}</h3>
                  <p className="text-base leading-relaxed text-slate">{f.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
