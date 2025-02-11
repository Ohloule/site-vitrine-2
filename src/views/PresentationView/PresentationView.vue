<template>
  <h1>Découvrir le laboratoire AJC PHARMA</h1>
  <div class="container quisommesnous">
    <img
      src="../../assets/usine.jpg"
      alt="Usine AJC Pharma à Chateauneuf sur Charente vue du ciel"
      class="img-site"
    />
    <div class="texte">
      <h2>Qui sommes nous ?</h2>
      <p>
        Le <strong>LABORATOIRE AJC PHARMA</strong> est un sous traitant
        pharmaceutique aussi appelé
        <strong>CDMO (Contract Development Manufacturing Organisations)</strong
        >. Notre cœur de métier est la fabrication et le conditionnement de
        médicaments <strong>à échelle industrielle</strong>.
      </p>
      <p>
        Le <strong>LABORATOIRE AJC PHARMA</strong>, situé à Chateauneuf Sur
        Charente, entre Cognac et Angoulême, est au départ, une usine
        appartenant à un laboratoire pharmaceutique qui l’a revendue dans les
        années 1980 à des investisseurs privés, ces derniers la cèdant en 2001 à
        l’équipe actuelle.
      </p>
      <p>
        C’est donc depuis plus de 50 ans, que le
        <strong> laboratoire AJC PHARMA </strong> peut affirmer son expertise
        dans le domaine de la fabrication en sous-traitance de produits
        pharmaceutiques de forme sèche : poudres, granulés, comprimés nus,
        pelliculés ou dragéifiés et gélules.
      </p>
      <p>
        De 2001 à 2006, plus de 3 millions d’euros ont été investis pour une
        refonte complète de l’usine afin de respecter les normes les plus
        modernes de <strong>Bonnes Pratiques de Fabrication (BPF)</strong>. En
        2006, une nouvelle tranche de travaux de plus d’un million d’euros est
        lancée afin d’augmenter les capacités de conditionnement et le stockage
        des produits fabriqués pour le compte des clients du
        <strong> laboratoire AJC PHARMA </strong>.
      </p>
      <p>Sur ce terrain de 2 hectares, les bâtiments représentent 8 200m² :</p>
      <ul>
        <li>Production : 4 500 m²</li>
        <li>Stockage : 3 000 m²</li>
        <li>Contrôle et administration : 700 m²</li>
      </ul>
    </div>
    <div class="card-group">
      <div class="card">
        <h2>Les capacités de productions</h2>
        <p>1,3 milliard de comprimés</p>
        <p>285 millions de gélules</p>
        <p>160 t de comprimés pelliculés</p>
        <p>80 t de dragées</p>
        <router-link class="lien" to="/production"
          ><span @click="remonte()">La production AJC &rarr;</span></router-link
        >
      </div>
      <div class="card">
        <h2>Les domaines d'expertise</h2>
        <p>L''assurance qualité</p>
        <p>Le laboratoire d'analyse</p>
        <p>Le développement industriel</p>
        <p>La réactivité et la flexibilité</p>
        <router-link class="lien" to="/services"
          ><span @click="remonte()">Les services AJC &rarr;</span>
        </router-link>
      </div>
    </div>
  </div>
  <section class="container container_adresse">
    <div class="content_adresse">
      <div class="texte">
        <h2>Nous trouver</h2>
        <h3>Notre site de fabrication</h3>
        <p>
          Le laboratoire AJC Pharma se situe au coeur de la région Charentaise,
          dans le bassin d'Angoulême, à Chateauneuf sur Charente.
        </p>
        <p>
          La situation géographique, au coeur de l'axe Paris-Bordeaux, nous
          permet une flexibilité pour l'approvisionnement et la livraison des
          produits.
        </p>
        <!--         <h3>Notre siège social</h3>
        <p>
          Le siège social est basé à Paris dans le 17ème arrondissement, 16 rue
          Brey.
        </p> -->
      </div>
      <div class="carte">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5747.361498724798!2d-0.06659685542718519!3d45.5931046456202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48007e1e7e08ad7f%3A0x5263bcf33b6cb1a8!2sAJC%20PHARMA!5e0!3m2!1sfr!2sfr!4v1649940502612!5m2!1sfr!2sfr"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <router-link class="lien liens" to="/contact"
      ><span @click="remonte()">Nous contacter &rarr;</span>
    </router-link>
  </section>
  <section class="container container_adresse">
    <div class="content_adresse">
      <div class="texte">
        <h2>L'indice égalité Hommes-Femmes 2025</h2>
        <div class="content-mixite">
          <img
            src="../../assets/indiceMixite.png"
            alt="Usine AJC Pharma à Chateauneuf sur Charente vue du ciel"
            class="img-mixite"
          />
          <div class="mixite-text">
            <p>
              Le Laboratoire AJC PHARMA s’engage activement au quotidien pour promouvoir l’égalité entre les femmes et les hommes. Cet engagement s’inscrit dans sa démarche RSE globale et constitue l’une des quatre priorités de sa politique en matière de diversité, aux côtés de l’inclusion des personnes en situation de handicap, de la diversité culturelle et de l’intégration sociale.
            </p>
            <p>
              Convaincu que l’égalité professionnelle favorise à la fois l’enrichissement collectif et la performance durable, AJC PHARMA considère la mixité comme un enjeu central de sa politique sociale. Au-delà de la publication annuelle des indicateurs de l’index d’égalité, l’entreprise s’efforce d’améliorer continuellement ses actions en faveur de l’équité professionnelle, contribuant ainsi à un progrès social durable.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import userImage from "../../assets/user.svg";
export default {
  name: "presentation-view",
  methods: {
    remonte() {
      window.scrollTo(0, 0);
    },
  },
  data() {
    return {
      personnel: [
        {
          nom: "COREE-DEBOMY Yves",
          fonction: "Président Directeur Général",
          image: userImage,
        },
        {
          nom: "GRINGORE Brigitte",
          fonction: "Directrice financière",
          image: userImage,
        },
        {
          nom: "DUPUY Jean-Claude",
          fonction: "Pharmacien Responsable Intérimaire",
          image: userImage,
        },
        {
          nom: "LAYANI Louis-Manuel",
          fonction: "Pharmacien Responsable",
          image: userImage,
        },
        {
          nom: "BREHIN Mathilde",
          fonction: "Pharmacien Responsable Intérimaire",
          image: userImage,
        },
        {
          nom: "RICHARD Lydie",
          fonction: "Responsable logistique",
          image: userImage,
        },
        {
          nom: "LAURENT Sandy",
          fonction: "Responsable Laboratoire",
          image: userImage,
        },
      ],
    };
  },
};
</script>

<style src="./PresentationView.scss" lang="scss" scoped></style>
