import { useState, useRef } from 'react';
import { BookOpen, ClipboardList, LogOut, User, GraduationCap } from 'lucide-react';
import SupervisionSecuencias from './sections/supervision_secuencias';
import SecuenciaDidactica from './sections/secuencias_did';

interface DashboardProps {
  onLogout: () => void;
  userInfo: any;
}

function stringToColor(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
}

function Dashboard({ onLogout, userInfo }: DashboardProps) {
  const [currentSection, setCurrentSection] = useState('secuencia');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null); 
  const buttonRef = useRef<HTMLButtonElement | null>(null); 

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node) && buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useState(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  });

  const avatarColor = stringToColor(userInfo?.name || "default");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="bg-blue-200 m-2 text-blue-600 text-xs font-medium px-2 py-1 rounded-xl border border-blue-300">v.Alpha</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <button
                  onClick={() => setCurrentSection('secuencia')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentSection === 'secuencia' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                >
                  <BookOpen className="h-5 w-5 mr-1" />
                  Secuencia Didáctica
                </button>
                <button
                  onClick={() => setCurrentSection('supervision')}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${currentSection === 'supervision' ? 'border-blue-500 text-gray-900' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}
                >
                  <ClipboardList className="h-5 w-5 mr-1" />
                  Supervisión de Secuencias
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0 relative">
                <button
                  ref={buttonRef}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-0 rounded-full bg-gray-100 text-gray-600 hover:text-gray-900 focus:outline-none cursor-pointer"
                >
                  {userInfo?.picture && userInfo?.picture !== "" ? (
                    <img
                      src={userInfo.picture}
                      alt="User Avatar"
                      className="h-8 w-8 rounded-full"
                      onError={(e) => (e.target as HTMLImageElement).src = "/path/to/default-image.png"} // Ruta de imagen predeterminada
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: avatarColor }}>
                      <span className="text-white text-sm">{userInfo?.name?.[0]}</span>
                    </div>
                  )}
                </button>
                {isMenuOpen && (
                  <div ref={menuRef} className="absolute right-0 w-64 cursor-pointer py-1 mt-1 bg-white rounded-md shadow-lg z-50 border border-gray-300">
                    <div className="px-4 py-1 text-medium text-gray-700">
                      {userInfo?.name}
                      <div className="text-xs text-gray-500 mt-1">
                        <span className="inline-block px-2 py-1 text-sm text-white bg-blue-500 rounded-full">Docente</span>
                      </div>
                    </div>
                    <div className="px-4 py-1 text-sm text-gray-500">{userInfo?.email}</div>
                    <button
                      onClick={onLogout}
                      className="w-full text-left px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-red-400 hover:text-white flex items-center cursor-pointer"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Cerrar Sesión
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-lg shadow p-6">
          {currentSection === 'secuencia' ? <SecuenciaDidactica /> : <SupervisionSecuencias />}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;