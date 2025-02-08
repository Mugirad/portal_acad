import { useState } from "react";
import Formato_Secuencia from "./formato_secuencia";

const CapturaSecuencia = () => {
  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleCardClick = () => {
    setShowForm(true); // Muestra el componente Formato_Secuencia
  };

  const handleCloseClick = () => {
    setShowConfirm(true); // Muestra la confirmación al intentar cerrar
  };

  const confirmClose = (confirm: boolean) => {
    if (confirm) {
      setShowForm(false); // Cierra el formulario si se confirma
    }
    setShowConfirm(false); // Oculta el mensaje de confirmación
  };

  return (
    <div className="min-h-screen flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-900">
      {!showForm ? (
        <a
          onClick={handleCardClick}
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 cursor-pointer"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            + Ingresar secuencia
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Haz clic aquí para comenzar a capturar una nueva secuencia didáctica.
          </p>
        </a>
      ) : (
        <div className="relative">
          {/* Botón de cierre */}
          <button
            onClick={handleCloseClick}
            className="shadow-md shadow-black absolute -top-4 -right-3 py-2 px-3 font-bold text-white bg-orange-500 hover:bg-orange-600 rounded-md focus:outline-none"
            title="Cerrar"
          >
            X
          </button>

          {/* Formato de Secuencia */}
          <Formato_Secuencia />

          {/* Confirmación */}
          {showConfirm && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-sm w-full">
                <p className="text-gray-800 dark:text-gray-200 text-lg text-center">
                  ¿Deseas cerrar la captura?
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    onClick={() => confirmClose(false)}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-md text-gray-800 dark:text-gray-200"
                  >
                    No
                  </button>
                  <button
                    onClick={() => confirmClose(true)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-white"
                  >
                    Sí
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CapturaSecuencia;