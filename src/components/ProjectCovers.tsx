import type { CSSProperties } from "react";
import type { Locale } from "@/i18n/config";
import type { ProjectCover } from "@/lib/projects";

/*
 * Illustrations animées (CSS uniquement) pour les projets sans capture montrable :
 * application de bureau (Jarvis), code confidentiel (CNSS, chatbot) ou outil en ligne de commande.
 */

const delay = (s: number) => ({ animationDelay: `${s}s` }) as CSSProperties;

function Reactor() {
  const bars = [0.5, 0.9, 0.35, 1, 0.6, 0.8, 0.4, 0.95, 0.55, 0.7, 0.3, 0.85];
  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_45%,#0b2a36,#05070b_70%)]">
      <div className="bg-grid-dark absolute inset-0 opacity-60" />
      <div className="relative aspect-square h-[68%]">
        <div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-sky-400/30" />
        <div className="absolute inset-[9%] animate-orbit-reverse rounded-full border-2 border-sky-400/20 border-t-sky-400/80" />
        <div className="absolute inset-[20%] animate-spin-slow rounded-full border border-sky-400/40 border-b-transparent border-l-transparent" />
        <div className="absolute inset-[31%] rounded-full bg-sky-400/10 shadow-[0_0_60px_10px_rgb(34_211_238/0.35)]" />
        <div className="absolute inset-[38%] animate-blink rounded-full bg-[radial-gradient(circle,#e0fbff,#22d3ee_45%,transparent_70%)]" />
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            className="absolute left-1/2 top-1/2 h-[14%] w-[3%] -translate-x-1/2 rounded-full bg-sky-400/50"
            style={{ transform: `translate(-50%, -50%) rotate(${deg}deg) translateY(-210%)` }}
          />
        ))}
      </div>
      <div className="absolute bottom-[9%] left-1/2 flex h-8 -translate-x-1/2 items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-1 origin-bottom animate-blink rounded-full bg-sky-400/70"
            style={{ height: `${h * 100}%`, ...delay(i * 0.12) }}
          />
        ))}
      </div>
      <p className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.3em] text-sky-400/70">J.A.R.V.I.S</p>
      <p className="absolute right-5 top-4 flex items-center gap-2 font-mono text-[11px] text-sky-400/70">
        <span className="size-1.5 animate-blink rounded-full bg-sky-400" /> « HEY JARVIS »
      </p>
    </div>
  );
}

function Radar() {
  const blips = [
    { x: 68, y: 30, d: 0.2 },
    { x: 30, y: 62, d: 1.4 },
    { x: 58, y: 72, d: 2.3 },
    { x: 40, y: 26, d: 3.1 },
  ];
  return (
    <div className="relative grid h-full place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_50%,#062419,#05070b_70%)]">
      <div className="relative aspect-square h-[82%]">
        {[0, 18, 34].map((inset) => (
          <div key={inset} className="absolute rounded-full border border-emerald-400/20" style={{ inset: `${inset}%` }} />
        ))}
        <div className="absolute inset-y-0 left-1/2 w-px bg-emerald-400/15" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-emerald-400/15" />
        <div className="absolute inset-0 animate-radar rounded-full bg-[conic-gradient(from_0deg,rgb(52_211_153/0.35),transparent_22%)]" />
        {blips.map((b) => (
          <span
            key={`${b.x}-${b.y}`}
            className="absolute size-2 animate-blink rounded-full bg-emerald-300 shadow-[0_0_12px_3px_rgb(52_211_153/0.7)]"
            style={{ left: `${b.x}%`, top: `${b.y}%`, ...delay(b.d) }}
          />
        ))}
        <span
          className="absolute size-2.5 animate-blink rounded-full bg-red-400 shadow-[0_0_14px_4px_rgb(248_113_113/0.7)]"
          style={{ left: "74%", top: "58%", ...delay(0.8) }}
        />
      </div>
      <p className="absolute left-5 top-4 font-mono text-[11px] tracking-[0.2em] text-emerald-300/70">PERIMETER · LIVE</p>
      <p className="absolute bottom-4 right-5 rounded border border-red-400/40 bg-red-400/10 px-2 py-1 font-mono text-[11px] text-red-300">
        ALERT · 10.0.4.17
      </p>
    </div>
  );
}

function Chat({ lang }: { lang: Locale }) {
  const messages =
    lang === "fr"
      ? [
          { me: false, text: "Bonjour, je voudrais un devis." },
          { me: true, text: "Avec plaisir ! Quel est votre budget et votre délai ?" },
          { me: false, text: "Environ 500 000 FCFA, sous un mois." },
          { me: true, text: "Parfait, je transmets à l'équipe ✅" },
        ]
      : [
          { me: false, text: "Hi, I'd like a quote." },
          { me: true, text: "Happy to help! What's your budget and timeline?" },
          { me: false, text: "Around $800, within a month." },
          { me: true, text: "Great, passing you to the team ✅" },
        ];
  return (
    <div className="relative flex h-full flex-col justify-center gap-2 overflow-hidden bg-[radial-gradient(circle_at_30%_20%,#0d2b1d,#05070b_70%)] px-[8%] pb-8 [container-type:size]">
      {messages.map((m, i) => (
        <p
          key={m.text}
          className={`max-w-[80%] animate-float rounded-2xl px-3 py-1.5 text-[clamp(10px,4.2cqh,13px)] leading-snug shadow-lg ${
            m.me ? "self-end rounded-br-sm bg-[#005c4b] text-white" : "self-start rounded-bl-sm bg-slate-800 text-slate-100"
          }`}
          style={delay(i * 0.6)}
        >
          {m.text}
        </p>
      ))}
      <p className="absolute bottom-3 right-4 flex items-center gap-2 rounded-full bg-[#25d366]/15 px-3 py-1 font-mono text-[11px] text-[#25d366]">
        <span className="size-1.5 animate-blink rounded-full bg-[#25d366]" /> Lead · {lang === "fr" ? "qualifié" : "qualified"}
      </p>
    </div>
  );
}

function Alerts() {
  const rows = [
    ["192.168.1.24", "LOW", 1],
    ["10.0.0.87", "MEDIUM", 3],
    ["172.16.4.9", "CRITICAL", 9],
    ["10.0.3.12", "LOW", 0],
    ["192.168.7.45", "CRITICAL", 12],
    ["10.0.0.5", "MEDIUM", 4],
  ] as const;
  const color = { LOW: "text-slate-400", MEDIUM: "text-amber-300", CRITICAL: "text-red-400" };
  return (
    <div className="relative h-full overflow-hidden bg-[radial-gradient(circle_at_70%_20%,#2a0d10,#05070b_70%)] p-5 font-mono text-[12px]">
      <p className="mb-3 tracking-[0.2em] text-red-300/70">SPARK · WINDOW 30s</p>
      <div className="space-y-1.5">
        {rows.map(([ip, level, fails], i) => (
          <p
            key={ip}
            className={`flex justify-between rounded-md border border-white/10 bg-slate-950/60 px-3 py-1.5 ${level === "CRITICAL" ? "animate-blink" : ""}`}
            style={delay(i * 0.3)}
          >
            <span className="text-slate-100/80">{ip}</span>
            <span className="text-slate-400">401 × {fails}</span>
            <span className={color[level]}>{level}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

export default function ProjectCoverArt({ cover, lang }: { cover: ProjectCover; lang: Locale }) {
  switch (cover) {
    case "reactor":
      return <Reactor />;
    case "radar":
      return <Radar />;
    case "chat":
      return <Chat lang={lang} />;
    case "alerts":
      return <Alerts />;
  }
}
