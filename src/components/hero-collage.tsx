import { ArchCollage } from "@/components/collage/arch-collage";
import { DoodleCollage } from "@/components/collage/doodle-collage";
import { FrameCollage } from "@/components/collage/frame-collage";
import { PaperCollage } from "@/components/collage/paper-collage";
import { OrbitCollage } from "@/components/collage/orbit-collage";

export type CollageVariant = "arch" | "doodle" | "frame" | "paper" | "orbit";

type HeroCollageProps = {
  variant?: CollageVariant;
};

export function HeroCollage({ variant = "doodle" }: HeroCollageProps) {
  if (variant === "paper") return <PaperCollage />;
  if (variant === "orbit") return <OrbitCollage />;
  if (variant === "frame") return <FrameCollage />;
  if (variant === "arch") return <ArchCollage />;
  return <DoodleCollage />;
}
