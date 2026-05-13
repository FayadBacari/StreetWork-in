import Button from "@/components/button";

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__wrapper">
        <div className="site-header__inner">
          <div className="site-header__logo">
            <img
              src="/assets/logo.png"
              alt="StreetWork'in Logo"
              className="site-header__logo-img"
            />
          </div>
          <div className="site-header__nav-2 site-header__nav--primary">
            <Button className="site-header__btn" href="/join">Div 1</Button>
            <Button className="site-header__btn" href="/join">Div 2</Button>
            <Button className="site-header__btn" href="/join">Div 3</Button>
          </div>
          <div className="site-header__nav site-header__nav--actions">
            <Button className="site-header__btn" href="/login">Connexion</Button>
            <Button className="site-header__btn" href="/register">Inscription</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
