/** Hero visual: collage frame mock with photo in the scribbled circle. */
export function DoodleCollage() {
  // Circle geometry as % of the tight-cropped 558×491 frame (matched to scribble hole)
  const sizeW = 42.7;
  const sizeH = 48.55;
  const cx = 42.89;
  const cy = 53.95;

  return (
    <div className="relative -mr-4 aspect-[558/491] w-[118%] max-w-none sm:-mr-7 sm:w-[126%] md:-mr-8 md:w-[132%]">
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
        {/* Pre-cropped circular portrait — straight shirt/shoulder edges already outside the circle */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ania-hero-circle.png"
          alt="Ania — nauczycielka angielskiego online"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Full collage frame (phonetics, constellation, boat, airplane, torn paper) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-collage-frame.png"
        alt=""
        aria-hidden
        className="pointer-events-none relative z-[2] h-auto w-full select-none drop-shadow-[4px_8px_20px_rgba(43,58,50,0.12)]"
      />
    </div>
  );
}
