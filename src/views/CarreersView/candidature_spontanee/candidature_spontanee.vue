<template>
  <div class="contact">
    <h1>Canditatez ici <span v-if="titredeOffrevide">et intégrer bientot AJC Pharma</span> <span v-if="!titredeOffrevide"> - {{titredeOffre}}</span></h1>
    <form
      ref="form"
      autocomplete="off"
      @submit.prevent="sendEmail"
      class="formulaire"
    >
      <div class="inputbox nom">
        <input
          type="text"
          required="required"
          name="to_name"
          placeholder="Nom"
          v-model="donneeFormulaire.nom"
        />
      </div>
      <div class="inputbox prenom">
        <input
          type="text"
          required="required"
          v-model="donneeFormulaire.prenom"
          name="to_firstname"
          placeholder="Prénom"
        />
      </div>
      <div class="inputbox telephone">
        <input
          type="text"
          name="to_phone"
          required="required"
          v-model="donneeFormulaire.phone"
          placeholder="Téléphone"
        />
      </div>
      <div class="inputbox mail">
        <input
          type="text"
          required="required"
          name="to_mail"
          v-model="donneeFormulaire.mail"
          placeholder="Adresse e-mail"
        />
      </div>
      <div class="inputbox linkedin">
        <input
          type="text"
          name="to_lk"
          v-model="donneeFormulaire.lk"
          placeholder="Copier l'URL de votre profil Linkedin"
        />
      </div>
      <div style="display: none" class="inputbox offre">
        <input
          type="text"
          name="to_offre"
          @click="afficher"
          v-model="titredeOffre"
          placeholder="Renseigner l'offre"
        />
      </div>
      <div class="inputbox message">
        <textarea
          name="message"
          v-model="donneeFormulaire.message"
          cols="30"
          rows="14"
          required="required"
          placeholder="Faites nous part de vos motivations ?"
          class="ma"
        ></textarea>
      </div>
      <!--  <div class="importer_document">
        <div class="file-upload">
          <input
            class="file-upload__input"
            type="file"
            name="myFile[]"
            id="myFile"
          />
          <button class="file-upload__button" type="button">Importer CV</button>
          <span class="file-upload__label"></span>
        </div>
        <div class="file-upload">
          <input
            class="file-upload__input"
            type="file"
            name="myFile[]"
            id="myFile"
          />
          <button class="file-upload__button" type="button">
            Importer lettre de motivation
          </button>
          <span class="file-upload__label"></span>
        </div>
      </div>-->

      <input
        type="submit"
        id="btn_envoyer"
        class="btn_envoyer"
        value="ENVOYER VOTRE MESSAGE"
      />
    </form>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  name: "candidature-spontanee",
  mounted() {
    this.titredeOffre = this.$route.params.titreOffre;
    if (this.titredeOffre === "" ) {
      this.titredeOffrevide = true
    } else {
      this.titredeOffrevide = false
    }
    window.scroll(0, 0);
  },
  data() {
    return {
      donneeFormulaire: {
        lk: "",
        nom: "",
        prenom: "",
        mail: "",
        phone: "",
        message: "",
      },
      titredeOffre: "",
      titredeOffrevide : false,
    };
  },

  methods: {
    // boutonUpload() {
    //   Array.prototype.forEach.call(
    //     document.querySelectorAll(".file-upload__button"),
    //     function (button) {
    //       const hiddenInput = button.parentElement.querySelector(
    //         ".file-upload__input"
    //       );
    //       const label = button.parentElement.querySelector(
    //         ".file-upload__label"
    //       );
    //       const defaultLabelText = "Aucun document importé";

    //       // Set default text for label
    //       label.textContent = defaultLabelText;
    //       label.title = defaultLabelText;

    //       button.addEventListener("click", function () {
    //         hiddenInput.click();
    //       });

    //       hiddenInput.addEventListener("change", function () {
    //         const filenameList = Array.prototype.map.call(
    //           hiddenInput.files,
    //           function (file) {
    //             return file.name;
    //           }
    //         );

    //         label.textContent = filenameList.join(", ") || defaultLabelText;
    //         label.title = label.textContent;
    //       });
    //     }
    //   );
    // },

    sendEmail() {
      document.getElementById("btn_envoyer").style.opacity = "0";
      var securite = true;
      let formulaireArray = Object.values(this.donneeFormulaire);
      for (var i = 0; i < formulaireArray.length; i++) {
        if (formulaireArray[i].length === 0) {
          securite = false;
        }
      }
      if (securite) {
        emailjs
          .sendForm(
            "service_szj9mog",
            "template_g8ci81h",
            this.$refs.form,
            "uVPqf9noHKhJG1KIw"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              alert(
                "L'équipe AJC Pharma vous remercie pour votre message, nous reviendrons vers vous dans les meilleurs délais !"
              );
              window.location.reload();
            },
            (error) => {
              console.log("FAILED...", error.text);
              document.getElementById("btn_envoyer").style.opacity = "1";
            }
          );
      } else {
        alert("Merci de remplir toutes les données du formulaire svp");
      }
    },
  },
};
</script>

<style src="./candidature_spontanee.scss" lang="scss" scoped></style>
