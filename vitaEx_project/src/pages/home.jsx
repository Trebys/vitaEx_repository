import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "../widgets/layout";
import { FeatureCard, TeamCard } from "../widgets/cards";
import { featuresData, teamData, contactData } from "../data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/womes_background.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="green"
                className="mb-6 font-extrabold"
                style={
                  {
                    // Soporte general de navegadores
                  }
                }
              >
                VitaEx Labs
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="font-bold opacity-80"
                style={{
                  WebkitTextStroke: "0.7px black",
                  textStroke: "0.7px black",
                }}
              >
                En VitaEx Labs, nuestra misión es prolongar y mejorar la calidad
                de vida a través de soluciones innovadoras de biotecnología y
                longevidad, permitiendo a las personas vivir más y mejor.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/*Arriba de features*/}

      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 p-2 text-center shadow-lg">
                <FingerPrintIcon className="h-8 w-8 text-white " />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Servicios
              </Typography>
              <Typography className="mb-8 font-normal text-gray-800">
                Ofrecemos una variedad de productos y servicios enfocados en
                prolongar la salud y mejorar la longevidad, incluyendo terapias
                genéticas, suplementos personalizados y tratamientos
                regenerativos avanzados.
              </Typography>
              <Button color="green" variant="filled">
                Conoce más
              </Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg border bg-black rounded-lg">
                <CardHeader floated={false} className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/background_men.jpg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="small"
                    color="white"
                    className="font-normal"
                  >
                    Especialistas
                  </Typography>
                  <Typography
                    variant="h5"
                    color="white"
                    className="mb-3 mt-2 font-bold"
                  >
                    Investigación y Tratamientos de Calidad
                  </Typography>
                  <Typography
                    className="font-normal text-gray-500"
                    color="white"
                  >
                    Nuestros especialistas emplean los más altos estándares de
                    cuidado y las herramientas más avanzadas en sus
                    investigaciones y tratamientos. Además, nos mantenemos al
                    día con las últimas tecnologías y las mejores prácticas en
                    el campo de la biotecnología y la longevidad.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/*Abajo de servicios*/}
      <section className="bg-white px-4 pb-32 pt-16">
        {" "}
        {/* Espacio ajustado con pb-32 */}
        <div className="container mx-auto text-center">
          <Typography
            variant="h3"
            className="mb-3 font-bold text-blue-gray-900"
          >
            Nuestra Misión, Visión y Reseña Histórica
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-8">
            <span className="font-extrabold text-green-500">VitaEx Labs</span>{" "}
            combina "Vita" (vida en latín) con "Ex" para expansión, sugiriendo
            la prolongación de la vida.
          </Typography>
          <Typography
            variant="h6"
            className="italic text-gray-600 mb-8"
            color="blue-gray"
          >
            "Live more, enjoy more"
          </Typography>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
            <Card className="shadow-lg border bg-green-50 rounded-lg">
              <CardBody>
                <Typography variant="h4" className="font-bold text-green-700">
                  Misión
                </Typography>
                <Typography className="mt-4 text-gray-600">
                  En VitaEx Labs, nuestra misión es prolongar y mejorar la
                  calidad de vida de las personas a través de la investigación
                  científica avanzada en biotecnología y longevidad. Nos
                  comprometemos a desarrollar soluciones innovadoras que
                  permitan a nuestros clientes vivir más tiempo, con plena
                  vitalidad, para disfrutar de lo que más les apasiona.
                </Typography>
              </CardBody>
            </Card>
            <Card className="shadow-lg border bg-green-50 rounded-lg">
              <CardBody>
                <Typography variant="h4" className="font-bold text-green-700">
                  Visión
                </Typography>
                <Typography className="mt-4 text-gray-600">
                  Ser líderes mundiales en la investigación y aplicación de
                  tecnologías de longevidad, revolucionando la forma en que las
                  personas experimentan el envejecimiento y mejorando
                  significativamente la salud global. Aspiramos a transformar
                  vidas mediante el uso de biotecnología avanzada para aumentar
                  la esperanza y calidad de vida.
                </Typography>
              </CardBody>
            </Card>
          </div>

          {/* Nueva Card para la Reseña Histórica */}
          <div className="mt-10">
            <Card className="shadow-lg border bg-green-50 rounded-lg">
              <CardBody>
                <Typography variant="h4" className="font-bold text-green-700">
                  Reseña Histórica
                </Typography>
                <Typography className="mt-4 text-gray-600">
                  VitaEx Labs fue fundada en el año 2024 por Esteban López, un
                  visionario apasionado por la biotecnología y la salud. La
                  empresa nació como respuesta a la creciente demanda por
                  soluciones científicas que no solo prolonguen la vida, sino
                  que también mejoren su calidad. Tras varios años de
                  investigación en áreas como la genética, la medicina
                  preventiva y la regeneración celular, VitaEx Labs se
                  estableció con el propósito de ofrecer tratamientos y terapias
                  que revolucionen la longevidad humana.
                  <br />
                  Desde su fundación, VitaEx Labs ha colaborado con
                  universidades, laboratorios y empresas de salud para avanzar
                  en el campo de la biotecnología. Con un equipo altamente
                  calificado y una red de asociaciones estratégicas, la empresa
                  ha logrado posicionarse como una pionera en la investigación
                  sobre longevidad y salud preventiva.
                </Typography>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle section="Nuestro Equipo" heading="Nuestros especialistas">
            Nuestro equipo está comprometido en liderar la investigación y
            desarrollo de tecnologías innovadoras que transformen la salud y
            longevidad humana.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle
            section="Colaboración científica"
            heading="Innovación en biotecnología"
          >
            Colaboramos con instituciones científicas de todo el mundo para
            desarrollar tratamientos que revolucionan la longevidad y salud
            preventiva.
          </PageTitle>

          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-green-600 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle
            section="Contáctanos"
            heading="¿Quieres trabajar con nosotros?"
          >
            Si estás interesado en colaborar o aprender más sobre nuestras
            investigaciones en longevidad, completa este formulario y te
            responderemos en 24 horas.
          </PageTitle>

          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex gap-8">
              <Input variant="outlined" size="lg" label="Nombre y Apellido" />
              <Input variant="outlined" size="lg" label="Dirección de correo" />
            </div>
            <Textarea variant="outlined" size="lg" label="Mensaje" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  Acepto los
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terminos y Condiciones
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
