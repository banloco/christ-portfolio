import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, serverTimestamp } from 'firebase/firestore';

export default function FirestoreTest() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [testData, setTestData] = useState([]);

  const writeTest = async () => {
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'test'), {
        message: 'Test depuis React',
        timestamp: serverTimestamp(),
        user: 'Christ'
      });
      setMessage(`✅ Document ajouté avec ID: ${docRef.id}`);
    } catch (error) {
      setMessage(`❌ Erreur: ${error.message}`);
      console.error('Erreur Firestore:', error);
    }
    setLoading(false);
  };

  const readTest = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, 'test'));
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setTestData(data);
      setMessage(`✅ ${data.length} document(s) trouvé(s)`);
    } catch (error) {
      setMessage(`❌ Erreur: ${error.message}`);
      console.error('Erreur Firestore:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        Test Firestore
      </h3>
      
      <div className="flex gap-3 mb-4">
        <button
          onClick={writeTest}
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? 'Chargement...' : 'Écrire un document'}
        </button>
        
        <button
          onClick={readTest}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          {loading ? 'Chargement...' : 'Lire les documents'}
        </button>
      </div>

      {message && (
        <div className="mb-4 p-3 bg-gray-50 rounded text-sm">
          {message}
        </div>
      )}

      {testData.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold mb-2">Documents trouvés:</h4>
          <div className="space-y-2">
            {testData.map((doc) => (
              <div key={doc.id} className="bg-gray-50 p-3 rounded text-sm">
                <p><strong>ID:</strong> {doc.id}</p>
                <p><strong>Message:</strong> {doc.message}</p>
                <p><strong>User:</strong> {doc.user}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500">
        <p>💡 Assurez-vous d'avoir créé une base Firestore dans votre console Firebase</p>
      </div>
    </div>
  );
}
