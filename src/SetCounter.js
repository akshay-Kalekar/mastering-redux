import { useDispatch, useSelector } from "react-redux";
import { set } from "./actions";
import { useState } from "react";
export const SetCounter = () => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((s) => s.counter);

  return (
    <section className="controls">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(set(Number(counter)));
        }}
      >
        <label htmlFor="set-to">Set Count</label>
        <input
          id="set-to"
          type="number"
          value={counter}
          onChange={(e) => setCounter(e.target.value)}
        />
        <input type="submit" />
      </form>
      <h1>{state}</h1>
    </section>
  );
};