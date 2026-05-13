import "./page.scss";
import Header from "@/components/header";
import SiteHomeActions from "@/components/site-home-actions";

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
        <SiteHomeActions />
      </div>
    </main>
  );
}
