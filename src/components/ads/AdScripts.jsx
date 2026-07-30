import { useEffect } from "react";

const SITE_WIDE_SCRIPTS = [
  {
    id: "adsterra-popunder",
    src: "https://pl30599487.effectivecpmnetwork.com/3b/08/23/3b082343937c863d8322d0f3532096dd.js",
  },
  {
    id: "adsterra-socialbar",
    src: "https://pl30599489.effectivecpmnetwork.com/21/de/25/21de2599a9bc9bff2cf032c1549eeb9d.js",
  },
];

export function AdScripts() {
  useEffect(() => {
    const injected = SITE_WIDE_SCRIPTS.filter(({ id }) => !document.getElementById(id)).map(
      ({ id, src }) => {
        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        document.body.appendChild(script);
        return script;
      }
    );

    return () => injected.forEach((script) => script.remove());
  }, []);

  return null;
}
