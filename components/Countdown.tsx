"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Parts = { d: number; h: number; m: number; s: number; done: boolean };

function compute(targetMs: number): Parts {
  const diff = targetMs - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const s = Math.floor(diff / 1000);
  return {
    d: Math.floor(s / 86400),
    h: Math.floor((s % 86400) / 3600),
    m: Math.floor((s % 3600) / 60),
    s: s % 60,
    done: false,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

export default function Countdown({
  target,
  dateLabel,
  lieu,
  href = "/editions/2026#programme",
}: {
  target: string;
  dateLabel: string;
  lieu?: string;
  href?: string;
}) {
  const targetMs = new Date(target).getTime();
  const [t, setT] = useState<Parts | null>(null);

  useEffect(() => {
    const tick = () => setT(compute(targetMs));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  const units: Array<[string, number | null]> = [
    ["Jours", t ? t.d : null],
    ["Heures", t ? t.h : null],
    ["Minutes", t ? t.m : null],
    ["Secondes", t ? t.s : null],
  ];

  const srLabel = t
    ? t.done
      ? "L'événement a lieu aujourd'hui."
      : `Il reste ${t.d} jour${t.d > 1 ? "s" : ""}, ${t.h} heure${
          t.h > 1 ? "s" : ""
        } et ${t.m} minute${t.m > 1 ? "s" : ""} avant l'événement.`
    : "Compte à rebours avant l'événement.";

  return (
    <section className="countdown" aria-labelledby="cd-title">
      <div className="countdown__inner container reveal">
        <p className="countdown__lead">Plus très longtemps</p>
        <h2 className="countdown__title" id="cd-title">
          {t?.done ? (
            <>
              C&apos;est <em>aujourd&apos;hui</em>
            </>
          ) : (
            <>
              Rendez-vous le <em>15 août</em>
            </>
          )}
        </h2>

        {t?.done ? (
          <p className="countdown__done">Le grand jour est arrivé !</p>
        ) : (
          <div className="countdown__tiles" role="timer" aria-label={srLabel}>
            {units.map(([label, value]) => (
              <div className="countdown__tile" key={label}>
                <span className="countdown__num" aria-hidden="true">
                  {value === null ? "––" : pad(value)}
                </span>
                <span className="countdown__unit">{label}</span>
              </div>
            ))}
          </div>
        )}

        <p className="countdown__meta">
          {dateLabel}
          {lieu ? ` · ${lieu}` : ""}
        </p>

        <p className="countdown__cta">
          <Link className="btn btn--cta" href={href}>
            Voir le programme{" "}
            <span className="arw" aria-hidden="true">
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
