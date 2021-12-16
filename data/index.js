import logoLight from "@/images/logo.png";
import logoDark from "@/images/logo.png";
import service1 from "@/images/service1.jpg";
import service2 from "@/images/service2.jpg";


export const LogoImage = {
  light: logoLight,
  dark: logoDark,
};

export const NavLinks = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Présentation",
    url: "/presentation",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Infospratiques",
    url: "/infospratiques",
  },
  {
    name: "Contact",
    url: "/contacts",
  },
];

import sliderOne01 from "@/images/slider/1_1.jpg";
import sliderOne02 from "@/images/slider/1_2.jpg";

export const SliderOneData = [
  {
    image: sliderOne01,
    subTitle: "WELCOME TO",
    title: "International  Speed \n Freight",
    button: {
      label: "Avoir Plus",
      url: "/presentation",
    },
  },
  /*{
    image: sliderOne02,
    subTitle: "WELCOME TO",
    title: "International  System \n Freight",
    button: {
      label: "DISCOVER MORE",
      url: "/about",
    },
  },*/
];



import aboutimg1 from "@/images/ab1.jpg";
import aboutimg2 from "@/images/ab2.jpg";
import services from "pages/services";

export const Aboutdata = {
  sectionContent: {
    title: "International  Speed \n Freight",
    subTitle: "Présentation",
    text:
      "Aujourd’hui une entreprise doit être capable de répondre plus vite et d' une façon plus appropriée aux souhaits des clients. Voilà pourquoi une expédition fiable et des services logistiques et administratifs efficaces sont indispensables. Dans ce domaine l' équipe International Speed Freight  ISF donne le ton avec un service tant national qu' international. Nous vous tenons la main et approchons votre succès.",
  },
  button: {
    label: "savoir plus",
    url: "#",
  },
  gallery: [aboutimg1],
};

export const aboutcontent = {
  text1: "ISF est  une  société  à  responsabilité  limité  (SARL) avec  un  capital de 1 000 000.00 DH qui opère dans le domaine du transport, de la logistique, de la distribution, et des formalités douanières. ISF est composé d’un personnel ambitieux qui a toujours eu un soucis élevé de la qualité de ses prestations, et qui mène une politique de diversification.",
  text2: "Grâce à notre évolution pendant des années, la connaissance et  l' expérience bien approfondies au niveau du transport, de la logistique, de la distribution, des formalités douanières,... sont devenus les atouts de notre société. Depuis sa constitution International Speed Freight centralise les clients dans son domaine d' activité. Comme vos souhaits sont primordiaux dans notre mission et afin de pouvoir répondre à vos besoins et de les dépasser, International Speed Freight  ISF met une équipe de spécialistes à votre disposition.",
}

export const FeatureTabData = {
  sectionContent: {
    title: "Services",
    subTitle: "Que faisons-nous ?",
    text:
      "SERVICES QUE NOUS OFFRONS",
  },
  posts: [
    {
      title: "Fret routier",
      content:
        "Groupage ou des camions complets, de l’ADR au textile jusqu’à la verrerie délicate. International Speed Freight ISF vous présente des solutions fiables et ponctuelles.  Le défi pour notre équipe est de vous offrir un « first class service ». International Speed Freight vous propose:",
      image: service1.src,
      lists: [
        {
          item: "Services de groupage régulier de/vers le Maroc.",
        },
        {
          item: "Départs réguliers vers et en provenance de tous les points d' Europe",
        },
        {
          item: "Des services douaniers intégrés",
        },
        {
          item: "Manutention",
        },
        {
          item: "Stockage",
        },
        {
          item: "Distribution",
        },
      ],
    },
    {
      title: "Fret Maritime",
      content:
        "Vos expéditions maritimes,  une responsabilité que nous pouvons assumer grâce à nos expéditeurs spécialisés et expérimentés et à nos contacts avec des armateurs fiable. Le port de Casablanca, un des plus grands ports de l'Afrique, est le mieux approprié pour vos envois sut toutes les régions du Maroc. ",
      image: service2.src,
      lists: [
        {
          item: "Groupage / NVOCC .",
        },
        {
          item: "Toutes les activités portuaires.",
        },
        {
          item: "Les envois LCL et FCL",
        },
        {
          item: "Mise à disposition de son réseau mondial.",
        },
        {
          item: "La garantie des départs hebdomadaires.",
        },
        {
          item: "La garantie des départs hebdomadaires.",
        },
      ],
    },
  ],
};


export const infop = {
  title1:"Jours Fériés au Maroc",
  list:[
    {
      title: `01 Janvier`,
      desc:`Jour de l'an.`,
    },
    {
      title: `11 Janvier`,
      desc:`Aïd el kébir.`,
    },{
      title: `10 Février`,
      desc:`1er moharem.`,
    },{
      title: `21 Avril`,
      desc:`Fête du Mouloud.`,
    },{
      title: ` 01 Mai`,
      desc:`Fête du Travail .`,
    },{
      title: `23 Mai`,
      desc:`Fête nationale .`,
    },
    {
      title: `30 Juillet`,
      desc:`Fête du Trône .`,
    },{
      title: `14 Août `,
      desc:`Journée de Oued Eddahab .`,
    },{
      title: `20 Août`,
      desc:`Révolution du Roi et du Peuple .`,
    },{
      title: `21 Août`,
      desc:`Fête de la Jeunesse.`,
    },{
      title: `04 Novembre`,
      desc:`Aïd EL seghir.`,
    },{
      title: `06 Novembre`,
      desc:`Marche Verte`,
    },
  ]
}