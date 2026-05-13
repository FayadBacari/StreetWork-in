import Button from "@/components/button";

export default function SiteHomeActions() {
  return (
    <div className="site-content__actions site-content__actions--bottom">
      <Button className="site-home__btn" href="/details">
        Découvrir
      </Button>
      <Button className="site-home__btn" href="/join">
        Rejoindre
      </Button>
    </div>
  );
}
