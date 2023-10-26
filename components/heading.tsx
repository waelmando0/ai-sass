import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

export const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: HeadingProps) => {
  return (
    <div className="mb-8 flex items-center gap-x-3">
      <div className={cn("w-fit rounded-md p-2", bgColor)}>
        <Icon className={cn("h-8 w-8", iconColor)} />
      </div>
      <div>
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-mutes-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
