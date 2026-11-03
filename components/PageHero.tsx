import React from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional element shown to the right (wraps below on small screens). */
  aside?: React.ReactNode;
}

/** Navy page banner used at the top of every inner page. */
export default function PageHero({ eyebrow, title, intro, children, aside }: PageHeroProps) {
  return (
    <section className="bg-navy text-white">
      <div className="container-page py-16 md:py-20 flex flex-wrap items-center gap-x-16 gap-y-10">
        <div className="flex-[999_1_560px] min-w-0 flex flex-col gap-[18px]">
          <div className="eyebrow text-sunrise-light">{eyebrow}</div>
          <h1 className="text-4xl md:text-[56px] font-extrabold tracking-[-0.025em] leading-[1.05]">{title}</h1>
          {intro && <p className="max-w-[680px] text-lg md:text-xl leading-relaxed text-onnavy">{intro}</p>}
          {children}
        </div>
        {aside}
      </div>
    </section>
  );
}
