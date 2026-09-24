import { Image } from "@/components/ui/image";
import { LOGO_URL } from "@/lib/brand";
import { cn } from "@/lib/utils";

export default function Logo({ className, imgClassName }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src={LOGO_URL}
        alt="KORZAVO"
        fittingType="fit"
        className={cn("h-[25px] md:h-[29px] w-auto", imgClassName)}
      />
    </div>
  );
}
