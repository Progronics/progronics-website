'use client';

import { ReactLenis } from 'lenis/react';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import Link from 'next/link';
import { useRef } from 'react';
import GradientBorderButton from '../gradient-border-button';
import { services } from '@/data/constants';

export default function Page() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const step = 1 / services.length;

  return (
    <ReactLenis root>
      <main ref={container}>
        <section className='text-white   w-full  '>
          {services.map((project, i) => {
            const targetScale = 1 - (services.length - i) * 0.02;
            const isDark = i % 2 !== 0;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project?.title}
                content={project.content}
                color={isDark ? "dark" : "light"}
                description={project?.description}
                progress={scrollYProgress}
                range={[i * step, (i + 1) * step]}
                targetScale={targetScale}
                points={project.points}
              />
            );
          })}
        </section>

      </main>
    </ReactLenis>
  );
}
interface CardProps {
  i: number;
  title: string;
  description: string;
  color: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  content: string;
  points: string[]
}
const Card: React.FC<CardProps> = ({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  content,
  points
}) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const isDark = color === "dark";
  const bgColor = isDark ? "#0f0f0f" : "#ffffff";
  const textColor = isDark ? "#f5f5f5" : "#111111";
  const subTextColor = isDark ? "#d4d4d4" : "#444444";



  return (
    <div
      ref={container}
      className='h-screen flex items-center justify-center sticky top-0'
    >
     
      <motion.div
        style={{
          backgroundColor: bgColor,
          color: textColor,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative -top-[25%] h-auto lg:h-[450px] overflow-hidden w-[90%]  origin-top rounded-2xl p-6 shadow-xl border border-neutral-700/20`}
        
      > 
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10'>
          <div>
            <p className={`text-3xl font-bold relative z-20 mt-2`}>
              {title}
            </p>


            <div
              className="relative z-20 text-[16px] leading-tight tracking-tight my-4"
              style={{ color: subTextColor }}
            >
              {description}

              <ul className="list-none mt-4 text-sm space-y-1">
                {points.map((eachStep: string, ind: number) => (
                  <Step key={ind} title={eachStep} subTextColor={subTextColor} />
                ))}
              </ul>
            </div>

            <Link href={"/services"}>
              <GradientBorderButton text="Learn more" />
            </Link>
          </div>

          <video
            loop
            muted
            autoPlay
            playsInline
            src={content} className="h-[400px] hidden lg:block"  />
        </div>
      </motion.div>
    </div>
  );
};

const Step = ({ title, subTextColor }: { title: string, subTextColor?: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p style={{ color: subTextColor }} className="text-white mt-1">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
