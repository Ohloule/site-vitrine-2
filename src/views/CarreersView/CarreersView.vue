<template>
  <div class="carreers-view">
    <div class="offre_container offre_container_entete">
      <div class="offre_content">
        <h2>LABORATOIRE AJC PHARMA</h2>
        <h3>Rejoignez nos équipes</h3>
      </div>
    </div>

    <div
      :key="offre"
      v-for="offre in offres"
      class="offre_container offre_container_proposition"
    >
      <div class="offre_content">
        <div class="texte">
          <h3>{{ offre.titre }}</h3>
          <p class="description">
            {{ reductionMot(offre.description) + " [...]" }}
          </p>
        </div>
        <div class="boutons">
          <div
            @click="
              popupVisible(
                offre.titre,
                offre.description,
                offre.horaire,
                offre.price
              )
            "
            class="voir_offre"
          >
            Voir l'offre
          </div>
          <router-link
            :to="{
              name: 'candidature_spontanee',
              params: { titreOffre: offre.titre },
            }"
            class="postuler"
            >Postuler</router-link
          >
        </div>
      </div>
    </div>

    <div class="offre_container offre_container_entete">
      <div class="offre_content">
        <h2>TENTEZ L'AVENTURE AJC PHARMA</h2>
        <router-link
          :to="{
            name: 'candidature_spontanee',
            params: { titreOffre: 'Candidature spontanée' },
          }"
          class="candidature_spontanee"
          >Déposer votre candidature</router-link
        >
      </div>
    </div>
    <div @click="popup.visible = false" v-if="popup.visible" class="popup">
      <div  class="container">
        <div class="content">
          <div @click="popup.visible = false" class="fermeture">x</div>
          <h2>{{ popup.titre }}</h2>
          <h3>Description</h3>
          <p class="popup_description">{{ popup.description }}</p>
          <h3>Horaire</h3>
          <p class="popup_horaire">Horaires : {{ popup.horaire }}</p>
          <h3>Rémunération</h3>
          <p class="popup_price">{{ popup.price }}</p>
          <div class="postuler_container">
            <router-link
              :to="{
                name: 'candidature_spontanee',
                params: { titreOffre: popup.titre },
              }"
              class="postuler"
              >Postuler</router-link
            >
          </div>
        </div>
        <div class="ligne"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CarreersView",
  data() {
    return {
      popup: {
        titre: "",
        description: "",
        salaire: "",
        price: "",
        visible: false,
      },
      offres: [
        {
          titre: "Technicien de maintenance",
          description:
            "Sur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintenance de 1er niveau des équipements de fabrication Participer au maintien de partie documentaire (dossiers de lots, procédures) Nettoyage et entretien des équipements, matériel et locaux de fabrication",
          horaire: "Journée ou posté (2 x 8)",
          price: "Selon profil",
        },
        {
          titre: "Technicien de laboratoire",
          description:
            "Sur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintenance de 1er niveau des équipements de fabrication Participer au maintien de partie documentaire (dossiers de lots, procédures) Nettoyage et entretien des équipements, matériel et locaux de fabrication",
          horaire: "Journée ou Posté (2 x 8)",
          price: "Selon profil",
        },
        {
          titre: "Pharmacien",
          description:
            "Sur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintenance de 1er niveau des équipements de fabrication Participer au maintien de partie documentaire (dossiers de lots, procédures) Nettoyage et entretien des équipements, matériel et locaux de fabricationSur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintenance de 1er niveau des équipements de fabrication Participer au maintien de partie documentaire (dossiers de lots, procédures) Nettoyage et entretien des équipements, matériel et locaux de fabricationSur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintenance de 1er niveau des équipements de fabrication Participer au maintien de partie documentaire (dossiers de lots, procédures) Nettoyage et entretien des équipements, matériel et locaux de fabricationSur nos ateliers de  Chateauneuf sur Charente, vous serez amené à : Assurer les opérations de maintenance correctives au quotidien Participer à la fabrication des produits dans les délais imposés par le planning hebdomadaire de production, dans le respect des procédures qualité et de la sécurité. Réalisation les opérations de maintena",
          horaire: "Journée ou posté (2 x 8) ",
          price: "Selon profil",
        },
      ],
    };
  },
  methods: {
    popupVisible(titre, description, horaire, price) {
      this.popup.titre = titre;
      this.popup.description = description;
      this.popup.horaire = horaire;
      this.popup.price = price;
      this.popup.visible = true;
    },
    reductionMot(description) {
      let retour = "";
      for (var i = 0; i < description.split(" ").length; i++) {
        if (i < 34) {
          retour = retour + " " + description.split(" ")[i];
        }
      }
      return retour;
    },
  },
};
</script>

<style src="./CarreersView.scss" lang="scss" scoped></style>
