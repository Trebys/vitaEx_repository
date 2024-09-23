import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-gray-400 lg:w-2/5">
              {description}
            </Typography>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton
                    color="white"
                    className="rounded-full shadow-none bg-transparent"
                  >
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="white"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-gray-400 hover:text-white"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography variant="small" className="font-normal text-gray-400">
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "VitaEx Labs",
  description:
    "Prolongamos la vida y mejoramos su calidad a través de biotecnología avanzada, colaborando con instituciones globales para revolucionar la longevidad.",
  socials: [
    {
      color: "blue",
      name: "twitter",
      path: "https://www.twitter.com/vitaexlabs",
    },
    {
      color: "pink",
      name: "instagram",
      path: "https://www.instagram.com/vitaexlabs",
    },
    {
      color: "red",
      name: "youtube",
      path: "https://www.youtube.com/vitaexlabs",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/vitaexlabs",
    },
  ],
  menus: [
    {
      name: "enlaces útiles",
      items: [
        { name: "Sobre Nosotros", path: "/about" },
        { name: "Blog", path: "/blog" },
        { name: "Investigación", path: "/research" },
        { name: "Terapias Personalizadas", path: "/therapies" },
      ],
    },
    {
      name: "otros recursos",
      items: [
        { name: "Política de Privacidad", path: "/privacy-policy" },
        { name: "Términos de Servicio", path: "/terms-of-service" },
        { name: "Contacto", path: "/contact" },
        { name: "Colaboraciones", path: "/collaborations" },
      ],
    },
  ],
  copyright: (
    <>Copyright © {year} VitaEx Labs. Casi todos los derechos reservados.</>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
