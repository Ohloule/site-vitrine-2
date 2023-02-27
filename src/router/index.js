//import { createRouter, createWebHistory } from "vue-router";
import { createRouter } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";
import PresentationView from "../views/PresentationView/PresentationView.vue";
import ProductionView from "../views/ProductionView/ProductionView.vue";
import ServiceView from "../views/ServiceView/ServiceView.vue";
import ContactView from "../views/ContactView/ContactView.vue";
import CarreersView from "../views/CarreersView/CarreersView.vue";
import candidature_spontanee from "../views/CarreersView/candidature_spontanee/candidature_spontanee.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/presentation",
    name: "Présentation",
    component: PresentationView,
  },
  {
    path: "/services",
    name: "Services Pharmaceutiques",
    component: ServiceView,
  },
  {
    path: "/production",
    name: "Production Pharmaceutique",
    component: ProductionView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  {
    path: "/rejoignez-nous",
    name: "Carrières",
    component: CarreersView,
    props: true,
  },
  {
    path: "/rejoignez-nous/candidature",
    name: "candidature_spontanee",
    component: candidature_spontanee,
    props: true,
  },
];

const router = createRouter({
  mode: 'history',
//  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let namedefaut = "Laboratoire AJC Pharma";
  let namedefaut2 = "AJC Pharma";
  if (to.name === "home") {
    document.title = namedefaut ;
  } else if (to.name === "candidature_spontanee") {
    document.title = namedefaut2 + " - " + "Candidature";
  } else {
    document.title = namedefaut2 + " - " +to.name;
  }
  next();
});

export default router;
