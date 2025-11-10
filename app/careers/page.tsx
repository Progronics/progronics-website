"use client";

import MainContainer from "@/components/main-container";
import { TextEffect } from "@/components/ui/text-effect";

export default function Page() {
  return (
    <MainContainer id="careers" className="py-20 relative min-h-screen">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">
            Careers
          </h2>
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl"
          >
            Join our passionate team of innovators shaping the future of
            technology. We value creativity, dedication, and the drive to make
            an impact through meaningful digital experiences.
          </TextEffect>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-4">
            No Current Job Openings
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            We're always on the lookout for talented individuals who share our
            passion for innovation. While there are no open positions at the
            moment, you can still be part of our future opportunities.
          </p>

          <div className="text-slate-300">
            <p className="mb-2">You can send your CV or portfolio to:</p>
            <a
              href="mailto:info@progronics.com"
              className="text-sky-400 font-medium hover:underline"
            >
              info@progronics.com
            </a>
          </div>

          <div className="mt-8 text-slate-400 text-sm">
            <p>
              We’ll reach out when a role that fits your expertise becomes
              available. Stay connected and keep building amazing things!
            </p>
          </div>
        </div>
      </div>
    </MainContainer>
  );
}
