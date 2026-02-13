// Composant Header
export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            Christ
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition">
                Accueil
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition">
                À propos
              </a>
            </li>
            <li>
              <a href="#projects" className="text-gray-700 hover:text-indigo-600 transition">
                Projets
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
