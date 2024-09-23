import {
  BeakerIcon,        // Representa investigación científica (como un laboratorio o ciencia)
  IdentificationIcon, // Representa personalización (como una identificación única)
  GlobeAltIcon,       // Representa colaboración global (como el mundo o alianzas globales)
} from "@heroicons/react/24/solid";

export const featuresData = [
  {
    color: "green",
    title: "Investigación Pionera",
    icon: BeakerIcon, // Cambié el ícono por uno relacionado con la ciencia
    description:
      "En VitaEx Labs, lideramos investigaciones de vanguardia en biotecnología y longevidad, desarrollando soluciones científicas que mejoran la calidad de vida y prolongan la salud.",
  },
  {
    color: "green",
    title: "Tecnología Personalizada",
    icon: IdentificationIcon, // Cambié el ícono por uno que representa personalización
    description:
      "Ofrecemos tratamientos y terapias genéticas personalizadas basadas en las necesidades únicas de cada individuo, optimizando la salud a nivel celular.",
  },
  {
    color: "green",
    title: "Colaboración Global",
    icon: GlobeAltIcon, // Cambié el ícono por uno que representa colaboración global
    description:
      "Colaboramos con laboratorios, universidades y centros de investigación líderes a nivel mundial para avanzar en la ciencia de la longevidad y la medicina preventiva.",
  },
];

export default featuresData;
