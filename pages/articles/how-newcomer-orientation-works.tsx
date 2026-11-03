import React from 'react';
import Link from 'next/link';
import ArticleLayout from '../../components/ArticleLayout';

export default function HowNewcomerOrientationWorks() {
  return (
    <ArticleLayout
      title="How Newcomer Orientation works, and who it is for"
      metaTitle="How Newcomer Orientation works — BSUSA"
      metaDescription="A walk through what a newcomer orientation session actually covers — workplace culture, local services, and the first thing most people need to work on this month."
      date="2026-11-02"
      program="Newcomer Orientation"
    >
      <p>
        If you have arrived in the United States in the last few years, you have probably noticed
        that the hardest part isn't the language or the paperwork. It's the small, invisible rules
        that everyone else seems to know. How do you talk to a landlord when something breaks? What
        is a "co-pay" and why does the doctor need one? Is it rude to ask your boss for a raise, or
        is it rude not to? Why does every form want a Social Security number, and what do you do
        when you don't have one yet?
      </p>

      <p>
        Newcomer Orientation is where we work on those questions together. This article explains
        what the program is, who it is for, and what a first session actually looks like.
      </p>

      <h2>Who the program is for</h2>

      <p>
        The program is for adults who have arrived in the United States recently as immigrants or
        refugees. We don't ask what pathway brought you here — resettlement, asylum, humanitarian
        parole, family reunification, a work visa, anything else — and no English level is required
        to join. We work with people who speak only their first language and we work with people
        whose English is already strong but who still feel lost when a form arrives in the mail.
      </p>

      <p>
        You don't need to come in with a specific question. "I just got here and I don't know where
        to start" is one of the most common reasons people reach out, and it is a good one.
      </p>

      <h2>What a session covers</h2>

      <p>
        Each session is built around one or two specific topics. We cover four areas in rotation,
        and most people attend a mix:
      </p>

      <ul>
        <li>
          <strong>How American workplaces work.</strong> What an interview looks like here, how pay
          stubs and taxes are organized, what rights an employee has, how to raise a problem with a
          supervisor without putting the job at risk. Also, the parts that don't translate well from
          other countries — like why most jobs don't give you a stamped work booklet.
        </li>
        <li>
          <strong>Local services.</strong> How to open a bank account without a long credit history.
          How health insurance and the clinic system work. How to enroll a child in school and what
          "IEP" and "ESL" mean. How to use public transportation and ridesharing. Where to call when
          something goes wrong at home and the landlord won't answer.
        </li>
        <li>
          <strong>Community resources.</strong> Food assistance, legal aid, free English classes,
          childcare support, and the local organizations that quietly do a lot of the work of
          getting newcomers on their feet. We help you figure out which ones are relevant to your
          situation — not all of them are, and some are only open to specific groups.
        </li>
        <li>
          <strong>Practical next steps.</strong> By the end of the session, there is one thing you
          are going to do this week, and one person — a mentor or someone from the group — you can
          reach out to if you get stuck.
        </li>
      </ul>

      <h2>How we actually run it</h2>

      <p>
        Orientation uses three formats, depending on what works best for you:
      </p>

      <p>
        <strong>Workshops</strong> are small group sessions, usually 60 to 90 minutes, on one topic
        at a time. Someone who knows the topic well — often a volunteer who used to work in that
        system — walks through it, and then there is time for questions and for the specifics of
        each person's situation.
      </p>

      <p>
        <strong>Peer support groups</strong> are smaller and less structured. People who arrived two
        years ago sit with people who arrived last month. The conversation is in whatever language
        the group has in common, and much of what gets shared is the kind of practical advice that
        isn't written down anywhere — which clinic takes the state insurance, which supermarket has
        the halal section, which bus to take to the courthouse.
      </p>

      <p>
        <strong>One-on-one mentoring</strong> is for when you have a specific problem that doesn't
        fit a group — a document you can't fill out, a conversation you need to have with a
        supervisor, a letter from a landlord you don't understand. A mentor will sit with you and
        work through it, in person or on the phone, whichever is easier.
      </p>

      <h2>What it doesn't cost</h2>

      <p>
        Nothing. There is no fee for the workshops, the groups, or the mentoring. The program is
        funded by donations and run with the help of volunteer mentors.
      </p>

      <h2>How to join</h2>

      <p>
        Send a note to{' '}
        <Link href="/contact" className="text-primary hover:underline">
          our contact page
        </Link>{' '}
        or email{' '}
        <a href="mailto:info@bsusa.org" className="text-primary hover:underline">
          info@bsusa.org
        </a>{' '}
        and tell us a little about where you are and what you're trying to figure out. We'll let you
        know when the next workshop or group is starting near you, and we'll match you with a
        mentor if that is what you need.
      </p>

      <p>
        You can also read more about the program on the{' '}
        <Link href="/programs/newcomer-orientation" className="text-primary hover:underline">
          Newcomer Orientation page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
