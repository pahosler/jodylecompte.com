import Head from 'next/head';
import Link from 'next/link';

import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import { SocialLink } from '@/components/SocialLink';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';

import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllArticles } from '@/lib/getAllArticles';
import { formatDate } from '@/lib/formatDate';

import { Newsletter } from '@/components/home';

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/en/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Jody LeCompte - Father, Fisherman, and Full-Stack Developer
        </title>
        <meta
          name="description"
          content="I'm Jody LeCompte. Father, Fisherman, and Full-Stack Developer. I am a full stack developer with a passion for using my skills and knowledge to make the internet a better place. With a focus on Typescript, React, and PHP, I specialize in creating high-quality, accessible solutions that solve real business problems."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Father, Fisherman and Full-Stack Developer
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I am a full stack developer with a passion for using my skills and
            knowledge to make the internet a better place. With a focus on
            Typescript, React, and PHP, I specialize in creating high-quality,
            accessible solutions that solve real business problems.
          </p>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            In addition to my technical expertise, I am also dedicated to
            sharing my knowledge through educational material, helping others to
            learn and grow in their own development careers. I am driven by a
            strong desire to make a positive impact through my work and to help
            others achieve their full potential.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/jody_lecompte"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://github.com/jodylecompte"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.comd/in/jodylecompte"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
          </div>
        </div>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  };
}
