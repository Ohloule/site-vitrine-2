<template>
  <div class="contact">
    <h1>Nous contacter</h1>
    <form
      ref="form"
      autocomplete="off"
      @submit.prevent="sendEmail"
      class="formulaire"
    >
      <div class="inputbox societe">
        <input
          type="text"
          name="to_society"
          v-model="donneeFormulaire.societe"
          placeholder="Société"
        />
      </div>
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
      <div class="inputbox mail">
        <textarea
          name="message"
          v-model="donneeFormulaire.message"
          cols="30"
          rows="14"
          required="required"
          placeholder="Comment pouvons-nous vous aider ?"
          class="ma"
        ></textarea>
      </div>
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
  name: "ContactView",

  data() {
    return {
      donneeFormulaire: {
        societe: "",
        nom: "",
        prenom: "",
        mail: "",
        phone: "",
        message: "",
      },
    };
  },
  methods: {
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
            //"service_szj9mog",
            "service_8a6snpa",
            "template_vb4d7tw",
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

<style src="./ContactView.scss" lang="scss" scoped></style>
