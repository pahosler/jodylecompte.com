import Head from 'next/head';

import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  );
}

type AppearanceProps = {
  title: string;
  description: string;
  event: string;
  cta: string;
  href: string;
  target?: string;
};

function Appearance({ title, description, event, cta, href, target }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} target={target}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  );
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Jody LeCompte</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout title="Talks and Public Appearances" intro="">
        <div className="space-y-20">
          <SpeakingSection title="Conferences">
            <Appearance
              href="https://www.youtube.com/watch?v=6pEmBCmRSps"
              target="_blank"
              title="Hot Takes About Automated Testing"
              description="A talk where I share some of my hotest takes and what I've learned about automated testing over the last few years."
              event="Vincit Dev Talks 2022"
              cta="Watch video"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  );
}
