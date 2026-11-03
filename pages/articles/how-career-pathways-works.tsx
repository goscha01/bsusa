import React from 'react';
import Link from 'next/link';
import ArticleLayout from '../../components/ArticleLayout';

export default function HowCareerPathwaysWorks() {
  return (
    <ArticleLayout
      title="How Career Pathways works, and who it is for"
      metaTitle="How Career Pathways works — BSUSA"
      metaDescription="How a one-on-one career advising session turns prior work experience and overseas credentials into a plan for a first job in the United States."
      date="2026-11-02"
      program="Career Pathways"
    >
      <p>
        One of the hardest conversations we have with newcomers goes like this: "I was an engineer
        in my country. Can I work as an engineer here?" The honest answer is usually "maybe, and it
        will take some time — and in the meantime, here are three jobs you could start next month
        that use what you already know." Career Pathways is the program where we have that
        conversation.
      </p>

      <h2>Who the program is for</h2>

      <p>
        It is for two kinds of people. The first is someone with real work experience from their
        home country — as a teacher, nurse, engineer, mechanic, accountant, driver, electrician,
        cook, bookkeeper, anything at all — who is trying to understand what that experience is
        worth in the US labor market. The second is someone with no formal work history yet, who is
        looking for a first job and would benefit from help choosing where to start.
      </p>

      <p>
        You don't need a resume to come in. You don't need to speak English well. You don't need to
        have decided on a direction. If anything, the earlier you come, the more useful the first
        session is.
      </p>

      <h2>What happens in a first session</h2>

      <p>
        A first session is about 60 to 90 minutes with one advisor. The advisor is a volunteer with
        background in HR, recruiting, or a specific industry — someone who has looked at a lot of
        resumes and knows what employers in your area are actually hiring. We cover four things, in
        this order:
      </p>

      <ol>
        <li>
          <strong>What you already know how to do.</strong> Not what your diploma says — what you
          have actually done. The project you managed. The equipment you operated. The patients you
          cared for. The books you kept. We write it down, in English, in the vocabulary an American
          employer uses.
        </li>
        <li>
          <strong>What is realistic for the local market right now.</strong> Which jobs in your area
          match that profile today, which ones pay enough to live on, which have the shortest
          distance between where you are and a first paycheck. We are honest about tradeoffs — a job
          that matches your training exactly may be months away; a job that uses most of it may be
          available next week.
        </li>
        <li>
          <strong>What your credentials are worth here.</strong> If you have a diploma or a
          professional license from your home country, we explain how a US credential evaluation
          service works, which jobs will accept the evaluation, and what else may be required (an
          exam, an internship, a short bridge course).
        </li>
        <li>
          <strong>A written plan.</strong> You leave with a one-page plan: the next step, the person
          to contact, what to prepare, and when we check back in.
        </li>
      </ol>

      <h2>What happens after</h2>

      <p>
        One session is almost never enough. Most people come back three or four times over a few
        weeks, as the plan runs into real life — an interview that didn't go well, a document that
        turned out to be harder to get than expected, a job offer that needs a decision. Follow-up
        sessions are shorter and more focused. The same advisor stays with you, so nothing has to be
        re-explained.
      </p>

      <p>
        We also make warm introductions where we can. We work with a small network of employers who
        hire from this program and who understand what it takes to onboard someone new to the
        country — that is a different conversation than cold-applying through a jobs board.
      </p>

      <h2>What it costs</h2>

      <p>
        Nothing. Advising is free. Credential evaluations, when needed, do have fees that are paid
        to the evaluation service — we'll tell you exactly what to expect before you commit to one.
      </p>

      <h2>How to get an advisor</h2>

      <p>
        Email{' '}
        <a href="mailto:info@bsusa.org?subject=Career%20Pathways" className="text-primary hover:underline">
          info@bsusa.org
        </a>{' '}
        or use{' '}
        <Link href="/contact" className="text-primary hover:underline">
          our contact page
        </Link>{' '}
        and tell us a little about your background: what kind of work you have done, where you are
        in the United States now, and roughly what you are hoping to work toward. We'll match you
        with an advisor whose experience fits and schedule a first session.
      </p>

      <p>
        You can also read more about the program on the{' '}
        <Link href="/programs/career-pathways" className="text-primary hover:underline">
          Career Pathways page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
