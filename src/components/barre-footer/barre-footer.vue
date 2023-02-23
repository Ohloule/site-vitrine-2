<template>
  <footer class="barre-footer">
    <div class="coordonnees site_fabrication">
      <div class="nom">Laboratoire AJC Pharma</div>
      <div class="adress">
        Usine de Fontaury<br />16120 Chateauneuf sur Charente
      </div>
      <div class="tel">+33 5 45 66 64 64</div>
      <div class="type">Site de production</div>
    </div>
    <div class="coordonnees site_siège">
      <div class="nom">Laboratoire AJC Pharma</div>
      <div class="adress">16 rue Brey<br />75017 Paris</div>
      <div class="tel">+33 1 58 05 09 30</div>
      <div class="type">Siège social</div>
    </div>
    <router-link to="/" class="logo"></router-link>
  </footer>
</template>

<script>
export default {
  name: "barre-footer",
};
</script>

<style src="./barre-footer.scss" lang="scss" scoped></style>
