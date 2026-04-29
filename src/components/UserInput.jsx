import { useState } from "react";

export default function UserInput({ form, setForm }) {
  function handleChange(event) {
    setForm((prevForm) => {
      const updatedForm = {
        ...prevForm,
        [event.target.name]:
          event.target.value !== "" ? +event.target.value : "",
      };

      return updatedForm;
    });
  }

  return (
    <div id="user-input">
      <form className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            name="initialInvestment"
            value={form.initialInvestment}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            name="annualInvestment"
            value={form.annualInvestment}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label>Expected return</label>
          <input
            type="number"
            required
            name="expectedReturn"
            value={form.expectedReturn}
            onChange={handleChange}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            name="duration"
            value={form.duration}
            onChange={handleChange}
          ></input>
        </p>
      </form>
    </div>
  );
}
