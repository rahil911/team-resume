import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const BackButton = () => {
  return (
    <Link
      to="/"
      className="fixed top-4 left-4 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 no-print z-50 transition-all hover:scale-105"
    >
      <Home size={20} />
      <span>Back to Gallery</span>
    </Link>
  );
};

export default BackButton;
