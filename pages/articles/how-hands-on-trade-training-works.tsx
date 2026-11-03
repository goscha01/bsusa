import React from 'react';
import Link from 'next/link';
import ArticleLayout from '../../components/ArticleLayout';

export default function HowHandsOnTradeTrainingWorks() {
  return (
    <ArticleLayout
      title="How Hands-On Trade Training works, and who it is for"
      metaTitle="How Hands-On Trade Training works — BSUSA"
      metaDescription="What happens in a day-long trade workshop: tools in your hands, a trainer who has done the work for years, and the safety standards that American customers expect."
      date="2026-11-02"
      program="Hands-On Trade Training"
    >
      <p>
        A lot of the work that newcomers do their first year in the United States is physical work:
        cleaning, repair, painting, landscaping, moving. There is steady demand for it in almost
        every town, and it doesn't require a long path through school before earning a first
        paycheck. What it does require is doing the work the way American customers expect it to be
        done — with the right tools, the right technique, and the right safety habits. That is what
        Hands-On Trade Training is for.
      </p>

      <h2>Who the program is for</h2>

      <p>
        It is for newcomers who want to work with their hands. You do not need prior experience in
        the trade — our workshops are designed for people starting out. If you do have experience
        from your home country, we welcome you too: a lot of what you know will carry over, and the
        workshop is a chance to see where the American way of doing it is different (which tools,
        which chemicals, which safety rules, which paperwork).
      </p>

      <p>
        You do not need to decide on a trade before you come. We can walk you through what each one
        actually looks like day to day, and you can try one or two before committing time to a full
        workshop series.
      </p>

      <h2>Which trades we cover</h2>

      <p>
        We focus on trades a person can start earning in without years of upfront schooling, and
        that have steady local demand:
      </p>

      <ul>
        <li>
          <strong>Residential and commercial cleaning.</strong> Equipment, chemicals and safety,
          scheduling, pricing, what a professional handoff with a customer looks like.
        </li>
        <li>
          <strong>Handyman and small repair work.</strong> Common fixes around a home, basic tools
          and how to use them safely, measuring, and knowing when a job needs a licensed trade
          instead (electrical, gas, structural).
        </li>
        <li>
          <strong>Painting, drywall, and basic finish work.</strong> Surface prep, materials, and
          how to get a clean result that holds up.
        </li>
        <li>
          <strong>Landscaping and seasonal yard work.</strong> Equipment basics, safe use of gas and
          electric tools, how recurring customer routes work.
        </li>
        <li>
          <strong>Light moving and delivery.</strong> Lifting technique, protecting a customer's
          property, basics of running a one-person moving service.
        </li>
      </ul>

      <h2>What a workshop day looks like</h2>

      <p>
        A workshop is a small group — usually five to ten people — taught by a volunteer who has
        done the work professionally for years. The format is mostly hands-on. We give a short
        introduction at the start, and then the tools are in your hands and there is a real job in
        front of you. The trainer stops to show the right technique when it comes up, and spends
        most of the time circulating, watching, and correcting the small things that make the
        difference between a job the customer loves and a callback.
      </p>

      <p>
        Workshops are held wherever we can run them well — a volunteer's shop, a partner
        organization's hall, a borrowed yard. We provide materials and tools for the day. You bring
        work clothes and whatever lunch you want.
      </p>

      <h2>Safety and professional standards</h2>

      <p>
        Two things are in every workshop, regardless of trade. One is safety: personal protective
        equipment, correct use of tools, and ladder, electrical and chemical safety. Doing the work
        is one skill; coming home at the end of the day without an injury is another, and it has to
        be built in from day one.
      </p>

      <p>
        The other is what we call professional standards — how you show up, how you leave a job
        site, how you talk to a customer. These are not optional extras. They decide whether a
        customer calls you back and whether they refer you to a friend. Most of the growth of a
        one-person trade business happens through referrals, so this part matters.
      </p>

      <h2>What it costs</h2>

      <p>
        Nothing. Materials and tools are provided for the workshop. You keep the technique.
      </p>

      <h2>How to sign up</h2>

      <p>
        Email{' '}
        <a href="mailto:info@bsusa.org?subject=Trade%20Training" className="text-primary hover:underline">
          info@bsusa.org
        </a>{' '}
        or write to us through{' '}
        <Link href="/contact" className="text-primary hover:underline">
          the contact page
        </Link>{' '}
        and tell us which trade interests you — or that you want to look at a few before deciding.
        We'll put you on the list for the next session.
      </p>

      <p>
        More detail about the program is on the{' '}
        <Link href="/programs/hands-on-trade-training" className="text-primary hover:underline">
          Hands-On Trade Training page
        </Link>
        . If you are thinking about turning what you learn into your own small business, read next
        about{' '}
        <Link href="/articles/how-small-business-support-works" className="text-primary hover:underline">
          how Small Business Support works
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
