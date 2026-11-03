import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { articles, formatArticleDate } from '../../lib/articles';
import PageHero from '../../components/PageHero';

export default function ArticlesIndex() {
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <Head>
        <title>Articles — Better Start USA Foundation, Inc.</title>
        <meta
          name="description"
          content="Articles from Better Start USA Foundation, Inc. about our programs for immigrants and refugees in the United States: newcomer orientation, career pathways, trade training, and small business support."
        />
      </Head>

      <PageHero
        eyebrow="Articles"
        title="Articles"
        intro="Short, specific pieces about our programs and the questions newcomers ask us most often."
      />

      <section>
        <ul className="container-page pt-[72px] pb-[104px] grid grid-cols-[repeat(auto-fit,minmax(min(420px,100%),1fr))] gap-6">
          {sorted.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/articles/${a.slug}`}
                className="group h-full border border-line rounded-[20px] p-9 flex flex-col gap-4 hover:border-sunrise hover:shadow-md transition"
              >
                <div className="flex flex-wrap items-center gap-x-3.5 gap-y-2.5">
                  <span className="bg-sunrise-tint text-sunrise-deep rounded-full px-3.5 py-1.5 text-[13px] font-extrabold">
                    {a.program}
                  </span>
                  <time dateTime={a.date} className="text-sm font-semibold text-muted">
                    {formatArticleDate(a.date)}
                  </time>
                </div>
                <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.01em] text-navy">{a.title}</h2>
                <p className="leading-[1.65] text-slate flex-grow">{a.description}</p>
                <span className="inline-flex items-center gap-2 text-[15px] font-extrabold text-navy">
                  Read article
                  <ArrowRight className="w-[18px] h-[18px] text-sunrise transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
