<template>
  <h2>Le développement industriel</h2>
  <!--   /////////////////La granulation /////////////////////////// -->
  <div class="ensemble_production">
    <div class="container">
      <div class="content content_image">
        <div class="bordure"></div>
        <div class="image image_developpement"></div>
      </div>

      <div class="content content_texte">
        <h3>Vous accompagner à chaque changement</h3>
        <p>
          Le laboratoire AJC Pharma, fort de sa longue expérience, connait
          parfaitement son équipement industriel. Ses dimensions à taille
          moyenne permettent un grande flexibilité et réactivité afin d'assurer
          au mieux le passage à l'industrialisation.
        </p>
        <p>
          Nos experts restent à votre écoute et leurs connaissances du terrain
          interviennent tout au long du développement. Cela nous permet de
          fabriquer vos produits dans des conditions optimales.
        </p>

        <p>
          <router-link class="liens" to="/production"
            ><span @click="remonte()" class="lien"
              >La production AJC Pharma &rarr;</span
            ></router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indus-component",
  methods: {
    remonte() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style src="./indus-component.scss" lang="scss" scoped></style>
