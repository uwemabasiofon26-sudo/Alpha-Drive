import { Image } from "@/components/ui/image";
import { LOGO_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Logo({ className, imgClassName }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={LOGO_URL}
        alt="ALPHA VALOUR"
        fittingType="fit"
        className={cn("h-12 w-12 md:h-14 md:w-14 rounded-full", imgClassName)}
      />
    </div>
  );
}
