import React from 'react';
import { Briefcase, Compass, FileCheck } from 'lucide-react';
import ProgramLayout from '../../components/ProgramLayout';

export default function CareerPathways() {
  return (
    <ProgramLayout
      title="Career Pathways"
      description="One-on-one guidance that helps participants assess their skills and prior experience, explore realistic career directions, learn how foreign credentials can be evaluated, and connect with training providers and employers."
      icon={Briefcase}
      step={2}
      whoItIsFor={
        <p>
          Newcomers who have work experience from their home country — as a teacher, nurse, engineer,
          mechanic, accountant, driver, electrician, cook, anything — and are trying to figure out what
          that experience is worth here, what it would take to use it in the United States, and whether
          a different direction might get them to work sooner. Also for people with no formal work
          history who are looking for a first job and need help choosing where to start.
        </p>
      }
      listTitle="What a session covers"
      items={[
        {
          label: 'Skills and experience assessment:',
          text: 'a careful look at what a person already knows how to do, what certificates and documents they have, and what parts of that are directly usable here.',
        },
        {
          label: 'Realistic career directions:',
          text: 'what jobs match that profile in the local market right now, which ones pay enough to live on, which have the shortest distance between where the person is today and a first paycheck.',
        },
        {
          label: 'Foreign credential evaluation:',
          text: 'how an overseas diploma or professional license can be reviewed by a US evaluation service, which jobs will accept it, and what additional steps (an exam, a US internship, additional coursework) may be needed.',
        },
        {
          label: 'Training provider referrals:',
          text: 'which community colleges, apprenticeship programs, or short courses lead to the chosen direction, which ones are free or low cost, and how to apply.',
        },
        {
          label: 'Employer introductions:',
          text: 'warm introductions to employers in our network who hire from this program and who understand what it takes to onboard someone new to the country.',
        },
      ]}
      featuresTitle="What to expect"
      features={[
        {
          icon: Compass,
          title: 'One advisor',
          text: 'You work with the same person across sessions, so nothing has to be re-explained.',
        },
        {
          icon: FileCheck,
          title: 'Written plan',
          text: 'Each person leaves with a concrete plan: next step, who to contact, what to prepare, when to check back.',
        },
        {
          icon: Briefcase,
          title: 'Follow-through',
          text: 'Follow-up sessions help work the plan over the following weeks — not a single consultation and done.',
        },
      ]}
      cost={{ headline: 'Nothing.', text: 'The program is free to participants.' }}
      cta={{
        title: 'Request an advisor',
        text: "Tell us a little about your background and we'll match you with an advisor for a first session.",
      }}
    />
  );
}
