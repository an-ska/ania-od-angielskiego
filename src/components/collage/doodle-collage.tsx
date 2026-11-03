/** Hero visual: collage frame mock with photo in the scribbled circle. */
export function DoodleCollage() {
  // Circle geometry as % of frame (matched to scribble hole; width grew when plane tip was restored)
  const sizeW = 41.95;
  const sizeH = 48.55;
  const cx = 42.13;
  const cy = 53.95;

  return (
    <div className="relative w-full md:-mr-4 md:w-[112%]">
      {/* Photo clipped to a true circle under the frame */}
      <div
        className="absolute z-[1] overflow-hidden"
        style={{
          left: `${cx - sizeW / 2}%`,
          top: `${cy - sizeH / 2}%`,
          width: `${sizeW}%`,
          height: `${sizeH}%`,
          borderRadius: "50%",
          clipPath: "circle(50% at 50% 50%)",
          WebkitClipPath: "circle(50% at 50% 50%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ania-hero-circle.png"
          alt="Ania — nauczycielka angielskiego online"
          width={800}
          height={800}
          decoding="async"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </div>

      {/* 2× upscale of the source asset — no next/image recompress. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-collage-frame.png"
        alt=""
        aria-hidden
        width={1136}
        height={982}
        decoding="async"
        fetchPriority="high"
        className="pointer-events-none relative z-[2] h-auto w-full select-none drop-shadow-[4px_8px_20px_rgba(43,58,50,0.12)]"
      />
    </div>
  );
}
