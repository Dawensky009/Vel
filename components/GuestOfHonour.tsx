import Image from "next/image";
import type { Personne } from "@/lib/types";

export default function GuestOfHonour({ guest }: { guest: Personne }) {
  return (
    <section className="section container" aria-labelledby="guest-title">
      <div className="s-head reveal">
        <p className="s-lead">Prochain événement</p>
        <h2 className="s-title" id="guest-title">
          Invité <em>d&apos;honneur</em>.
        </h2>
      </div>
      <div className="guest reveal">
        <div className="guest__photo">
          {guest.photo ? (
            <Image
              src={guest.photo}
              alt={guest.nom}
              fill
              sizes="220px"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <span className="guest__ph" aria-hidden="true">
              à venir
            </span>
          )}
        </div>
        <div className="guest__body">
          <p className="guest__name">{guest.nom}</p>
          {guest.role ? <p className="guest__role">{guest.role}</p> : null}
          {guest.bio ? <p className="guest__bio">{guest.bio}</p> : null}
        </div>
      </div>
    </section>
  );
}
