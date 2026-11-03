import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articles, formatArticleDate } from '../lib/articles';

interface ArticleLayoutProps {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  date: string;
  program: string;
  children: React.ReactNode;
}

const programLinks: Record<string, string> = {
  'Newcomer Orientation': '/programs/newcomer-orientation',
  'Career Pathways': '/programs/career-pathways',
  'Hands-On Trade Training': '/programs/hands-on-trade-training',
  'Small Business Support': '/programs/small-business-support',
};

export default function ArticleLayout({
  title,
  metaTitle,
  metaDescription,
  date,
  program,
  children,
}: ArticleLayoutProps) {
  const more = articles.filter((a) => a.title !== title).slice(0, 3);

  return (
    <>
      <Head>
        <title>{metaTitle || `${title} — Better Start USA Foundation, Inc.`}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <section className="bg-mist border-b border-line">
        <div className="max-w-[800px] mx-auto px-6 pt-14 pb-16 flex flex-col gap-5">
          <Link href="/articles" className="inline-flex items-center gap-2 text-[15px] font-bold text-navy hover:underline w-fit">
            <ArrowLeft className="w-[18px] h-[18px] text-sunrise" aria-hidden="true" /> All articles
          </Link>
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
            {programLinks[program] ? (
              <Link
                href={programLinks[program]}
                className="bg-sunrise-tint text-sunrise-deep rounded-full px-3.5 py-1.5 text-[13px] font-extrabold hover:underline"
              >
                {program}
              </Link>
            ) : (
              <span className="bg-sunrise-tint text-sunrise-deep rounded-full px-3.5 py-1.5 text-[13px] font-extrabold">{program}</span>
            )}
            <time dateTime={date} className="text-sm font-semibold text-muted">
              {formatArticleDate(date)}
            </time>
          </div>
          <h1 className="text-[34px] md:text-5xl font-extrabold tracking-[-0.025em] leading-[1.1] text-navy">{title}</h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate">{metaDescription}</p>
        </div>
      </section>

      <article className="max-w-[800px] mx-auto px-6 pt-16 pb-[72px]">
        <div className="article-body">{children}</div>

        <div className="mt-12 bg-navy text-white rounded-[20px] p-9 flex flex-col gap-3.5">
          <h2 className="text-[28px] font-extrabold tracking-tight">Have a question about this program?</h2>
          <p className="text-[17px] leading-relaxed text-onnavy">
            Tell us a little about where you are and what you&apos;re trying to figure out.
          </p>
          <div className="flex flex-wrap gap-3 pt-1.5">
            <Link href="/contact" className="btn-primary">Contact us</Link>
            <a href="mailto:info@bsusa.org" className="btn-outline-light">info@bsusa.org</a>
          </div>
        </div>
      </article>

      {more.length > 0 && (
        <section className="bg-mist">
          <div className="container-page pt-[72px] pb-[88px] flex flex-col gap-7">
            <h2 className="text-[30px] font-extrabold tracking-tight text-navy">More articles</h2>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link href={`/articles/${m.slug}`} className="group h-full bg-white rounded-2xl p-7 flex flex-col gap-3 hover:shadow-md transition">
                    <span className="text-[13px] font-extrabold text-sunrise-deep">{m.program}</span>
                    <h3 className="text-xl font-extrabold leading-snug text-navy flex-grow">{m.title}</h3>
                    <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-navy">
                      Read article
                      <ArrowRight className="w-[18px] h-[18px] text-sunrise transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
