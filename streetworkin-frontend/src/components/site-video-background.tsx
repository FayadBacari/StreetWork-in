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
        poster="/assets/streetworkout_tv_poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        // @ts-expect-error — fetchPriority is valid HTML but not yet in React types
        fetchPriority="low"
      />
      <div className="site-media-gradient" />
    </div>
  );
}
