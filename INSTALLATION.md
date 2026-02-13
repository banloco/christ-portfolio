# Guide d'installation rapide - Christ Portfolio

## ✅ Ce qui a été configuré

### 1. Projet React + Vite
- ✓ Projet initialisé avec Vite
- ✓ React 19 installé
- ✓ Structure de dossiers créée

### 2. Tailwind CSS
- ✓ Tailwind CSS v4 installé
- ✓ Configuration créée (tailwind.config.js, postcss.config.js)
- ✓ Styles de base intégrés dans src/index.css
- ✓ Composant App.jsx mis à jour avec des classes Tailwind

### 3. Firebase
- ✓ Firebase SDK ajouté aux dépendances
- ✓ Fichier de configuration créé (src/firebase.js)
- ✓ Template des variables d'environnement (.env.example)
- ⚠️ Installation en cours...

### 4. Composants de base
- ✓ Header.jsx créé
- ✓ Footer.jsx créé
- ✓ App.jsx mis à jour avec une interface moderne

## 🚀 Prochaines étapes

### 1. Finaliser l'installation de Firebase
```bash
cd "/home/christ/Projets persos/christ-portfolio"
npm install
```

### 2. Configurer Firebase
```bash
# Copier le fichier d'exemple
cp .env.example .env

# Éditer .env et ajouter vos credentials Firebase
# Obtenez-les depuis: https://console.firebase.google.com/
```

### 3. Lancer le projet
```bash
npm run dev
```
Le site sera accessible sur http://localhost:5173

### 4. Tester Tailwind CSS
- L'application devrait afficher une interface moderne avec des dégradés et des ombres
- Le compteur devrait fonctionner
- Les cartes des technologies devraient être visibles

## 📝 Structure des fichiers créés

```
christ-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Barre de navigation
│   │   └── Footer.jsx          # Pied de page
│   ├── firebase.js             # Configuration Firebase
│   ├── App.jsx                 # Composant principal (modifié)
│   └── index.css               # Directives Tailwind
├── .env.example                # Template des variables d'environnement
├── tailwind.config.js          # Configuration Tailwind
├── postcss.config.js           # Configuration PostCSS
├── package.json                # Firebase ajouté aux dépendances
└── README.md                   # Documentation complète
```

## 🔧 Configuration Firebase requise

Dans Firebase Console:
1. Créer un nouveau projet
2. Activer Authentication (optionnel)
3. Créer une base de données Firestore (optionnel)
4. Activer Storage (optionnel)
5. Copier les credentials dans .env

## 💡 Utilisation de Firebase

Exemple d'import dans vos composants:
```javascript
import { auth, db, storage } from './firebase';
```

## 🎨 Personnalisation

### Modifier les couleurs Tailwind
Éditez `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  },
}
```

### Ajouter de nouveaux composants
Créez-les dans `src/components/` et importez-les dans App.jsx

## 📚 Ressources

- [Documentation React](https://react.dev)
- [Documentation Vite](https://vite.dev)
- [Documentation Tailwind CSS](https://tailwindcss.com)
- [Documentation Firebase](https://firebase.google.com/docs)

## ⚡ Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Linter
npm run lint
```

---

✨ Votre projet est prêt à être personnalisé!
