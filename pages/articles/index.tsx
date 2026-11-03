import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowRight } from 'lucide-react';
import { articles } from '../../lib/articles';

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

      <div className="min-h-screen">
        <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
            <p className="text-lg md:text-xl opacity-95 max-w-3xl">
              Short, specific pieces about our programs and the questions newcomers ask us most often.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ul className="space-y-6">
              {sorted.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/articles/${a.slug}`}
                    className="block card hover:shadow-xl transition-shadow"
                  >
                    <div className="text-sm text-gray-500 mb-2">
                      <time dateTime={a.date}>
                        {new Date(a.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="mx-2">·</span>
                      <span>{a.program}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{a.title}</h2>
                    <p className="text-gray-600 mb-3">{a.description}</p>
                    <span className="text-primary font-medium inline-flex items-center">
                      Read article <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
