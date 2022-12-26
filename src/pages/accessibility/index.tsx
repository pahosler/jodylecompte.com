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

export default function About() {
  return (
    <>
      <Head>
        <title>Accessibility - Jody LeCompte</title>
        <meta
          name="description"
          content="My promise about accessibility for everything I do."
        />
      </Head>
      <Container className="mt-16">
        <h1 className="text-center text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          My Commitment to Accessibility
        </h1>
        <div className="m-auto mt-6 w-2/3 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            It is my firm belief that the democratization of information and the
            internet being accessible to all people irregardless of ability is
            not just simply a nice to have, but a core human right.
          </p>
          <p>
            My commitment to accessibility for both this website as well as all
            of the things I create both as a hobbiest and a professional
            developer is to always strive to do as much as possible within my
            ability to create experiences that are as accessible as possible.
          </p>
          <p>
            I also recognize that accessibility is not a checklist or a
            stationary target. The sheer diversity of abilities, assistive
            technology, and devices makes it impossible for anything to ever be
            100% accessible, but I am equally committed to always looking to
            improve my skills and always be on the lookout for opportunities to
            improve things.
          </p>
          <p>
            This website is regularly tested both with accessibility tools such
            as WAVE and Axe, but also manually tested with various assistive
            technology. I strive to maintain AA WCAG conformance across all
            pages and projects. If you notice an accessibility issue on this
            site or in anything I am involved in, please shoot me an email at
            <a href="mailto: jody@jodylecompte.com" className="text-teal-500">
              {' '}
              jody@jodylecompte.com
            </a>
            . Every issue reported that I am able to correct makes my small
            corner of the internet better for everyone.
          </p>
        </div>
      </Container>
    </>
  );
}
