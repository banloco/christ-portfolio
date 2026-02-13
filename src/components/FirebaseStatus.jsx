import { useState, useEffect } from 'react';
import app from '../firebase';

export default function FirebaseStatus() {
  const [status, setStatus] = useState('⏳ Vérification...');
  const [color, setColor] = useState('text-yellow-600');

  useEffect(() => {
    try {
      if (app) {
        setStatus('✅ Firebase connecté avec succès!');
        setColor('text-green-600');
        console.log('Firebase initialisé:', app.name);
        console.log('Project ID:', app.options.projectId);
      } else {
        setStatus('❌ Firebase non initialisé');
        setColor('text-red-600');
      }
    } catch (error) {
      setStatus(`❌ Erreur: ${error.message}`);
      setColor('text-red-600');
      console.error('Erreur Firebase:', error);
    }
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        État de la connexion Firebase
      </h3>
      <div className={`flex items-center space-x-2 ${color} font-medium text-lg`}>
        <span>{status}</span>
      </div>
      {app && (
        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-4 rounded">
          <p><strong>Project ID:</strong> {app.options.projectId}</p>
          <p><strong>Auth Domain:</strong> {app.options.authDomain}</p>
          <p><strong>Storage Bucket:</strong> {app.options.storageBucket}</p>
        </div>
      )}
    </div>
  );
}
