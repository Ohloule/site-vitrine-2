<template>
  <footer class="barre-footer">
    <div class="coordonnees site_fabrication">
      <div class="nom">Laboratoire AJC Pharma</div>
      <div class="adress">
        Usine de Fontaury<br />16120 Chateauneuf sur Charente
      </div>
      <div class="tel">+33 5 45 66 64 64</div>
      <div class="type">Siège social et Usine</div>
    </div>
    <div class="coordonnees site_siège">
      
      <div class="adress">Mail : usine@ajcpharma.com</div>
      <div class="adress">Livraison/Réception : 8h-16h</div>
      <div class="adress">Secrétariat : 8h30-17h30</div>
      <div class="tel">Astreinte : 06 95 16 17 74</div>
      <div class="type">Contact et Horaires</div>
    </div>
    <router-link to="/" class="logo"></router-link>
  </footer>
  <div class="infos-bar">
    <ul>
      <li>© {{ currentYear }} Laboratoire AJC Pharma. Tous droits réservés.</li>
      <li @click="popupml()">Mentions légales</li>
      <li @click="popupconfid()">Politique de confidentialité</li>
    </ul>
  </div>
  <div class="mentionslegales" @click="popupml()" v-if="ml">
    <h3>Editeurs du site</h3>
    <p>Laboratoire AJC Pharma</p>
    <p>Usine de Fontaury, 16120 Chateauneuf sur Charente</p>
    <p>S.A.S au capital de 600 000€</p>
    <h3>Hébergement</h3>
    <p>Hostinger</p>
    <p>Siège social est situé HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 6023 Larnaca, Chypre, joignable par le moyen suivant : </p>
    <p>https://www.hostinger.fr/contact</p>
    <h3>Développement</h3>
    <p>Louis-Manuel LAYANI</p>
    <h3>Propriété intellectuelle</h3>
    <p>
      De manière générale, les textes, les informations, les logos, les
      identités visuelles, apparaissant sur le Site sont la propriété d'AJC
      Pharma et sont protégées à ce titre par les dispositions du Code de la
      propriété intellectuelle.
    </p>
    <p>
      L’internaute s’engage à faire un usage personnel et non commercial des
      informations contenues sur le Site. En cas de non-respect des dispositions
      des présentes mentions légales, par l’internaute, sa responsabilité civile
      et/ou pénale pourrai(en)t se voir engagée(s).
    </p>
    <p class="fermeture">Cliquer pour fermer</p>
  </div>
  <div class="mentionslegales" @click="popupconfid()" v-if="confid">
    <h3>Utilisation des données personnelles collectées</h3>
    <p>Aucune information personnelle n’est collectée à votre insu.</p>

    <h3>Formulaire de contact</h3>
    <p>
      Les messages électroniques comprenant vos coordonnées sont exploités
      uniquement pour répondre à vos demandes. Les informations sont conservées
      en interne.
    </p>

    <h3>Utilisation et transmission de vos données personnelles</h3>
    <p>Aucune information personnelle n’est cédée à des tiers.</p>

    <h3>Sécurité des données</h3>
    <p>
      Notre site bénéficie d’un certificat SSL fourni par PlanetHoster, les
      échanges de données sont cryptés. Notre site est hébergé chez
      Hostinger, vous pouvez consulter leurs CGV.
    </p>
    <p class="fermeture">Cliquer pour fermer</p>
  </div>
</template>

<script>
export default {
  name: "barre-footer",
  mounted(){
    const now = new Date();
    this.currentYear = now.getFullYear()
  },

  data() {
    return {
      ml: false,
      confid: false,
      currentYear: ""
    };
  },
  methods: {
    popupml() {
      if (this.ml) {
        this.ml = false;
        document.body.style.overflow = "";
      } else {
        this.ml = true;
        document.body.style.overflow = "hidden";
      }
    },
    popupconfid() {
      if (this.confid) {
        this.confid = false;
        document.body.style.overflow = "";
      } else {
        this.confid = true;
        document.body.style.overflow = "hidden";
      }
    },
  },
};
</script>

<style src="./barre-footer.scss" lang="scss" scoped></style>
