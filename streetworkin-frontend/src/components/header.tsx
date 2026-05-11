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
          <div className="site-header__nav site-header__nav--primary">
            <Button>Div 1</Button>
            <Button>Div 2</Button>
            <Button>Div 3</Button>
          </div>
          <div className="site-header__nav site-header__nav--actions">
            <Button>Connexion</Button>
            <Button>Inscription</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
