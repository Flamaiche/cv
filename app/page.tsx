const formations = [
  {
    periode: "2026 — en cours",
    titre: "BUT informatique, 3e année",
    lieu: "IUT de Lens",
    detail: null,
  },
  {
    periode: "Avril 2026 — 8 semaines",
    titre: "Stage : Avosdim Calculateur",
    lieu: "OpenItech, Cuincy (59553)",
    detail:
      "Création d'un site en PHP Laravel avec récupération et envoi vers une API, et visualisation des données.",
  },
  {
    periode: "2021 — 2024",
    titre: "Baccalauréat général, mention Bien",
    lieu: "Douai",
    detail: null,
  },
];

const projets = [
  {
    periode: "2025",
    tech: "HTML / CSS",
    titre: "Site d'une entreprise d'événementiel",
    detail: "Site statique réalisé en équipe de trois.",
  },
  {
    periode: "2025",
    tech: "Java / JavaFX",
    titre: "BomberMan",
    detail: "Jeu avec interface interactive.",
  },
  {
    periode: "2025",
    tech: "Java / OpenGL",
    titre: "SpaceShooter 3D",
    detail: "Projet personnel en cours : jeu 3D avec moteur graphique propre.",
  },
];

const competences = [
  { categorie: "Programmation", valeurs: ["Java / JavaFX", "OpenGL (Java)", "Python"] },
  { categorie: "Web", valeurs: ["HTML / CSS", "PHP Laravel", "TypeScript"] },
  { categorie: "Bases de données", valeurs: ["MySQL", "PL/PGSQL"] },
  { categorie: "Environnement", valeurs: ["Docker", "Warden"] },
];

const contact = [
  { label: "Courriel", valeur: "hugorichard404@gmail.com", href: "mailto:hugorichard404@gmail.com" },
  { label: "Téléphone", valeur: "07 67 42 12 11", href: "tel:+33667421211" },
  {
    label: "GitHub",
    valeur: "github.com/Flamaiche",
    href: "https://github.com/Flamaiche",
  },
  {
    label: "Portfolio",
    valeur: "flamaiche.github.io/portfolio",
    href: "https://flamaiche.github.io/portfolio/projets.html",
  },
  {
    label: "LinkedIn",
    valeur: "linkedin.com/in/hugo-richard",
    href: "https://www.linkedin.com/in/hugo-richard",
  },
];

export default function Page() {
  return (
    <>
      <a className="allers" href="#contenu">
        Aller au contenu
      </a>
      <div className="page">
        <header className="en-tete">
          <h1>Hugo Richard</h1>
          <p className="objectif">
            Recherche de stage en développement informatique — 14 semaines à partir du 15 mars
          </p>
          <p className="infos">
            20 ans · Permis B et voiture · Cuincy (59553)
          </p>
          <nav aria-label="Coordonnées">
            <ul className="contact">
              {contact.map(({ label, valeur, href }) => (
                <li key={label}>
                  <span>{label} :</span>{" "}
                  <a href={href} title={`${label} de Hugo Richard : ${valeur}`}>
                    {valeur}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main id="contenu">
          <section aria-labelledby="formation-titre">
            <h2 id="formation-titre">Formation</h2>
            <ul className="entries">
              {formations.map(({ periode, titre, lieu, detail }) => (
                <li key={titre}>
                  <p className="periode">{periode}</p>
                  <p className="titre">
                    {titre} <span className="lieu">— {lieu}</span>
                  </p>
                  {detail ? <p className="detail">{detail}</p> : null}
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="projets-titre">
            <h2 id="projets-titre">Projets informatiques</h2>
            <ul className="entries">
              {projets.map(({ periode, tech, titre, detail }) => (
                <li key={titre}>
                  <p className="periode">
                    {tech} · {periode}
                  </p>
                  <p className="titre">{titre}</p>
                  <p className="detail">{detail}</p>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="competences-titre">
            <h2 id="competences-titre">Compétences</h2>
            <dl className="competences">
              {competences.map(({ categorie, valeurs }) => (
                <div key={categorie}>
                  <dt>{categorie}</dt>
                  <dd>{valeurs.join(" · ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="langues-titre">
            <h2 id="langues-titre">Langues</h2>
            <p>Français · Anglais technique</p>
          </section>

          <section aria-labelledby="interets-titre">
            <h2 id="interets-titre">Centres d&apos;intérêt</h2>
            <p>
              Développement informatique · Rubik&apos;s Cube · Lecture de romans · Écriture ·
              Badminton · Jeux vidéo · Billard
            </p>
          </section>
        </main>
      </div>
    </>
  );
}
