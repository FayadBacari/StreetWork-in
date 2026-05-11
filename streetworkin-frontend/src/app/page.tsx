import "./page.scss";
import Button from "@/components/button";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="site-content__inner">
      <Header />
      <div className="site-content__main">
        <section className="site-content__welcome">
          <div className="site-content__logo">
            <img
              src="/assets/logo_sw_couleur.png"
              alt="StreetWork'in Logo"
              className="site-content__logo-img"
            />
          </div>
        </section>
        <div className="site-content__actions site-content__actions--bottom">
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
