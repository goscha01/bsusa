import React from 'react';
import { Hammer, HardHat, ShieldCheck } from 'lucide-react';
import ProgramLayout from '../../components/ProgramLayout';

export default function HandsOnTradeTraining() {
  return (
    <ProgramLayout
      title="Hands-On Trade Training"
      description="Practical workshops and mentoring in accessible trades, including home service work, led by experienced volunteer practitioners with a focus on safety and professional standards."
      icon={Hammer}
      step={3}
      whoItIsFor={
        <p>
          Newcomers who want to work with their hands and would benefit from learning a trade the way it
          is actually practiced here: with real tools, real materials, and the safety and quality
          standards that American customers and inspectors expect. No prior experience in the trade is
          required. Prior experience from the home country is welcome — we help translate it into how
          the job is done in the US market.
        </p>
      }
      listTitle="Trades we cover"
      listIntro="We focus on accessible trades — ones a person can start earning in without years of upfront schooling or an expensive certification, and ones that have steady local demand:"
      listStyle="cards"
      items={[
        {
          label: 'Residential and commercial cleaning',
          text: 'Equipment, chemicals and safety, scheduling, pricing, customer handoff.',
        },
        {
          label: 'Handyman and small repair work',
          text: 'Common fixes around a home, tools, measuring, when a job needs a licensed trade instead.',
        },
        {
          label: 'Painting, drywall, and basic finish work',
          text: 'Surface prep, materials, getting a clean result that holds up.',
        },
        {
          label: 'Landscaping and seasonal yard work',
          text: 'Equipment basics, safe use of gas and electric tools, how routes and recurring clients work.',
        },
        {
          label: 'Light moving and delivery work',
          text: 'Lifting technique, protecting property, basics of running a one-person moving service.',
        },
      ]}
      extra={
        <div className="flex flex-col gap-3.5">
          <h2 className="text-[32px] font-extrabold tracking-tight text-navy">How a workshop runs</h2>
          <p className="text-[17px] leading-[1.7]">
            Each workshop is a small group taught by someone who has done the work professionally for
            years. The format is mostly hands-on: tools in your hands, a real job in front of you, and the
            trainer stopping to show the right technique the moment it comes up.
          </p>
          <p className="text-[17px] leading-[1.7]">
            Workshops are held at partner sites — a volunteer&apos;s shop, a church hall, or an office we
            borrow for the day — depending on what the day requires.
          </p>
        </div>
      }
      featuresTitle="What to expect"
      features={[
        {
          icon: HardHat,
          title: 'Experienced trainers',
          text: 'Volunteer practitioners who have earned a living in the trade for years and want to pass what they know on to someone starting out.',
        },
        {
          icon: ShieldCheck,
          title: 'Safety first',
          text: 'Personal protective equipment, correct tool use, and ladder, electrical and chemical safety are built into every workshop.',
        },
        {
          icon: Hammer,
          title: 'Professional standards',
          text: 'How to show up, how to leave a job site, how to talk to a customer: the parts that decide whether someone calls you back.',
        },
      ]}
      cost={{ headline: 'Nothing.', text: 'Materials and tools are provided for the workshop.' }}
      cta={{
        title: 'Sign up for a workshop',
        text: "Let us know which trade interests you and we'll put you on the list for the next session.",
      }}
    />
  );
}
