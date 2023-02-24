<template>
  <nav id="barre-navigation">
    <div class="nav-container">
      <div class="logo-container">
        <a href="/"
          ><img src="../../assets/ajc_logo_blanc.png" alt="Logo Ajc Pharma"
        /></a>
      </div>
      <ul class="links-container">
        <li class="link-item"><a href="/">Ajc Pharma</a></li>
        <li class="link-item">
          <router-link to="/presentation">A propos</router-link>
        </li>
        <li class="link-item"><router-link to="/production">Production</router-link></li>
        <li class="link-item"><router-link to="/services">Services</router-link></li>
        <li class="link-item"><router-link to="/rejoignez-nous">Nous rejoindre</router-link></li>
        <li class="link-item"><router-link to="/contact">Contact</router-link></li>
      </ul>
      <div @click="ouvrirMenu()" class="burger-menu-btn-container">
        <div class="burger-menu-btn"></div>
      </div>
    </div>
  </nav>
  <div class="modal">
    <ul class="links-container-modal">
      <li class="link-item-modal" @click="ouvrirMenu() "><router-link to="/">Accueil</router-link></li>
      <li class="link-item-modal" @click="ouvrirMenu() "><router-link to="/presentation">A Propos</router-link></li>
      <li class="link-item-modal" @click="ouvrirMenu() "><router-link to="/production">Production</router-link></li>
      <li class="link-item-modal" @click="ouvrirMenu() "><router-link to="/services">Services</router-link></li>
      <li class="link-item-modal" @click="ouvrirMenu() ">
        <router-link to="/rejoignez-nous">Nous rejoindre</router-link>
      </li>
      <li class="link-item-modal" @click="ouvrirMenu() "><router-link to="/contact">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "barre-navigation",
  data() {
    return {};
  },
  methods: {
    ouvrirMenu() {
      const btnBurger = document.querySelector(".burger-menu-btn");
      const modal = document.querySelector(".modal");
      btnBurger.classList.toggle("active");
      modal.classList.toggle("active");
    },
  },
};
</script>

<style src="./barre-navigation.scss" lang="scss" scoped></style>
