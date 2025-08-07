import { Link } from "react-router-dom";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import { useTranslation } from "@/hooks/useTranslation";

interface VehicleLinkProps {
  vehicleId: string;
  children: React.ReactNode;
  className?: string;
}

const VehicleLink = ({ vehicleId, children, className }: VehicleLinkProps) => {
  const { language } = useTranslation();
  
  return (
    <Link 
      to={getLocalizedPath(`/vehicule/${vehicleId}`, language)} 
      className={className}
    >
      {children}
    </Link>
  );
};

export default VehicleLink;