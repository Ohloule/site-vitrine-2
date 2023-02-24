<template>
  <section class="container">
    <div class="content">
      <h2>La production d'AJC Pharma</h2>
      <div class="information_container">
        <div class="information_content">
          <h3>Notre objectif</h3>
          <p>
            Apporter à nos clients le meilleur service et la garantie de la
            qualité de nos productions dans le respect des délais et avec une
            grande réactivité.
          </p>
        </div>
      </div>
      <div class="card_container">
        <div class="card" :key="valeur" v-for="valeur in valeurs">
          <div class="numero">{{ valeur.chiffre }}</div>
          <div class="texte">
            {{ valeur.unite }}
          </div>
          <div class="texte">
            {{ valeur.texte }}
          </div>
        </div>
      </div>
      <div class="information_container">
        <div class="information_content">
          <h3>Nos valeurs</h3>
          <p>
            Sous-traitant pharmaceutique, nous avons investi dans l’usine de
            Chateauneuf au niveau du matériel et de l’environnement pour
            répondre aux normes BPF et aux besoins de nos clients (produits
            pharmaceutiques et compléments alimentaires) en termes de qualité,
            de réactivité et de souplesse.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "capacite-component",
  data() {
    return {
      valeurs: [
        {
          chiffre: 1300,
          unite: `millions`,
          texte: ` de comprimés`,
        },
        {
          chiffre: 160,
          unite: `tonnes de`,
          texte: `comprimés pelliculés`,
        },
        {
          chiffre: 80,
          unite: `tonnes de`,
          texte: `comprimés dragéifiés`,
        },
        {
          chiffre: 285,
          unite: `millions`,
          texte: `de gélules`,
        },
        {
          chiffre: 120,
          unite: `tonnes`,
          texte: `de poudre`,
        },
      ],
    };
  },
};
</script>

<style src="./capacite-component.scss" lang="scss" scoped></style>
