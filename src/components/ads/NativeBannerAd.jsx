import { useEffect, useRef } from "react";

const CONTAINER_ID = "container-bd83919e93d2b800cedce42f94fb2dac";
const SCRIPT_SRC =
  "https://pl30599488.effectivecpmnetwork.com/bd83919e93d2b800cedce42f94fb2dac/invoke.js";

export function NativeBannerAd({ className = "" }) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = SCRIPT_SRC;
    wrapperRef.current?.appendChild(script);

    return () => script.remove();
  }, []);

  return (
    <div ref={wrapperRef} className={className}>
      <div id={CONTAINER_ID} />
    </div>
  );
}
