import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

const AvatarIcon = ({
  avatarImg,
  className,
}: {
  avatarImg?: string;
  className?: string;
}) => {
  return (
    <Avatar className={twMerge("w-16 h-16", className)}>
      <AvatarImage src={avatarImg || "/images/avatar1.png"} />
      <AvatarFallback>
        <Loader2 size={14} className="animate-spin text-primary" />
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
