export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  program: string;
}

export const articles: ArticleMeta[] = [
  {
    slug: 'how-newcomer-orientation-works',
    title: 'How Newcomer Orientation works, and who it is for',
    description:
      'A walk through what a newcomer orientation session actually covers — workplace culture, local services, and the first thing most people need to work on this month.',
    date: '2026-11-02',
    program: 'Newcomer Orientation',
  },
  {
    slug: 'how-career-pathways-works',
    title: 'How Career Pathways works, and who it is for',
    description:
      'How a one-on-one career advising session turns prior work experience and overseas credentials into a plan for a first job in the United States.',
    date: '2026-11-02',
    program: 'Career Pathways',
  },
  {
    slug: 'how-hands-on-trade-training-works',
    title: 'How Hands-On Trade Training works, and who it is for',
    description:
      'What happens in a day-long trade workshop: tools in your hands, a trainer who has done the work for years, and the safety standards that American customers expect.',
    date: '2026-11-02',
    program: 'Hands-On Trade Training',
  },
  {
    slug: 'how-small-business-support-works',
    title: 'How Small Business Support works, and who it is for',
    description:
      'From registering a sole proprietorship to setting an hourly rate that actually covers taxes and gas — a look at how we help a one-person business get started legally.',
    date: '2026-11-02',
    program: 'Small Business Support',
  },
];
