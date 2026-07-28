import type { MediaVideo } from "@/lib/types";

export default function VideoEmbed({ video }: { video: MediaVideo }) {
  const isLocal = /\.(mp4|webm|ogg)(\?.*)?$/i.test(video.url);
  return (
    <figure className="video reveal">
      <div className="video__frame">
        {isLocal ? (
          <video
            src={video.url}
            poster={video.poster}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <iframe
            src={video.url}
            title={video.titre || "Vidéo"}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
      {video.titre ? <figcaption className="video__cap">{video.titre}</figcaption> : null}
    </figure>
  );
}
