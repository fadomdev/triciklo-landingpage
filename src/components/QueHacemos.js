import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "./Gallery";

const Quehacemos = () => {
  return (
    <Container className="section" id="quehacemos">
      <h2 className="titulo-seccion">
        <span className="margin-text">qué</span>hacemos
        <span className="calypso">.</span>
      </h2>
      <Row className="flex-column flex-md-row justify-content-center">
        <Col>
          <h3 className="title-service">ATL</h3>
          <p className="description">
            Desarrollamos comunicación estratégica en medios masivos llevando tu
            mensaje a los principales medios de comunicación que tu audiencia
            consume.
          </p>
        </Col>
        <Col>
          <h3 className="title-service">BTL</h3>
          <p className="description">
            Creamos estrategias y tácticas BTL, diseñados para generar una
            conexión emocional entre las marcas y sus consumidores.
          </p>
          <p className="description yellow">
            Segmentación, Targeting, Posicionamiento, Planning, Definición de
            objetivos Comunicacionales
            <br />
            Táctica: Definición de Canales, Conceptos, Key Visuals, Bajadas
            tácticas omnicanal, Mecánicas de Interacción.
          </p>
        </Col>
        <Col>
          <h3 className="title-service">TRADE</h3>
          <p className="description">
            Creamos experiencias en los puntos de contacto con tu cliente, lo que
            se traduce en awareness de marca:
          </p>
          <p className="description yellow">
            Promociones, Conceptos y gráficas, Stands, POP, Estrategias y
            campañas para FFVV, Diseño de elementos de punto de Venta.
          </p>
        </Col>
      </Row>

      <Row className="flex-column flex-md-row justify-content-center">
        <Col>
          <h3 className="subtitulo-seccion yellow">
            <span className="margin-text">INFLUENCER</span>
            <br></br>MARKETING
          </h3>
          <p className="description">
            Nuestra experiencia, con más de cinco años trabajando el marketing de
            influencer, nos permite crear estrategias medibles, a través de
            creadores de contenidos de diferentes mundos para que puedas generar
            awarness, potenciar tu storytelling, trabajar tu credibilidad y
            generar conversión.
          </p>
        </Col>
        <Col>
          <h3 className="subtitulo-seccion purple">
            <span className="margin-text">COMUNICA-</span>
            <br></br>CIONES
          </h3>
          <p className="description">
            Si no se comunica es como si no existiera. Por eso creamos planes de
            comunicación, tanto interna como externa para que puedas conectarte
            de la mejor manera con tus stakeholders.
          </p>
        </Col>
        <Col>
          <h3 className="subtitulo-seccion yellow">
            <span className="margin-text">GESTIÓN DE</span> <br></br>PRENSA
          </h3>
          <p className="description">
            Los medios tradicionales nos entregan credibilidad, pero saber
            encontrar el discurso correcto y construir un buen storytelling es
            lo que hace la diferencia.<br></br>
            Contamos con una agenda completa de medios y nuevos medios para
            amplificar las campañas de tu marca.
          </p>
        </Col>
      </Row>
      <Row className="flex-column flex-md-row justify-content-center">
        <Col>
          <h3 className="subtitulo-seccion yellow">
            <span className="margin-text">
              CREATIVIDAD EN<br></br>
            </span>
            NUEVOS MEDIOS
          </h3>
          <p className="description">
            La comunicación cambia a gran velocidad, por eso, en Triciklo
            investigamos constantemente las nuevas tendencias y formatos con el
            fin de crear campañas bajo estrategias claras e ideas creativas,
            respondiendo a los lineamientos de cada marca, siempre con objetivos
            certeros y medibles.
          </p>
        </Col>
        <Col>
          <h3 className="subtitulo-seccion purple">
            <span className="margin-text">
              CREACIÓN DE<br></br>
            </span>
            CONTENIDOS
          </h3>
          <p className="description">
            Creamos contenidos multiplataformas para conectarte con tu
            audiencia. Desde la creación de un post en tus rede sociales, un
            video corporativo para tu público interno o la creación de un video
            para potenciar tu fuerza de venta. Te asesoramos y buscamos la mejor
            opción para que puedas desarrollar todo el potencial de tu marca.
          </p>
        </Col>
        <Col>
          <h3 className="subtitulo-seccion yellow">
            <span className="margin-text">
              EXPERIENCIAS & <br></br>
            </span>
            STREAMING
          </h3>
          <p className="description">
            Fuimos los primeros en realizar un evento, en vivo y en directo, en
            la pandemia 2020 junto a Los Tres.<br></br> A pesar de la distancia,
            gracias a la tecnología creamos experiencias digitales para que te
            puedas conectar con tu audiencia. No importa si es una reunión
            pequeña o un evento masivo como una fiesta de fin de año, en
            Triciklo con la modalidad custom made realizamos una propuesta de
            acuerdo a lo que necesitas.<br></br>Además, contamos con el servicio
            Delivery Box Experience, que consiste en la creación y distribución
            de envíos que complementan tu experiencia virtual.
          </p>
        </Col>
      </Row>
      <h2 className="banner2">
        <span className="margin-text">Trabajos</span> con el sello{" "}
        <span className="calypso">Tricicklo</span>
      </h2>
      <Gallery />
    </Container>
  );
};

export default Quehacemos;
