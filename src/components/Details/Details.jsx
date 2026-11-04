import { useState } from "react";
import "./Details.css";

export default function Details({ summary = "", open = false, children }) {
  return (
    <details className="animated-details" open={open}>
      <summary>{summary}</summary>
      {children}
    </details>
  );
}
