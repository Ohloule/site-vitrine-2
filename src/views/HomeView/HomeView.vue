<template>
  <div class="home">
    <div class="info-container">
      <h1>Laboratoire AJC Pharma</h1>
      <p>
        Le laboratoire AJC Pharma est une entreprise pharmaceutique spécialisée
        en sous-traitance de la fabrication de médicaments pour le compte
        d’autres laboratoires.
      </p>
      <p>
        Nous assurons la fabrication et le conditionnement de divers produits
        dans les domaines pharmaceutique, homéopathique, cosmétique et des
        compléments alimentaires.
      </p>
      <router-link to="/presentation" class="lilien"><span class="lien">Découvrir AJC Pharma &rarr;</span></router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>

<style src="./HomeView.scss" lang="scss" scoped></style>
