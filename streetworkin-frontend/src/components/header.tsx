import Button from "@/components/button";

export default function Header() {
  return (
    <header className="site-header__container">
      <div className="site-header">
        <div className="site-header__logo">
          <img
            src="/assets/logo.png"
            alt="StreetWork'in Logo"
            className="logo"
          />
        </div>
        <div className="site-header__nav_1">
          <Button>Div 1</Button>
          <Button>Div 2</Button>
          <Button>Div 3</Button>
        </div>
        <div className="site-header__nav_2">
          <Button>Connexion</Button>
          <Button>Inscription</Button>
        </div>
      </div>
    </header>
  );
}
