import "@/styles/home.css";
import Button from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="site-content-inner">
      <Header />
      <div className="site-content__main">
        <section className="site-content__welcome">
          <div className="site-content__logo">
            <img src="/assets/logo_sw_couleur.png" alt="StreetWork'in Logo" className="site-content__logo-img" />
          </div>
        </section>
        <div className="site-content__bottom-actions">
          <Button type="button" variant="anton">
            Découvrir
          </Button>
          <Button type="button" variant="anton">
            Rejoindre
          </Button>
        </div>
      </div>
    </main>
  );
}
