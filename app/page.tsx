import Navigation from '@/components/fora/Navigation';
import Hero from '@/components/fora/Hero';
import Capabilities from '@/components/fora/Capabilities';
import Industries from '@/components/fora/Industries';
import Process from '@/components/fora/Process';
import ContactForm from '@/components/fora/ContactForm';
import Footer from '@/components/fora/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Capabilities />
      <Industries />
      <Process />
      <ContactForm />
      <Footer />
    </main>
  );
}
