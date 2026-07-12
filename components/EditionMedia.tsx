import VideoEmbed from "./VideoEmbed";
import type { MediaVideo } from "@/lib/types";

export default function EditionMedia({
  videos,
  upcoming,
}: {
  videos?: MediaVideo[];
  upcoming?: boolean;
}) {
  const list = videos ?? [];
  const interviews = list.filter((v) => v.categorie === "Interview");
  const autres = list.filter((v) => v.categorie !== "Interview");

  if (!list.length) {
    return (
      <section className="section container" aria-labelledby="ed-media-title">
        <div className="s-head reveal">
          <p className="s-lead">Revivez l&apos;événement</p>
          <h2 className="s-title" id="ed-media-title">
            En <em>vidéo</em>.
          </h2>
        </div>
        <p className="prose reveal">
          {upcoming
            ? "Les vidéos, reportages et interviews seront publiés pendant et après l'événement."
            : "Les vidéos de cette édition seront bientôt disponibles."}
        </p>
      </section>
    );
  }

  return (
    <>
      {autres.length ? (
        <section className="section container" aria-labelledby="ed-videos-title">
          <div className="s-head reveal">
            <p className="s-lead">Revivez l&apos;événement</p>
            <h2 className="s-title" id="ed-videos-title">
              En <em>vidéo</em>.
            </h2>
          </div>
          <div className="videos reveal">
            {autres.map((v, i) => (
              <VideoEmbed key={i} video={v} />
            ))}
          </div>
        </section>
      ) : null}

      {interviews.length ? (
        <section className="section container" aria-labelledby="ed-interviews-title">
          <div className="s-head reveal">
            <p className="s-lead">Paroles d&apos;auteurs et d&apos;organisateurs</p>
            <h2 className="s-title" id="ed-interviews-title">
              <em>Interviews</em>.
            </h2>
          </div>
          <div className="videos reveal">
            {interviews.map((v, i) => (
              <VideoEmbed key={i} video={v} />
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
