import Image from "next/image";

/** Hero visual: collage frame mock with photo in the scribbled circle. */
export function DoodleCollage() {
  // Circle geometry as % of the tight-cropped 558×491 frame (matched to scribble hole)
  const sizeW = 42.7;
  const sizeH = 48.55;
  const cx = 42.89;
  const cy = 53.95;

  return (
    <div className="relative w-full md:-mr-8 md:w-[132%]">
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
        <Image
          src="/ania-hero-circle.png"
          alt="Ania — nauczycielka angielskiego online"
          fill
          priority
          sizes="(max-width: 768px) 45vw, 28vw"
          className="object-cover"
        />
      </div>

      {/* Full collage frame (phonetics, constellation, boat, airplane, torn paper) */}
      <Image
        src="/hero-collage-frame.png"
        alt=""
        aria-hidden
        width={558}
        height={491}
        priority
        sizes="(max-width: 768px) 90vw, 55vw"
        className="pointer-events-none relative z-[2] h-auto w-full select-none drop-shadow-[4px_8px_20px_rgba(43,58,50,0.12)]"
      />
    </div>
  );
}
