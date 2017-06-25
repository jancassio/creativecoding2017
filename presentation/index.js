// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  ossario: require("../assets/Alexandre Orion_Ossário_2006.jpg"),
  maxdefault: require("../assets/maxresdefault.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#FCFCFC",
  secondary: "#2E2E2E",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  pink: "#FF218C",
  orange: "#FF723F",
  sun:"#FFCF35",
  yellow: "#FFFA00",
  lemonade: "#E5FF00"
}, {
  primary: { name: "Roboto Mono", googleFont: true, styles: [ "400" ] },//{ name: "Roboto", googleFont: true, styles: [ "500", "900" ] },
  secondary: { name: "Roboto Mono", googleFont: true, styles: [ "400" ] }
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck 
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
        bgColor="secondary"
      >
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading fit textColor="lemonade">
            Creative Coding/Programming
          </Heading>
          <BlockQuote textColor="primary">
            Jan Cássio (http://jancassio.com)
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="lemonade">
            Agenda
          </Heading>
          <List fit textColor="primary">
            <ListItem>Arte e Criatividade</ListItem>
            <ListItem>Programação Criativa</ListItem>
            <ListItem>O Mercado</ListItem>
            <ListItem>Showcases</ListItem>
            <ListItem>Cursos</ListItem>
            <ListItem>Revisão e Conclusões</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Arte
          </Heading>
          <Heading fill size={3} textColor="primary">
           e Criatividade
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="pink">Arte</Heading>
          <Appear><Heading fit size={3} textColor="primary">Expressão de Sentimentos e/ou idéais</Heading></Appear>
        </Slide>
        <Slide bgColor="secondary">
          <List textColor="primary">
            <ListItem>Música</ListItem>
            <ListItem>Texto</ListItem>
            <ListItem>Dança</ListItem>
            <ListItem>Pintura</ListItem>
            <ListItem>Escultura</ListItem>
            <ListItem>Comida</ListItem>
            <ListItem textColor="yellow">Arte Digital</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} textColor="primary">
            Características
          </Heading>
          <List textColor="primary">
            <ListItem>Harmonia</ListItem>
            <ListItem>Equilibrio</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={4} textColor="primary">
            É Instigar os Sentidos
          </Heading>
          <List>
            <Appear><ListItem textColor="pink">Audição (música)</ListItem></Appear>
            <Appear><ListItem textColor="pink">Visão (visualizações)</ListItem></Appear>
            <Appear><ListItem textColor="pink">Paladar (combinação de sabores)</ListItem></Appear>
            <Appear><ListItem textColor="pink">Tato (superficies)</ListItem></Appear>
            <Appear><ListItem textColor="pink">Olfato (fragâncias)</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={['linear']} bgColor="secondary" />
        <Slide 
          transition={['linear']}
          bgColor="secondary"
          bgImage={images.maxdefault}
        />
        <Slide transition={['linear']} bgColor="secondary" />
        <Slide 
          bgColor="secondary"
          transition={['fade']}
          bgImage={images.ossario}
        >
        </Slide>
        <Slide 
          bgColor="secondary"
          transition={['fade']}
          bgImage={images.ossario}
          bgDarken={0.75}
        >
          <Appear>
            <Heading size={1} textColor="yellow">Ossário</Heading>
          </Appear>
          <Appear>
            <Heading fit size={2} textColor="yellow">Alexandre Orion</Heading>
          </Appear>
        </Slide>
        <Slide 
          bgColor="secondary"
          transition={['fade']}
          bgImage={images.ossario}
          bgDarken={0.75}
        >
          <BlockQuote textColor="primary">
            Na madrugada do dia 13 de Julho de 2006, comecei uma intervenção no túnel que liga a Avenida Europa e a cidade Jardim em São Paulo. A intervenção ocorre por processo de subtração, limpando a fuligem produzida pelos carros que se deposita nas paredes do túnel produzo imagens de crânios humanos.
          </BlockQuote>
        </Slide>
        <Slide 
          bgColor="secondary"
          transition={['fade']}
          bgImage={images.ossario}
          bgDarken={0.75}
        >
          <BlockQuote textColor="primary">
            Durante as madrugadas em que trabalhei na 'limpeza' do túnel, foram várias abordagens policiais. Porém, como previsto, ninguém podia me impedir de desenhar as caveiras no túnel. Não havia crime em 'limpar'. O crime era ambiental: poluição pra ninguém botar defeito. E, como também era previsto, o Estado não deixou barato. Só existia uma forma de impedir a 'limpeza' a minha maneira, limpando também. E assim foi!
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="pink">Criatividade</Heading>
          <List>
            <Appear><ListItem textColor="primary">Criar o novo</ListItem></Appear>
            <Appear><ListItem textColor="primary">Resolver problemas</ListItem></Appear>
            <Appear><ListItem textColor="primary">Mudanças ou melhorias</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="pink">Criatividade com Arte</Heading>
          <List>
            <ListItem textColor="primary">Expressão</ListItem>
            <ListItem textColor="primary">Idéias</ListItem>
            <ListItem textColor="primary">Conceitos</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="pink">
            Programação Criativa
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={4} textColor="primary">
            Expressão artistica via
          </Heading>
          <List>
            <ListItem textColor="primary">Software</ListItem>
            <ListItem textColor="primary">Hardware</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Características
          </Heading>
          <List>
            <ListItem textColor="primary">Foco no criador</ListItem>
            <ListItem textColor="primary">Foco na arte</ListItem>
            <ListItem textColor="primary">Abstrações técnicas</ListItem>
            <ListItem textColor="primary">Resultados instantâneos</ListItem>
            <ListItem textColor="primary">Multi-plataforma</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Software
          </Heading>
          <List>
            <ListItem textColor="primary">Processing</ListItem>
            <ListItem textColor="primary">Cinder</ListItem>
            <ListItem textColor="primary">Open Frameworks</ListItem>
            <ListItem textColor="primary">Origami Studio</ListItem>
            <ListItem textColor="primary">Nodebox</ListItem>
            <ListItem textColor="primary">VVVV</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Hardware
          </Heading>
          <List>
            <ListItem textColor="primary">Sensores</ListItem>
            <ListItem textColor="primary">Camera</ListItem>
            <ListItem textColor="primary">Lampadas</ListItem>
            <ListItem textColor="primary">Projetores</ListItem>
            <ListItem textColor="primary">Arduino</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="pink">
            Showcases
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={3} textColor="primary">
            Made With Code
          </Heading>
          <Text textColor="yellow">https://www.madewithcode.com/</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={3} textColor="primary">
            Codedoodles
          </Heading>
          <Text textColor="yellow">http://codedoodl.es/</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={3} textColor="primary">
            Creative Applications
          </Heading>
          <Text textColor="yellow">http://www.creativeapplications.net/</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={3} textColor="primary">
            Chrome Experiments
          </Heading>
          <Text textColor="yellow">https://www.chromeexperiments.com/</Text>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={3} textColor="primary">
            Outros
          </Heading>
          <List>
            <ListItem textColor="primary">Fast Company</ListItem>
            <ListItem textColor="primary">Colossal</ListItem>
            <ListItem textColor="primary">#creativecoding</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            O Mercado
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Demanda
          </Heading>
          <List>
            <ListItem textColor="primary">Publicidade</ListItem>
            <ListItem textColor="primary">Exposições</ListItem>
            <ListItem textColor="primary">Eventos</ListItem>
            <ListItem textColor="primary">Galerias de Arte</ListItem>
            <ListItem textColor="primary">Data Visualization</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Aprendendo
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <List>
            <ListItem textColor="primary">Vontade e gostar do que faz</ListItem>
            <ListItem textColor="primary">Kadenze</ListItem>
            <ListItem textColor="primary">Livros</ListItem>
            <ListItem textColor="primary">Open Source</ListItem>
            <ListItem textColor="primary">Ferramentas</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Revisão e Conclusões
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={4} textColor="yellow">
            Chico Science
          </Heading>
          <BlockQuote fit textColor="primary">
          Computadores fazem arte.
          <br />
          Artistas fazem dinheiro.
          </BlockQuote>
          <BlockQuote fit textColor="primary">
          Computadores avançam.
          <br />
          Artistas pegam carona.
          </BlockQuote>
          <BlockQuote fit textColor="primary">
          Cientistas criam o novo.
          <br />
          Artistas levam a fama.
          </BlockQuote>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Creative Coding/Programing é...
          </Heading>
          <List>
            <Appear><ListItem textColor="primary">Para Programadores</ListItem></Appear>
            <Appear><ListItem textColor="primary">Para Artistas</ListItem></Appear>
            <Appear><ListItem textColor="primary">Para Pessoas</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading fit size={1} textColor="primary">
            Obrigado
          </Heading>
          <br />
          <Text textColor="lemonade">jancassio.com</Text>
        </Slide>
      </Deck>
    );
  }
}
