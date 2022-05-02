export default function handler(_req, res) {
  res.status(200).json([
    {
      slug: "modifier-la-taille-d-un-svg",
      title: "Modifier la taille d'un svg",
      description: "Dans cet article, on va décrypter le fonctionnement des svg pour comprendre comment les manipuler.",
      type: "Tech",
      createAt: "2021-06-03",
    },
    {
      slug: "recette-de-crepe",
      title: "Recette de crêpes",
      description: "La meilleur recette de crêpes.",
      type: "Food",
      createAt: "2021-11-09",
    },
  ]);
}
