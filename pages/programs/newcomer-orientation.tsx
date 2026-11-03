import React from 'react';
import { Compass, Users, MapPin } from 'lucide-react';
import ProgramLayout from '../../components/ProgramLayout';

export default function NewcomerOrientation() {
  return (
    <ProgramLayout
      title="Newcomer Orientation"
      description="Workshops, mentoring, and peer support groups that help newcomers understand how everyday life works in the United States: workplace culture, local services, community resources, and practical next steps."
      icon={Compass}
      step={1}
      whoItIsFor={
        <p>
          Adults who arrived in the United States recently — in the last few years — and are still
          figuring out how things work day to day. No prior English level or education is required to
          join. People who arrived under refugee resettlement, asylum, humanitarian parole, family
          reunification, or any other immigration pathway are all welcome.
        </p>
      }
      listTitle="What we cover"
      items={[
        {
          label: 'How American workplaces work:',
          text: 'what to expect in an interview, how pay stubs and taxes work, what rights an employee has, how to raise a problem with a supervisor without losing the job.',
        },
        {
          label: 'Local services:',
          text: 'how to open a bank account, how health insurance and the clinic system work, how to enroll children in school, how to use public transportation and ridesharing.',
        },
        {
          label: 'Community resources:',
          text: 'food assistance, legal aid, free English classes, childcare support, and the places in each neighborhood where newcomers can turn for help.',
        },
        {
          label: 'Practical next steps:',
          text: 'picking the first thing to work on this month — a document, a job search, a medical appointment, a conversation with a landlord — and getting it done with help from a mentor.',
        },
      ]}
      featuresTitle="How it runs"
      featuresIntro="Orientation is a mix of three formats, chosen based on what a participant needs:"
      features={[
        {
          icon: Users,
          title: 'Workshops',
          text: "Small group sessions on one topic at a time, with time for questions and the specifics of each person's situation.",
        },
        {
          icon: MapPin,
          title: 'Peer groups',
          text: "People who arrived earlier share what worked, what didn't, and where to go when something goes wrong.",
        },
        {
          icon: Compass,
          title: 'Mentoring',
          text: 'One-on-one time with a volunteer who has lived here longer and can walk through a specific problem together.',
        },
      ]}
      cost={{
        headline: 'Nothing.',
        text: 'The program is funded by donations and run with the help of volunteer mentors.',
      }}
      cta={{
        title: 'Join a session',
        text: "Send us a note and we'll let you know when the next workshop or group is starting in your area.",
      }}
    />
  );
}
