import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import lendify2 from "../assets/lendify2.png"
import lendify from "../assets/lendify.png"

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Contacto", href: "Contact" },
  { label: "Sobre nosotros", href: "" }
];

export const AboutUsList = [
  {
    user: "Agustin Aiello",
    company: "Founder",
    image: user1,
    text: "Técnico Universitario en Programación, desarrollador Fullstack y especialista en aplicaciones multiplataforma.",
  },
  {
    user: "Luciano Escalante",
    company: "Co-Founder",
    image: user2,
    text: "Estudiante de Ingeniería en Informática, programador frontend y especialista en inteligencia artificial.",
  }
];

export const checklistItems = [
  {
    title: "Desarrollo personalizado",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Compatibililidad Multi-Plataforma",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Soluciones en la Nube",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Escalabilidad a futuro",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];


export const OurWorksList = [
  {
    image: lendify2,
    title: "Aplicaciones de gestión",
    description: "Aplicación integral para la gestión financiera de pequeños y medianos negocios. Esta herramienta permite a los usuarios registrar y categorizar ingresos y gastos, crear presupuestos personalizados, y generar reportes financieros detallados. La aplicación incluye un panel de control interactivo que muestra métricas clave, como flujo de efectivo, balances mensuales y proyecciones financieras."
  },
  {
    image: lendify,
    title: "Tableros de control (KPIs)",
    description: "Panel de control integral para empresas, con el objetivo de centralizar y simplificar la gestión de sus operaciones diarias. El panel fue desarrollado para proporcionar una visión clara y en tiempo real de los indicadores clave de rendimiento (KPIs), facilitando la toma de decisiones estratégicas y operativas."
  }
];






