import React from 'react';
import { Store, FileText, Calculator } from 'lucide-react';
import ProgramLayout from '../../components/ProgramLayout';

export default function SmallBusinessSupport() {
  return (
    <ProgramLayout
      title="Small Business Support"
      description="Guidance for participants who choose self-employment: registering a business, licensing and insurance requirements, setting rates for their own work, and basic bookkeeping."
      icon={Store}
      step={4}
      whoItIsFor={
        <>
          <p>
            Participants who have decided — or are seriously considering — that their best path to a
            stable income is to work for themselves. Often this is someone who has finished a trade
            workshop and wants to take on their first paying jobs on their own, or someone who was running
            their own business in their home country and now has to figure out how it works here.
          </p>
          <p>
            People at any stage are welcome: from <em>&ldquo;I think I want to try this&rdquo;</em> to{' '}
            <em>&ldquo;I have my first customer tomorrow and don&apos;t know what to charge.&rdquo;</em>
          </p>
        </>
      }
      listTitle="What we help with"
      items={[
        {
          label: 'Registering a business:',
          text: 'what kind of entity makes sense for a one-person operation (sole proprietor, LLC), how to register it with the state, how to get an EIN, and what the fees are.',
        },
        {
          label: 'Licensing and insurance:',
          text: "which trades require a license in this state, how to get one, what insurance is required (and what liability coverage is a good idea even when it isn't required), and how to find an affordable policy.",
        },
        {
          label: 'Setting rates:',
          text: 'working out an hourly rate or a job price that actually covers materials, taxes, gas, insurance and a living wage — rather than the cash-in-hand number that leaves nothing at the end of the month.',
        },
        {
          label: 'Basic bookkeeping:',
          text: 'keeping track of what came in, what went out, what belongs to the business and what belongs to the household — enough to file taxes correctly at the end of the year and to know whether the business is actually making money.',
        },
        {
          label: 'Finding customers:',
          text: "how to get the first few jobs — through local listings, word of mouth, and simple online tools — without spending money on advertising that doesn't pay back.",
        },
      ]}
      extra={
        <div className="flex flex-col gap-3.5">
          <h2 className="text-[32px] font-extrabold tracking-tight text-navy">How we work with you</h2>
          <p className="text-[17px] leading-[1.7]">
            A first session is a careful look at where you are now and what the next three steps are.
            Follow-ups work through those steps with you, together. We don&apos;t take a share of the
            business and we don&apos;t sell anything — the people helping are volunteer small business
            owners and accountants who want to see new businesses succeed.
          </p>
        </div>
      }
      featuresTitle="What to expect"
      features={[
        {
          icon: FileText,
          title: 'Paperwork, done once',
          text: 'Registration, licensing and insurance set up correctly from the start — not fixed up after a problem.',
        },
        {
          icon: Calculator,
          title: 'Numbers that work',
          text: 'Rates and bookkeeping that leave the business owner with a real income at the end of the month, not an exhausted guess.',
        },
        {
          icon: Store,
          title: 'Your business, yours',
          text: 'We help you set it up. You own it. No fees, no equity, no hidden strings.',
        },
      ]}
      cost={{
        headline: 'Nothing from us.',
        text: "State registration fees and insurance premiums are paid by the business owner — we'll show you exactly what to expect before you commit.",
      }}
      cta={{
        title: 'Request a first session',
        text: "Tell us what you're thinking about starting and we'll set up a first meeting with a business advisor.",
      }}
    />
  );
}
