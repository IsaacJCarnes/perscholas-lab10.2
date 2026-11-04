import { useState } from "react";

import useDebounce from "../../hooks/useDebounce";
import { useEffect } from "react";

function DebounceSearchDemo() {
  const [debounceTime, setDebounceTime] = useState(500);
  const [value, setValue] = useState("");
  const { debouncedValue, loading } = useDebounce(value, Number(debounceTime));

  function createSimulatedResults() {
    return ["", "", ""].map((value, index) => {
      return (
        <li>
          Result for "{debouncedValue}": Item {index}
        </li>
      );
    });
  }

  return (
    <div className="exampleSection">
      <h3>Debounce Search Demo</h3>
      <div>
        <label htmlFor="delay">Debounce Delay (ms): </label>
        <input
          value={debounceTime}
          type="number"
          step={500}
          min={0}
          max={10000}
          onChange={(e) => {
            setDebounceTime(e.target.value);
          }}
        />
      </div>
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div>
        <b>Current Input:</b> {value}
      </div>
      <div>
        <b>Debounced Value (after {debounceTime}ms):</b> {debouncedValue}
      </div>
      {loading ? <div>Searching...</div> : <div>Simulated Search Results:</div>}
      {value ? (
        <ul>{createSimulatedResults()}</ul>
      ) : (
        <div>Type to see results.</div>
      )}
    </div>
  );
}

export default DebounceSearchDemo;
