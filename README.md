# Site Sport Paix Santé

Site internet de l'association Sport Paix Santé ([sportpaixsante.fr](https://www.sportpaixsante.fr)), construit avec [Astro](https://astro.build). Le site est entièrement statique : le dossier `dist/` produit par la construction peut être déposé chez n'importe quel hébergeur.

## Lancer le site en local

```sh
npm install
npm run dev      # aperçu sur http://localhost:4321
npm run build    # construit le site dans dist/
```

## Où modifier quoi

| Je veux changer… | Fichier |
| --- | --- |
| E-mail, lien HelloAsso, LinkedIn, mentions légales | `src/data/site.ts` |
| Le détail des actions (entreprises, écoles, clubs) | `src/data/actions.ts` |
| Le texte d'une page | `src/pages/<page>.astro` |
| Les couleurs et la mise en page | `src/styles/global.css` |
| Écrire un article | `src/content/blog/` (voir `exemple-article.md`) |

Les pages gardent les mêmes adresses que l'ancien site (`/nos-actions.html`, `/don.html`, `/notre-histoire.html`…), donc les liens existants continuent de marcher.
