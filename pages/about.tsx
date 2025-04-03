import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Ziyi Zhu">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <p>
            I am a technology enthusiast who is deeply passionate 
            about <strong>machine intelligence</strong> and <strong>quantitative finance</strong>.
            I dedicated my time to exploring the use of novel technologies and data-driven 
            mathematical tools to solve challenging real-world problems. I am 
            also an aspiring artist who loves to add a creative touch to my work. 
            I am constantly learning because I never settle.
          </p>
          <h2>Biography</h2>
          <h3>Work Experiences</h3>
          <p>
            Ziyi Zhu is currently a Member of Technical Staff at{' '}
            <a href="https://slingshot.xyz/">Slingshot AI</a>, where he was the 10th employee to join the team.
            He is focused on training a foundation model for human psychology, aiming to create AI systems
            that better understand and respond to human needs, emotions, and cognitive processes.
          </p>
          <p>
            Previously, he was a Senior Applied Scientist at{' '}
            <a href="https://unlikely.ai/">Unlikely AI</a>, where he was the second ML hire.
            There, he contributed to building an accurate, trustworthy and explainable Neuro-symbolic AI platform
            that combines traditional rule-based systems with modern neural networks to create
            more interpretable and reliable AI solutions.
          </p>
          <p>
            Before that, Ziyi was a Quantitative Researcher at{' '}
            <a href="https://seamlessml.com/">Seamless Capital</a>, where he helped
            to develop predictive modelling for alternative assets using machine 
            learning and statistics. He was also part of the founding team and 
            main developer who built a conversational AI 
            platform <a href="https://www.chai-research.com/">Chai</a> with 1M daily
            active users.
          </p>
          <h3>Education</h3>
          <p>
            Ziyi Zhu graduated from the University of Cambridge with a M.A. in
            Information and Computer Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Ziyi Zhu headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Ziyi Zhu headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}