import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import { Container } from '@/components/Container';
import { formatDate } from '@/lib/formatDate';
import { Prose } from '@/components/Prose';
import { SocialLink } from '@/components/SocialLink';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import { Newsletter } from './home';

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter();

  if (isRssFeed) {
    return children;
  }

  return (
    <>
      {/* <Head>
        <title>{`${meta.title} - Jody LeCompte`}</title>
        <meta name="description" content={meta.description} />
      </Head> */}
      <NextSeo
        title={`${meta.title} - Jody LeCompte`}
        description={meta.description}
        additionalMetaTags={[
          {
            property: 'dc:creator',
            content: 'Jody LeCompte',
          },
        ]}
        openGraph={{
          title: `${meta.title} - Jody LeCompte`,
          description: meta.description,
          siteName: 'JodyLeCompte.com',
        }}
        twitter={{
          handle: '@jody_lecompte',
          site: '@jody_lecompte',
          cardType: 'summary',
        }}
      />
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
            <div className="max-w-2xl">
              <h1 className="mt-16 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                About the Author
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                Hi, I'm Jody LeCompte! I am a full stack developer with a
                passion for using my skills and knowledge to make the internet a
                better place. With a focus on Typescript, React, and PHP, I
                specialize in creating high-quality, accessible solutions that
                solve real business problems.
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
              <div className="m-auto mt-8 w-2/3">
                <Newsletter />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
