import React from "react";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>cannot find page</h1>
        <Link to="/" className="btn btn-primary">
          homepage
        </Link>
      </div>
    </section>
  );
}
