import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { WhyUs } from './components/WhyUs';
import { BeforeAfter } from './components/BeforeAfter';
import { Pricing } from './components/Pricing';
import { DoctorProfile } from './components/DoctorProfile';
import { Footer } from './components/Footer';
import { FloatingLineButton } from './components/FloatingLineButton';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <WhyUs />
      <BeforeAfter />
      <Pricing />
      <DoctorProfile />
      <Footer />
      <FloatingLineButton />
    </div>
  );
}