import Head from 'next/head';

import { SimpleLayout } from '@/components/SimpleLayout';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Jody LeCompte</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time. I take you trusting me with your data very seriously, I will never send you spam or make your data available to third parties."
      />
    </>
  );
}
