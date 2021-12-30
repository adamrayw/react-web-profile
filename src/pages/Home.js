import { useEffect } from "react";

export default function Home() {
  useEffect(function () {
    document.title = "Home";
  }, []);

  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website que</h1>
      <p className="section-description">
        Hi!, i will share content here, about ma self, ma hobby
      </p>
    </section>
  );
}
