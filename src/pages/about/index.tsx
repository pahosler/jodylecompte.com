import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import portraitImage from '@/images/portrait.jpg';

type SocialLinkProps = {
  className?: string;
  href: string;
  children: React.ReactNode;
  icon: any;
};

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: SocialLinkProps) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Jody LeCompte</title>
        <meta
          name="description"
          content="I’m Jody LeCompte. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20"></div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Jody LeCompte. I live in New Orleans, where I convert pizza
              and caffiene into software.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve been obsessed with creation and with computers for as long
                as I can remember. My dad was a "webmaster" (who remembers that
                term?) in the late 90's and after my curiosity got the best of
                me, he began teaching me HTML.
              </p>
              <p>
                Fast forward some years later, I watched the internet become a
                massive thing so much more than I ever could have dreamed of it
                being as a kid who saw the internet as Flash games and
                discussion forums. I went from "study your math because you
                won't have a calculator every day" to carrying a super computer
                with the entirety of human knowledge in my back pocket. Funnily
                enough, it's also a calculator.
              </p>
              <p>
                After high school, I spent many years honing my skills and
                working my way up from a support engineer working in a call
                center, before starting my journey as a professional developer
                working with popular PHP based stacks like CodeIgniter and
                Laravel.
              </p>
              <p>
                Today, I have the best job in the world working as a full-stack
                developer specializing in TypeScript, React, and accessible
                design. When I'm not converting problems into solutions for my
                clients, I am working on sharing my experience and knowledge to
                help empower other developers to reach their full potential
                while I work to realize my own.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/jody_lecompte"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://github.com/jodylecompte"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://linkedin.com/in/jodylecompte"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                jody@jodylecompte.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
