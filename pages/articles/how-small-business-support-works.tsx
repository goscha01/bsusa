import React from 'react';
import Link from 'next/link';
import ArticleLayout from '../../components/ArticleLayout';

export default function HowSmallBusinessSupportWorks() {
  return (
    <ArticleLayout
      title="How Small Business Support works, and who it is for"
      metaTitle="How Small Business Support works — BSUSA"
      metaDescription="From registering a sole proprietorship to setting an hourly rate that actually covers taxes and gas — a look at how we help a one-person business get started legally."
      date="2026-11-02"
      program="Small Business Support"
    >
      <p>
        Many newcomers end up working for themselves — not because they always planned to, but
        because it is often the fastest way to a stable income. You find a first customer, do good
        work, get a second one, and before long you are a business. The question is whether you are
        a business that is set up correctly or a business that is going to get a letter from the
        state in six months. Small Business Support is where we help with the first one.
      </p>

      <h2>Who the program is for</h2>

      <p>
        It is for anyone starting — or seriously thinking about starting — a one-person business.
        Often this is someone who has finished a trade workshop and is about to take on their first
        paying jobs. Sometimes it is someone who was already running a business in their home
        country and now has to figure out how it works here. Sometimes it is someone with a first
        customer tomorrow who does not know what to charge.
      </p>

      <p>
        People at any stage are welcome. "I don't know if this is a good idea" is a fine place to
        start, and so is "I just got my first job and I have no idea what to do."
      </p>

      <h2>What we actually help with</h2>

      <p>
        A small business has about six moving parts in its first year. We help with all of them,
        starting with the most urgent:
      </p>

      <h3>Registering the business</h3>

      <p>
        For a one-person operation, there are usually two options: register as a sole proprietor,
        or form an LLC. Each has tradeoffs — cost, paperwork, liability protection, how taxes work.
        We walk through which is right for your situation, how to actually file the paperwork with
        the state, and how to get an EIN from the IRS. This is usually a one-afternoon job, done
        correctly once.
      </p>

      <h3>Licensing and insurance</h3>

      <p>
        Some trades require a state or local license to work legally. Some don't but still require
        a business license from the city. Insurance works similarly — some jobs require it by law,
        some by the customer, and some by common sense. We help you figure out which ones apply to
        your trade and your city, how to get them, and how to find an affordable policy. Doing this
        before the first job is a lot cheaper than doing it after a problem.
      </p>

      <h3>Setting rates</h3>

      <p>
        This is where a lot of new businesses lose money without realizing it. The hourly rate that
        looks like "a lot of money per hour" is often less than minimum wage once you take out gas,
        materials, insurance, taxes, equipment, and the hours you spend scheduling and chasing
        payment. We work through the real math with you and set a rate that leaves money at the end
        of the month.
      </p>

      <h3>Basic bookkeeping</h3>

      <p>
        You don't need accounting software and you don't need an MBA. You do need to know, every
        month, what came in, what went out, what belongs to the business and what belongs to the
        household. We help you set up a simple system — usually a spreadsheet or a free app and a
        business bank account — that is enough to file taxes correctly at the end of the year and
        to know whether the business is actually making money.
      </p>

      <h3>Finding customers</h3>

      <p>
        We help you get the first few jobs without spending money on advertising that doesn't pay
        back. Local listings, word of mouth, simple online profiles, and the specific channels that
        work in your trade and your area. The goal is a steady flow of customers that comes mostly
        from referrals — that is how a one-person business becomes sustainable.
      </p>

      <h3>Taxes, quietly</h3>

      <p>
        Self-employment taxes work differently than being on payroll, and the surprise comes in
        April if nobody warned you. We'll walk you through what to set aside each month and point
        you to a tax preparer who understands small businesses.
      </p>

      <h2>How a session works</h2>

      <p>
        A first session is about 60 to 90 minutes. We take a careful look at where you are now —
        trade, location, where the first customers will come from, what documents you have — and
        work out what the next three steps are. Follow-up sessions work through those steps with
        you, one at a time.
      </p>

      <p>
        The advisors are volunteer small business owners, accountants, and the occasional insurance
        agent or paralegal. We don't take a share of the business and we don't sell anything. The
        business is yours.
      </p>

      <h2>What it costs</h2>

      <p>
        Nothing from us. State registration fees, business license fees, and insurance premiums are
        paid by the business owner. The amounts depend on your state, your city, and your trade —
        we'll show you exactly what to expect before you commit.
      </p>

      <h2>How to get started</h2>

      <p>
        Email{' '}
        <a href="mailto:info@bsusa.org?subject=Small%20Business%20Support" className="text-primary hover:underline">
          info@bsusa.org
        </a>{' '}
        or write through{' '}
        <Link href="/contact" className="text-primary hover:underline">
          our contact page
        </Link>{' '}
        and tell us a little about what you are thinking of starting. We'll set up a first meeting
        with a business advisor whose background fits.
      </p>

      <p>
        You can also read more on the{' '}
        <Link href="/programs/small-business-support" className="text-primary hover:underline">
          Small Business Support page
        </Link>
        .
      </p>
    </ArticleLayout>
  );
}
