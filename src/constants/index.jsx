import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import lendify2 from "../assets/lendify2.png"
import lendify from "../assets/lendify.png"
import portal from "../assets/portal.png"

export const navItems = [
  { label: "Inicio", href: "#home" },
  { label: "Servicios", href: "#services" },
  { label: "Trabajos", href: "#works" },
  { label: "Contacto", href: "#contact" }
];

export const AboutUsList = [
  {
    user: "Agustin Aiello",
    company: "Founder & CEO",
    image: user1,
    text: "Técnico Universitario en Programación, desarrollador Fullstack y especialista en aplicaciones multiplataforma. Más de 5 años de experiencia en desarrollo de software empresarial.",
  },
  {
    user: "Luciano Escalante",
    company: "Co-Founder & CTO",
    image: user2,
    text: "Estudiante de Ingeniería en Informática, programador frontend y especialista en inteligencia artificial. Experto en tecnologías modernas y arquitectura de software.",
  }
];

export const checklistItems = [
  {
    title: "Desarrollo Personalizado",
    description:
      "Creamos soluciones a medida que se adaptan perfectamente a las necesidades específicas de tu negocio, garantizando que cada funcionalidad agregue valor real.",
  },
  {
    title: "Compatibilidad Multi-Plataforma",
    description:
      "Desarrollamos aplicaciones que funcionan perfectamente en web, móvil y desktop, asegurando una experiencia consistente en todos los dispositivos.",
  },
  {
    title: "Soluciones en la Nube",
    description:
      "Implementamos arquitecturas cloud-native que garantizan escalabilidad, seguridad y disponibilidad 24/7 para tu aplicación.",
  },
  {
    title: "Escalabilidad a Futuro",
    description:
      "Construimos sistemas pensados para crecer, con arquitecturas modulares que permiten agregar funcionalidades sin comprometer el rendimiento.",
  },
];

export const OurWorksList = [
  {
    image: portal,
    title: "Portal de Clientes - Fábrica de Bebidas",
    description: "Portal web exclusivo para clientes de una fábrica de distribución de bebidas. Permite a los clientes consultar su historial de compras, gestionar su cuenta personal, ver el estado de sus pedidos y acceder a información de productos. La aplicación incluye un panel administrativo para la gestión de inventario, seguimiento de entregas y generación de reportes comerciales. Tecnologías: React, C#, ASP.NET Core, SQL Server."
  },
  {
    image: lendify2,
    title: "Sistema de Gestión Financiera",
    description: "Aplicación integral para la gestión financiera de pequeños y medianos negocios. Esta herramienta permite a los usuarios registrar y categorizar ingresos y gastos, crear presupuestos personalizados, y generar reportes financieros detallados. La aplicación incluye un panel de control interactivo que muestra métricas clave, como flujo de efectivo, balances mensuales y proyecciones financieras. Tecnologías: React, Node.js, MongoDB, Chart.js."
  }
];






