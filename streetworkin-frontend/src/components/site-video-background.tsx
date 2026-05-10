import { BACKGROUND_VIDEO_URL } from "@/constants/site-media";

/**
 * Fond d'écran vidéo du site, placé en dehors de la hiérarchie React pour éviter les problèmes d'hydratation.
 * autoplay + muted fonctionne sans attendre l’hydratation React.
 */
export function SiteVideoBackground() {
  return (
    <div className="site-media-root" aria-hidden>
      <video
        className="site-media-video"
        src={BACKGROUND_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="site-media-gradient" />
    </div>
  );
}
