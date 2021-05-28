import '../../styles/components-style/onboarding.scss';

function OnboardingForm({ update }) {
  function handleClick() {
    update();
  }
  return (
    <div className="onboarding-start">
      <section>
        <h4>Who are we playing as today?</h4>
      </section>
      <section>
        <input type="text" placeholder="Username..." />
        <button className="btn" onClick={handleClick}>
          Submit
        </button>
      </section>
    </div>
  );
}

export default OnboardingForm;
