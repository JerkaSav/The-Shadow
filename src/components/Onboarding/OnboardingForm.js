function OnboardingForm({ update }) {
  function handleClick() {
    update();
  }
  return (
    <div>
      <section>
        <h4>Who are we playing as today?</h4>
      </section>
      <section>
        <input type="text" placeholder="Username..." />
        <button onClick={handleClick}>Submit</button>
      </section>
    </div>
  );
}

export default OnboardingForm;
