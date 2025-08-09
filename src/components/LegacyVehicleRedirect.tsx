import { Navigate, useParams } from "react-router-dom";

const langVehicleMap: Record<string, string> = {
  fr: "vehicule",
  en: "vehicle",
  es: "vehiculo",
  de: "fahrzeug",
};

const LegacyVehicleRedirect = () => {
  const { lang, id } = useParams<{ lang: string; id: string }>();
  const safeLang = lang && ["fr", "en", "es", "de"].includes(lang) ? lang : "fr";
  const targetBase = langVehicleMap[safeLang] || "vehicule";
  const target = `/${safeLang}/${targetBase}/${id}`;
  return <Navigate to={target} replace />;
};

export default LegacyVehicleRedirect;
