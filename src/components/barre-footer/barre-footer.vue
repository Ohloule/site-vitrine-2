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
  <div class="infos-bar">
    <ul>
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
    <p>PlanetHoster</p>
    <p>4416 Louis-B.-Mayer Laval, Québec Canada H7P 0G1</p>
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
      Notre site bénéficie d’un certificat SSL fourni par o2switch, les échanges
      de données sont cryptés. Notre site est hébergé chez planethoster, vous
      pouvez consulter leurs CGV.
    </p>
  </div>
</template>

<script>
export default {
  name: "barre-footer",
  data() {
    return {
      ml: false,
      confid: false,
    };
  },
  methods: {
    popupml() {
      if (this.ml) {
        this.ml = false;
      } else {
        this.ml = true;
      }
    },
    popupconfid() {
      if (this.confid) {
        this.confid = false;
      } else {
        this.confid = true;
      }
    },
  },
};
</script>

<style src="./barre-footer.scss" lang="scss" scoped></style>
