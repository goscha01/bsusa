import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { ArrowLeft } from 'lucide-react';

interface ArticleLayoutProps {
  title: string;
  metaTitle?: string;
  metaDescription: string;
  date: string;
  program: string;
  children: React.ReactNode;
}

export default function ArticleLayout({
  title,
  metaTitle,
  metaDescription,
  date,
  program,
  children,
}: ArticleLayoutProps) {
  return (
    <>
      <Head>
        <title>{metaTitle || `${title} — Better Start USA Foundation, Inc.`}</title>
        <meta name="description" content={metaDescription} />
      </Head>

      <article className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="text-primary hover:underline inline-flex items-center text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> All articles
          </Link>

          <div className="text-sm text-gray-500 mb-3">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span className="mx-2">·</span>
            <span>{program}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {title}
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 article-body">
            {children}
          </div>
        </div>
      </article>
    </>
  );
}
