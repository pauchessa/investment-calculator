import { useState } from "react";

export default function UserInput() {
  const [form, setForm] = useState({
    initial: "",
    annual: "",
    expectedReturn: "",
    duration: "",
  });

  function handleChange(event) {
    setForm((prevForm) => {
      const updatedForm = {
        ...prevForm,
        [event.target.name]: event.target.value,
      };
      console.log(updatedForm);
      return updatedForm;
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial investment</label>
          <input
            type="number"
            required
            name="initial"
            value={form.initial}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Annual investment</label>
          <input
            type="number"
            required
            name="annual"
            value={form.annual}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Expected return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={form.expectedReturn}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={form.duration}
            onChange={handleChange}
          ></input>
        </div>
      </div>
    </div>
  );
}
