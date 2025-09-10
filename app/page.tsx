import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';

import ContactUs from './components/ContactUs/ContactUs';


export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Web Dev Agency',
            url: 'https://www.droseo.com',
            logo: 'https://www.droseo.com/assets/footer/logo.svg',
            sameAs: [
              'https://facebook.com',
              'https://twitter.com',
              'https://instagram.com',
            ],
            description:
              'We build fast, scalable products using React, Next.js, Node.js, JavaScript, TypeScript, and Python.',
            knowsAbout: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'JavaScript'],
          }),
        }}
      />
      <Banner />
      <Companies />
      <Buyers />
      <Provide />
      <Why />
      <Clientsay />
    <ContactUs />
    </main>
  )
}
