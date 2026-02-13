# Comment ajouter votre photo professionnelle

Pour remplacer le placeholder par votre photo professionnelle :

## Étapes

1. **Préparez votre image** :
   - Format recommandé : JPG ou PNG
   - Dimensions : 800x800px (carré) minimum
   - Poids : moins de 500KB pour des performances optimales
   - Nom suggéré : `photo-christ-banidje.jpg`

2. **Ajoutez l'image** :
   - Copiez votre photo dans le dossier `public/`
   - Exemple : `public/photo-christ-banidje.jpg`

3. **Modifiez HomePage.jsx** :
   - Ouvrez : `src/pages/HomePage.jsx`
   - Trouvez la section : `{/* Image Space - Professional Photo Placeholder */}`
   - Remplacez le div placeholder par :
   
   ```jsx
   <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-gray-700/50 overflow-hidden aspect-square">
     <img 
       src="/photo-christ-banidje.jpg" 
       alt="Christ BANIDJE - Développeur Web & Data/IA"
       className="w-full h-full object-cover"
     />
   </div>
   ```

4. **Testez localement** :
   ```bash
   npm run dev
   ```

5. **Pushez les modifications** :
   ```bash
   git add public/photo-christ-banidje.jpg src/pages/HomePage.jsx
   git commit -m "Add: Professional photo in hero section"
   git push
   ```

Le déploiement automatique se fera via GitHub Actions !
