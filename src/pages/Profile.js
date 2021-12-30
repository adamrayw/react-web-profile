import { useEffect } from "react";

export default function Profile() {
  useEffect(function () {
    document.title = "Profile";
  });
  return (
    <section className="section">
      <h1 className="section-title">Profile Page</h1>
      <p className="section-description">
        Hi, nama que adam, que baru aja lulus dari harvard.
      </p>
    </section>
  );
}
