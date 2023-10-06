import Service from "@/models/service"
import Step from "@/models/step"

export const steps: Record<string, Step> = {
  services: {
    id: "services",
    name: "Site ou Application?",
    options: { service_1: "site_type", service_2: "application_type" },
  },
  site_type: {
    id: "site_type",
    name: "type de site",
    options: {
      service_3: ["design", "content"],
      service_4: ["design"],
      service_5: ["design", "content"],
    },
  },
  design: {
    id: "design",
    name: "design",
    options: ["service_6", "service_7", "service_8"],
  },
  content: {
    id: "content",
    name: "contenu",
    options: ["service_9", "service_10", "service_11", "service_12"],
  },
  application_type: {
    id: "application_type",
    name: "Type d'application",
    options: ["service_13", "service_14", "service_15"],
  },
}

export const services: Array<Service> = [
  {
    id: "service_1",
    name: "site",
    price: 0,
    icon: "fa-solid fa-tv",
    onlyOnce: true,
  },
  {
    id: "service_2",
    name: "application",
    price: 0,
    icon: "fa-solid fa-mobile",
    onlyOnce: true,
  },
  {
    id: "service_3",
    name: "site vitrine",
    price: 100,
    icon: "fa-solid fa-house",
    onlyOnce: true,
  },
  {
    id: "service_4",
    name: "site e-commerce",
    price: 250,
    icon: "fa-solid fa-cart>",
    onlyOnce: true,
  },
  {
    id: "service_5",
    name: "site dynamique",
    price: 300,
    icon: "fa-solid fa-comments",
    onlyOnce: true,
  },
  {
    id: "service_6",
    name: "mobile",
    price: 100,
    icon: "fa-solid fa-mobile",
    onlyOnce: true,
  },
  {
    id: "service_7",
    name: "desktop",
    price: 0,
    icon: "fa-solid fa-laptop",
    onlyOnce: true,
  },
  {
    id: "service_8",
    name: "responsive",
    price: 150,
    icon: "fa-solid fa-laptop",
    onlyOnce: true,
  },
  {
    id: "service_9",
    name: "landing page",
    price: 150,
    icon: "fa-solid fa-table>",
    onlyOnce: false,
  },
  {
    id: "service_10",
    name: "galerie",
    price: 100,
    icon: "fa-solid fa-images",
    onlyOnce: true,
  },
  {
    id: "service_11",
    name: "formulaire de devis",
    price: 100,
    icon: "fa-brands fa-wpforms",
    onlyOnce: false,
  },
  {
    id: "service_12",
    name: "formulaire de contact",
    price: 50,
    icon: "fa-regular fa-address>",
    onlyOnce: false,
  },
  {
    id: "service_13",
    name: "financier",
    price: 1500,
    icon: "fa-solid fa-chart>",
    onlyOnce: false,
  },
  {
    id: "service_14",
    name: "portfolio",
    price: 1000,
    icon: "fa-solid fa-note>",
    onlyOnce: false,
  },
]
