import Navigation from '@/components/fora/Navigation';
import Hero from '@/components/fora/Hero';
import Capabilities from '@/components/fora/Capabilities';
import Process from '@/components/fora/Process';
import ContactForm from '@/components/fora/ContactForm';
import Footer from '@/components/fora/Footer';
import References from '@/components/fora/References';
import BackToTop from '@/components/fora/BackToTop';
import MapSection from '@/components/fora/MapSection';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Capabilities />
      <Process />
      <References />
      <ContactForm />
      <MapSection />
      <Footer />
      <BackToTop />
    </main>
  );
}

