<template>
  <div class="service">
    <h1 class="pages">AJC Pharma au service de vos produits et de vos besoins</h1>
    <section class="container1">
      <a href="#assurance">
        <div class="card">
          <h2>
            Assurance <br />
            Qualité
          </h2>
          <div class="image image_assurance"></div>
          <ul>
            <li>Qualité Hygiène</li>
            <li>Sécurité Envionnement</li>
            <li>Amélioration continue</li>
            <li>Réactivité</li>
            <li>Transparence</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
      <a href="#analyse">
        <div class="card">
          <h2>
            Prestations <br />
            analytiques
          </h2>
          <div class="image image_analyse"></div>
          <ul>
            <li>Nouvelles méthodes</li>
            <li>HPLC</li>
            <li>Spectrométrie</li>
            <li>Matière première</li>
            <li>Aide à la production</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
      <a href="#developpement">
        <div class="card">
          <h2>Développement industriel</h2>
          <div class="image image_developpement"></div>
          <ul>
            <li>Savoir faire</li>
            <li>Expérience</li>
            <li>Nouveaux produits</li>
            <li>Adaptabilité</li>
            <li>Accompagnement</li>
          </ul>
          <p class="ensavoir">En savoir plus &rarr;</p>
        </div>
      </a>
      
    </section>
    
    <section class="sous-parties">
      <div class="transition_ligne" id="assurance"></div>
      <aq-component></aq-component>
      <div class="transition_ligne" id="analyse"></div>
      <cq-component></cq-component>
      <div class="transition_ligne" id="developpement"></div>
      <indus-component></indus-component>
      
    </section>
  </div>
</template>

<script>
import AQComponent from "../../components/AQ-component/AQ-component.vue";
import CQComponent from "../../components/CQ-component/CQ-component.vue";
import indusComponent from "../../components/indus-component/indus-component.vue";

export default {
  name: "ServiceView",
  components: {
    "aq-component": AQComponent,
    "cq-component": CQComponent,
    "indus-component": indusComponent,
  },
};
</script>

<style src="./ServiceView.scss" lang="scss" scoped></style>
