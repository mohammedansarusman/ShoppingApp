import { LucideIcon } from "lucide-react";

type IconProps = {
    iconName: string;
    iconImage: LucideIcon;
    className?: string;
}

export const NavBarIcon = ({iconName, iconImage:Icon, className}: IconProps) => {
  return (
    <div className={`text-sm cursor-pointer hover:text-pink-600 transition-colors duration-300 
        hover:underline underline-offset-8 decoration-2 ${className}`}>
          <Icon size={20} className="lg:w-10 lg:h-8"/>
          <p>{iconName}</p>
        </div>
  )
}
