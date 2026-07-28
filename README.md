# 📚 Library Management System

Une application Full Stack développée avec **Next.js**, **TypeScript**, **MongoDB** et **Mongoose** permettant de gérer un catalogue de livres. Les utilisateurs peuvent ajouter, consulter, modifier, supprimer, rechercher et filtrer des livres via une interface moderne et responsive.

---

## 🚀 Fonctionnalités

- Affichage du catalogue des livres
- Ajouter un nouveau livre
- Consulter les détails d'un livre
- Modifier un livre
- Supprimer un livre
- Recherche par titre ou auteur
- Filtrage des livres (Tous / Disponible / Emprunté)
- Validation des formulaires avec Zod
- Responsive Design
- API REST avec Route Handlers de Next.js

---

## 🛠️ Technologies utilisées

### Frontend
- Next.js
- TypeScript
- React
- CSS / Tailwind CSS (ou le framework utilisé)

### Backend
- Next.js Route Handlers
- MongoDB
- Mongoose

### Validation
- Zod

---

## 📂 Structure du projet

```
app/
│
├── api/
│   └── books/
│
├── books/
│   ├── create/
│   ├── edit/[id]/
│   └── [id]/
│
├── components/
├── lib/
├── models/
├── schemas/
├── types/
└── page.tsx
```

---

## 📌 Fonctionnalités principales

### 📖 Catalogue

- Liste des livres
- Recherche
- Filtrage
- Suppression

### ➕ Ajouter

- Formulaire de création
- Validation des données

### ✏️ Modifier

- Pré-remplissage du formulaire
- Mise à jour en base de données

### 📚 Détails

Affichage complet d'un livre :

- Titre
- Auteur
- ISBN
- Catégorie
- Année
- Description
- Statut

---

## 🔗 API REST

| Méthode | Route |
|----------|-------|
| GET | /api/books |
| GET | /api/books/:id |
| POST | /api/books |
| PUT | /api/books/:id |
| DELETE | /api/books/:id |

---

## ✔️ Validation

Les données sont validées avec **Zod**.

Règles :

- Titre obligatoire (minimum 3 caractères)
- Auteur obligatoire
- ISBN obligatoire et unique
- Catégorie obligatoire
- Année valide
- Description minimum 10 caractères

---

## 🗄️ Modèle Book

```ts
{
  title,
  author,
  isbn,
  category,
  publicationYear,
  description,
  available,
  createdAt,
  updatedAt
}
```

---

## 💻 Installation

### Cloner le projet

```bash
git clone https://github.com/Aimade-20/OpenShelf.git
```

### Installer les dépendances

```bash
npm install
```

### Variables d'environnement

Créer un fichier `.env.local`

```env
MONGODB_URI=your_mongodb_connection_string
```

### Lancer le projet

```bash
npm run dev
```

L'application sera disponible sur :

```
http://localhost:3000
```

## 🎯 Objectif pédagogique

Ce projet permet de découvrir :

- Next.js App Router
- Route Handlers
- CRUD
- MongoDB avec Mongoose
- Validation avec Zod
- Communication Frontend ↔ Backend
- Routes dynamiques
- Gestion d'état
- Responsive Design
