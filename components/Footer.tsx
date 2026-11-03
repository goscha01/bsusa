import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { LogoLockup } from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  const linkClass = 'text-[15px] text-[#C9D4E5] hover:text-white transition-colors';

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-page pt-16 pb-8 flex flex-col gap-10">
        <div className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex-[2_1_340px] flex flex-col gap-5">
            <LogoLockup tone="dark" size={52} />
            <p className="max-w-[440px] text-[15px] leading-relaxed text-[#C9D4E5]">
              Adult education for immigrants and refugees in the United States: workshops on American life
              and work, career guidance, hands-on trade training, and small business support — so newcomers
              can become self-sufficient.
            </p>
            <div>
              <Link href="/ways-to-help#donate" className="btn-primary">
                Donate
              </Link>
            </div>
          </div>

          <div className="flex-[1_1_200px] flex flex-col gap-3.5">
            <h3 className="eyebrow text-sunrise-light mb-1">Explore</h3>
            <Link href="/about" className={linkClass}>About &amp; Mission</Link>
            <Link href="/programs/newcomer-orientation" className={linkClass}>Newcomer Orientation</Link>
            <Link href="/programs/career-pathways" className={linkClass}>Career Pathways</Link>
            <Link href="/programs/hands-on-trade-training" className={linkClass}>Hands-On Trade Training</Link>
            <Link href="/programs/small-business-support" className={linkClass}>Small Business Support</Link>
            <Link href="/articles" className={linkClass}>Articles</Link>
          </div>

          <div className="flex-[1_1_200px] flex flex-col gap-3.5">
            <h3 className="eyebrow text-sunrise-light mb-1">Get in touch</h3>
            <a href="mailto:info@bsusa.org" className={`${linkClass} inline-flex items-center gap-2`}>
              <Mail className="h-4 w-4 text-sunrise-light" /> info@bsusa.org
            </a>
            <Link href="/ways-to-help#volunteer" className={linkClass}>Volunteer with us</Link>
            <Link href="/ways-to-help#partner" className={linkClass}>Partner with us</Link>
            <Link href="/contact" className={linkClass}>Contact page</Link>
          </div>
        </div>

        <div className="border-t border-[#2A3F5F] pt-6 flex flex-col gap-5 text-[13px] text-[#A9B6CA]">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2">
            <span>
              Better Start USA Foundation, Inc. — a nonprofit registered in the State of Florida. EIN: 43-2597508.
            </span>
            <Link href="/about#non-discrimination" className="hover:text-white underline">
              Non-discrimination policy
            </Link>
          </div>

          <div className="rounded border border-[#2A3F5F] bg-[#0B1A32] p-4 text-[12px] leading-relaxed">
            <p className="font-semibold text-[#C9D4E5] mb-1">Florida Charitable Solicitation Disclosure</p>
            <p>
              A COPY OF THE OFFICIAL REGISTRATION AND FINANCIAL INFORMATION MAY BE OBTAINED FROM THE
              DIVISION OF CONSUMER SERVICES BY CALLING TOLL-FREE 1-800-HELP-FLA (435-7352) WITHIN THE
              STATE OR AT www.FloridaConsumerHelp.com. REGISTRATION DOES NOT IMPLY ENDORSEMENT,
              APPROVAL, OR RECOMMENDATION BY THE STATE. Florida Registration #CH[pending — update before launch].
            </p>
          </div>

          <p className="text-center text-[#A9B6CA]">
            © {year} Better Start USA Foundation, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
