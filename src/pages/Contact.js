import { useEffect } from "react";

export default function Contact() {
  useEffect(function () {
    document.title = "Contact";
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">Contact Page</h1>
      <p className="section-description">Klean bisa hubungi que di :</p>
      <ul>
        <li>WA: 012345678910</li>
        <li>FECBOK : Adam Ray Gans</li>
      </ul>
    </section>
  );
}
