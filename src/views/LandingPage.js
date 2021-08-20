import LandingForm from '../components/LandingForm';
import Header from '../components/Header';
function LandingPage() {
  return (
    <article className="grid grid-big">
      <Header text="The Shadow" className="landing-header" />
      <LandingForm text="Login" />
    </article>
  );
}

export default LandingPage;
