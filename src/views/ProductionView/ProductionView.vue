<template>
  <div @scroll="posScroll" class="production">
    <a v-if="flecheHaut" href="#barre-navigation" class="container-uparr"
      ><div class="uparr">&uarr;</div></a
    >
    <h1 class="pages">
      La production pharmaceutique <br />
      d'AJC Pharma
    </h1>
    <section class="container1">
      <a href="#capacite">
        <div class="card">
          <h2>
            Capacités <br />
            de production
          </h2>
          <div class="image image_capacite"></div>
          <ul>
            <li>Poudre en vrac</li>
            <li>Comprimés nus</li>
            <li>Comprimés dragéifiés</li>
            <li>Comprimés pelliculés</li>
            <li>Gélules</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
      <a href="#fabrication">
        <div class="card">
          <h2>Fabrication pharmaceutique</h2>
          <div class="image image_fabrication"></div>
          <ul>
            <li>Mélange à sec</li>
            <li>Granulation humide</li>
            <li>Compression</li>
            <li>Pelliculage</li>
            <li>Dragéification</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
      <a href="#conditionnement">
        <div class="card">
          <h2>Conditionnement primaire et secondaire</h2>
          <div class="image image_conditionnement"></div>
          <ul>
            <li>Blister PVC/aluminium</li>
            <li>Blister aluminium</li>
            <li>Pot / Poudreur</li>
            <li>Mise en tube</li>
            <li>Mise en étui</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
    </section>

    <section class="sous-parties">
      <div class="transition_ligne" id="capacite"></div>

      <capacite-component></capacite-component>
      <div class="transition_ligne" id="fabrication"></div>

      <fabrication-component></fabrication-component>
      <div class="transition_ligne" id="conditionnement"></div>

      <conditionnement-component></conditionnement-component>
    </section>
  </div>
</template>

<script>
import fabricationComponent from "../../components/fabrication-component/fabrication-component.vue";
import capaciteComponent from "../../components/capacite-component/capacite-component.vue";
import conditionnementComponent from "../../components/conditionnement-component/conditionnement-component.vue";
export default {
  name: "ProductionView",
  components: {
    "fabrication-component": fabricationComponent,
    "capacite-component": capaciteComponent,
    "conditionnement-component": conditionnementComponent,
  },
  created() {
    window.addEventListener("scroll", this.posScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.posScroll);
  },
  methods: {
    posScroll() {
      this.scrollY = window.scrollY;
      if (this.scrollY < 200) {
        this.flecheHaut = false;
      } else {
        this.flecheHaut = true;
      }
    },
  },
  data() {
    return {
      scrollY: 0,
      flecheHaut: false,
    };
  },
};
</script>

<style src="../ServiceView/ServiceView.scss" lang="scss" scoped></style>
