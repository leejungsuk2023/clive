import { Hero } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { WhyUs } from './components/WhyUs';
import { BeforeAfter } from './components/BeforeAfter';
import { DoctorProfile } from './components/DoctorProfile';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <WhyUs />
      <BeforeAfter />
      <DoctorProfile />
      <Footer />
    </div>
  );
}
