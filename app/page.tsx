import Link from "next/link";
import Hero from "@/components/Hero";
import CommuniqueFeature from "@/components/CommuniqueFeature";
import GuestOfHonour from "@/components/GuestOfHonour";
import EventStory from "@/components/EventStory";
import PublishersList from "@/components/PublishersList";
import CommuniqueCard from "@/components/CommuniqueCard";
import Billetterie from "@/components/Billetterie";
import Infos from "@/components/Infos";
import {
  getUpcomingEdition,
  getFeaturedCommunique,
  getCommuniques,
  getGuestOfHonour,
  getPublishers,
} from "@/lib/content";

export default function Home() {
  const edition = getUpcomingEdition();
  const featured = getFeaturedCommunique();
  const latest = getCommuniques().slice(0, 3);
  const guest = getGuestOfHonour();
  const pubs = getPublishers(edition.maisonsEdition);

  return (
    <>
      <Hero />

      {featured ? <CommuniqueFeature c={featured} /> : null}

      {guest ? <GuestOfHonour guest={guest} /> : null}

      <EventStory />

      <p className="home-more container reveal">
        <Link href="/editions/2026">
          Découvrir tout le détail de l&apos;édition 2026{" "}
          <span aria-hidden="true">→</span>
        </Link>
      </p>

      <PublishersList items={pubs} />

      <section className="section container" aria-labelledby="news-title">
        <div className="s-head reveal">
          <p className="s-lead">Suivez l&apos;événement</p>
          <h2 className="s-title" id="news-title">
            Dernières <em>actualités</em>.
          </h2>
        </div>
        <div className="news-grid stagger reveal">
          {latest.map((c, i) => (
            <CommuniqueCard key={c.slug} c={c} i={i} />
          ))}
        </div>
        <p className="news-all reveal">
          <Link href="/actualites">
            Toutes les actualités <span aria-hidden="true">→</span>
          </Link>
        </p>
      </section>

      <Billetterie />
      <Infos />
    </>
  );
}
