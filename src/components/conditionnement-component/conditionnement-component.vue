<template>
  <div class="container">
    <div class="content">
      <h2>Le conditionnement chez AJC Pharma</h2>

      <div class="formes_container">
        <div class="formes_content">
          <h3>Les formes de conditionnements</h3>
          <div class="card_container">
            <div class="card card_pvcalu">
              <div class="texte">
                <p>Blister Polymère sur Aluminium</p>
              </div>
            </div>
            <!-- <div class="card card_alualu">
              <div class="texte">
                <p>Blister Aluminium sur Aluminium</p>
              </div>
            </div> -->
            <div class="card card_pot">
              <div class="texte">
                <p>Pot et poudreurs</p>
              </div>
            </div>
            <div class="card card_tube">
              <div class="texte">
                <p>Mise en tube</p>
              </div>
            </div>
            <div class="card card_etui">
              <div class="texte">
                <p>Mise en étui</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="machines_container">
        <div class="machines_content">
          <h3>Nos équipements de conditionnement</h3>
          <div class="contenu">
            <div class="texte">
              <div class="texte_content">
                <h4>MISE SOUS BLISTER ET ETUI</h4>
                <ul>
                  <li>2 lignes NOACK</li>
                  <li>2 lignes IMA</li>
                  <li>2 lignes de sérialisations</li>
                </ul>
              </div>
              <div class="texte_content">
                <h4>MISE EN TUBE ET ETUI</h4>
                <ul>
                  <li>1 ligne VASQUALI</li>
                  <li>1 BOULANT</li>
                  <li>1 KING</li>
                </ul>
              </div>
            </div>
            <div class="sliders">
              <div class="img img_1"></div>
              <div class="img img_2"></div>
              <div class="img img_3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="serialisation_container">
        <div class="serialisation_content">
          <h3>La sérialisation et inviolabilité</h3>
          <div class="flex_container">
            <div class="texte">
              <p>
                À chaque étape de vie du médicament, il devient nécessaire de
                créer et appliquer des méthodes qui permettent de combattre la
                contrefaçon.
              </p>
              <p>
                L’apparition des nouvelles technologies d’encodage comme les
                codes à barres Data Matrix ou des codes plus sophistiqués
                permettent une authentification du médicament tout au long de
                son circuit. La sérialisation, rendue obligatoire pour les
                médicaments par la directive Européenne 2011/62/EU, est une
                méthode qui apparaît comme efficace dans la lutte contre la
                contrefaçon.
              </p>
              <p>
                Le laboratoire AJC Pharma s'est adapté et nos systèmes utilisent
                les standards GS1 pour l’identification des médicaments. Nous
                assurons la transmission des numéros de série auprès de nos
                partenaires et de l’Organisation Européenne de Vérification des
                Médicaments (EMVO) par l’intermédiaire d’une plate-forme
                internationale.
              </p>
            </div>
            <div class="datamatrix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "conditionnement-component",
};
</script>

<style src="./conditionnement-component.scss" lang="scss" scoped></style>
