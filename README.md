# Christ Portfolio

Un portfolio moderne construit avec React, Tailwind CSS et Firebase.

## 🚀 Technologies

- **React** - Bibliothèque JavaScript pour construire des interfaces utilisateur
- **Vite** - Build tool ultra rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Firebase** - Plateforme de développement d'applications
  - Authentication
  - Firestore Database
  - Storage

## 📋 Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Un compte Firebase (pour la configuration)

## 🛠️ Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Configuration Firebase**
   
   a. Créez un projet sur [Firebase Console](https://console.firebase.google.com/)
   
   b. Copiez le fichier d'environnement
   ```bash
   cp .env.example .env
   ```
   
   c. Ajoutez vos credentials Firebase dans `.env`:
   ```env
   VITE_FIREBASE_API_KEY=votre_api_key
   VITE_FIREBASE_AUTH_DOMAIN=votre_project_id.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=votre_project_id
   VITE_FIREBASE_STORAGE_BUCKET=votre_project_id.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=votre_sender_id
   VITE_FIREBASE_APP_ID=votre_app_id
   VITE_FIREBASE_MEASUREMENT_ID=votre_measurement_id
   ```

## 🚀 Démarrage

**Mode développement**
```bash
npm run dev
```

Ouvrez [http://localhost:5173](http://localhost:5173) dans votre navigateur.

**Build de production**
```bash
npm run build
```

**Prévisualiser le build**
```bash
npm run preview
```

## 📁 Structure du projet

```
christ-portfolio/
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Composants React réutilisables
│   ├── firebase.js      # Configuration Firebase
│   ├── App.jsx          # Composant principal
│   ├── index.css        # Styles Tailwind
│   └── main.jsx         # Point d'entrée
├── public/              # Fichiers statiques
├── .env.example         # Template des variables d'environnement
├── tailwind.config.js   # Configuration Tailwind
├── vite.config.js       # Configuration Vite
└── package.json
```

## 🔥 Utilisation de Firebase

Pour utiliser Firebase dans vos composants:

```javascript
import { auth, db, storage } from './firebase';

// Exemple: Authentification
import { signInWithEmailAndPassword } from 'firebase/auth';

// Exemple: Firestore
import { collection, addDoc } from 'firebase/firestore';

// Exemple: Storage
import { ref, uploadBytes } from 'firebase/storage';
```

## 🎨 Utilisation de Tailwind CSS

Tailwind CSS est déjà configuré. Utilisez les classes utilitaires directement dans vos composants:

```jsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello Tailwind!
</div>
```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise le build de production
- `npm run lint` - Vérifie le code avec ESLint

## 🤝 Contribution

Les contributions sont les bienvenues! N'hésitez pas à ouvrir une issue ou un pull request.

## 📄 Licence

Ce projet est sous licence MIT.

## 👤 Auteur

**Christ**

---

Fait avec ❤️ par Christ

