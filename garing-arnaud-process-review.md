# Ennoncé

L'objectif est de prendre du recul sur sa pratique et d'être au clair sur "comment" on a fait pour produire le logiciel.

Décrivez comment vous avez fait de manière générale pour réaliser le logiciel,
sachant que l'étape 1 c'est "Spécifications du besoin" (qui correspond à l'énoncé du TP)
et la dernière étape est "Livraison" qui correspond au logiciel déployé sur un environnement (local pour le moment).

Modalités du rendu :

* Dans un document texte
* Document nommé \<nom>-\<prenom>-process-review
* Document à créer/copier/stocker dans le sous-dossier "Process-Review" à l'adresse https://tiny.cc/maalsi22-24-data

# Rendu

### 1 : Analyse des besoins

Analayse de l'énoncé pour comprendre la demande et en extraire les besoins

### 2 : Page Brute

Création du projet via l'IDE **Pycharm**, j'utilise le framework **Flask**

Je crée un template/fichier `base.html` où j'écrie en dure la page web

L'entreprise et ses données sont fictive

### 3 : Rendu dynamique avec javascript

Création d'un fichier javascript qui est liée dans le template HTML via une balise **script**

Je transforme les données de l'entreprise en object javascript (**companyData**) et les enlèves de la page web.

Petit à petit je créer les fonctions javascript qui modifie la page web selon le contenue de l'objet **companyData**

### 3.2 : Alpine.js

Je créer une version alternative de la page web en utilisant la librairie [Alpine.js](https://alpinejs.dev/)

### 4 : Livraison

Tout au longs du développement la page a été testé en local via un serveur de développement local inclut avec le framework **Flask**.

Le site web est déliveré au client en uploadant le projet dans le dépot github [transformationDevOpsTP2](https://github.com/agaring/transformationDevOpsTP2)