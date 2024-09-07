const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let cards = [
  {
    imageUrl:"images/viajar.jpg",
    title: "Viajar con perros", 
    shortText: "Ya se acercan las vacaciones de verano. Notamos ese nerviosismo sano que nos entra cuando pensamos en nuestros planes de viaje.",
    content: "Ya se acercan las vacaciones de verano. Notamos ese nerviosismo sano que nos entra cuando pensamos en nuestros planes de viaje. ¡Y no olvidamos a nuestro perro! Viajar con él es una de las actividades que más nos gustan. Pero ¡cuidado!, ¿nos hemos preguntado si va a disfrutar realmente del viaje?; no será lo mismo viajar sin perro que con perro, y nuestro amigo peludo puede sentir que es bienvenido o que, por el contrario, su presencia supone un esfuerzo para nosotros. La decisión de llevarlo con nosotros debería ser meditada y preparada, con antelación, para conseguir una experiencia satisfactoria para todos. "
  } , 
  {
    imageUrl:"images/adiestramiento.jpg",
    title: "Adiestramiento canino",
    shortText:"Si has tenido la suerte de tener un perro en tu vida, seguramente conocerás diferentes técnicas de adiestramiento canino.",
    content: "Si has tenido la suerte de tener un perro en tu vida, seguramente conocerás diferentes técnicas de adiestramiento canino. En cambio, si eres nuevo como pet parent, seguramente estarás preguntándote cómo educar a tu perro para que sea disciplinado, educado y obediente. Antes de empezar, te adelantamos que existen diferentes técnicas de adiestramiento de perros, y tú decides cuál es la mejor para tu mascota. "
  } , 
  {
    imageUrl:"/images/mundo.jpg",
    title: "Los perros mejoran al mundo",
    shortText: "Diversos estudios publicados en Journal of Medical internet Research han demostrado...",
    content: "Diversos estudios publicados en Journal of Medical internet Research han demostrado que los perros complementan la vida de las personas y que son esenciales para la sociedad. Más de un 60% de la población encuestada dice compartir la mayor parte de su rutina con su mascota e incluso más del 85% afirma que le cuenta sus confesiones. Además, expertos de la salud y la educación (como el equipo de la psiquiatra Sandra Baker de la Universidad Commonwealth de Virginia - EEUU) demuestran que ofrecen beneficios emocionales, psicológicos y físicos mejorando así nuestro día a día"
  } , 
  {
    imageUrl:"/images/sueño.jpg",
    title: "Que sueñan los perros?",
    shortText:"Durante la fase más profunda del sueño, los ojos de los perros se mueven rápido..",
    content: "Durante la fase más profunda del sueño, los ojos de los perros se mueven rápido bajo los párpados igual que nos ocurre a nosotros, y en ese periodo, nuestras mascotas también pueden mostrar otras actividades físicas, como gruñidos, gemidos o movimientos de las patas o la cola que imitan los que llevan a cabo cuando juegan o corren. Así, se llega a la conclusión de que es en estos momentos en los que el perro sueña, y con toda probabilidad, sueña cosas relacionadas con su vida cotidiana, como jugar, correr, comer o estar con sus propietarios."
  } ,
  {
    imageUrl:"/images/sudan.jpg",
    title: "Por que los perros no sudan?",
    shortText:"El mecanismo de refrigeración del perro es diferente al del ser humano, y además de ser más complejo, es menos eficiente",
    content: "El mecanismo de refrigeración del perro es diferente al del ser humano, y además de ser más complejo, es menos eficiente. No dispone de glándulas sudoríparas repartidas por todo su cuerpo, ya que, si así fuese, el sudor se le expandiría por el pelaje, mojándolo, y perdería la capacidad de refrigerar su cuerpo. La temperatura corporal de un perro puede oscilar entre 38º y 39ºC. Cuando el can sufre un exceso de calor corporal, su organismo intenta liberar calor a través de las almohadillas de sus patas, a través de la piel de la trufa (nariz) o por la boca, mediante el jadeo. Incluso la cara y las orejas también ayudan a refrigerar, principalmente su cerebro."
  } ,
  {
    imageUrl:"/images/niño-perro.jpg",
    title: "Niños y mascotas",
    shortText:"Las mascotas juegan un papel muy positivo y enriquecedor en la vida emocional de los niños, derivando en múltiples beneficios socioeducativos",
    content: "Las mascotas juegan un papel muy positivo y enriquecedor en la vida emocional de los niños, derivando en múltiples beneficios socioeducativos para toda la familia. Con la ayuda de las mascotas, los padres podéis enseñar a vuestros hijos, importantes valores como la confianza, la autoestima, la responsabilidad y la amistad. Los pequeños de la casa comprenden que los animales, al igual que ellos mismos, requieren cuidados, respeto y atención. Por ello, los niños están dispuestos a dedicar parte de su tiempo a cuidar a su perro, a renunciar a un juguete para dárselo a su “amigo”, a levantarse temprano para sacarlo a pasear, en definitiva, a realizar esfuerzos que les enriquecen como pequeñas personas. Hábitos saludables que pueden, incluso, llegar a contribuir a que tengan un mayor rendimiento escolar."
  }
];


app.get("/", (req, res) => {
    res.render("index.ejs", {cards})
  });
app.post("/add-card", (req, res) => {
    const {  title, content, } = req.body;
  
    const newCard = {
      title,
      content,
    };
    cards.push(newCard);
    res.redirect("/");
  });

  

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

