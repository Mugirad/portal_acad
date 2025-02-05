import React, { useState, useEffect, useCallback } from 'react';

interface FormData {
  programa: string;
  ciclo: string;
  nombre: string;
  perfil: string;
  posgrado: string;
  asignatura: string;
  aprendizajes: string;
  horas: number;
  impacto: string;
  competencia: string;
  criterio1: string;
  porcentaje1: number;
  criterio2: string;
  porcentaje2: number;
  criterio3: string;
  porcentaje3: number;
  bienvenida: string;
  contextualizacion: string;
  introduccion: string;
  tema: string;
  subtema1: string;
  subtema2: string;
  objetivo: string;
  evidencia: string;
  instrumento: string;
  actividad_inicio: string;
  actividad_desarrollo: string;
  actividad_cierre: string;
  actividad_final: string;
  criterio_eval1: string;
  criterio_eval2: string;
  instrumento1: string;
  instrumento2: string;
  nombre_firma: string;
  firma_academia: string;
  firma_coordinacion: string;
  dia: number;
  mes: string;
  anio: number;
}

const initialFormData: FormData = {
  programa: '',
  ciclo: 'FJ-2525',
  nombre: '',
  perfil: '',
  posgrado: '',
  asignatura: '',
  aprendizajes: '',
  horas: 0,
  impacto: '',
  competencia: '',
  criterio1: '',
  porcentaje1: 0,
  criterio2: '',
  porcentaje2: 0,
  criterio3: '',
  porcentaje3: 0,
  bienvenida: '',
  contextualizacion: '',
  introduccion: '',
  tema: '',
  subtema1: '',
  subtema2: '',
  objetivo: '',
  evidencia: '',
  instrumento: '',
  actividad_inicio: '',
  actividad_desarrollo: '',
  actividad_cierre: '',
  actividad_final: '',
  criterio_eval1: '',
  criterio_eval2: '',
  instrumento1: '',
  instrumento2: '',
  nombre_firma: '',
  firma_academia: '',
  firma_coordinacion: '',
  dia: 0,
  mes: '',
  anio: 2025,
};



const HoursCounter: React.FC<{ value: number; onChange: (value: number) => void }> = ({ value, onChange }) => {
  const decrease = useCallback(() => {
    if (value > 0) {
      onChange(value - 1);
    }
  }, [value, onChange]);

  const increase = useCallback(() => {
    onChange(value + 1);
  }, [value, onChange]);

  return (
    <div className="flex items-center">
      <button onClick={decrease} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-l">
        -
      </button>
      <span className="bg-gray-100 text-gray-700 font-bold py-2 px-4">{value}</span>
      <button onClick={increase} className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-r">
        +
      </button>
    </div>
  );
};

export default function SecuenciaFormato() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleHoursChange = useCallback((newHours: number) => {
    setFormData((prev) => ({ ...prev, horas: newHours }));
  }, []);

  return (
    <div className="font-sans text-gray-800 rounded-lg bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        <div className="rounded-t-lg bg-orange-500 text-white p-4 flex flex-wrap items-center justify-between mb-4 inset-4 outline outline-2 outline-white outline-offset-[-8px]">
          <img src="../public/Diseño2.svg" alt="Logo" className="w-24 h-auto mb-2 md:mb-0 " />
          <h1 className="text-xl md:text-2xl font-bold">UNIVERSIDAD PABLO GUARDADO CHÁVEZ</h1>
          <img src="../public/Diseño.svg" alt="Logo" className="w-56 h-auto mb-2 md:mb-1" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">FORMATO DE SECUENCIA DIDÁCTICA</h2>
        <p className="mb-4 text-center italic">Modelo educativo del Sistema UPGCH Competencias para la vida</p>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">PROGRAMA EDUCATIVO (1) | CICLO (2) | DOCENTE (3)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="programa">Programa:</label>
              <input
                type="text"
                id="programa"
                name="programa"
                value={formData.programa}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="ciclo">Ciclo:</label>
              <input
                type="text"
                id="ciclo"
                name="ciclo"
                value={formData.ciclo}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="perfil">Perfil Profesional:</label>
              <input
                type="text"
                id="perfil"
                name="perfil"
                value={formData.perfil}
                onChange={handleInputChange}
                className="w-full p-2 border rounded mb-2"
              />
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="posgrado">Posgrado:</label>
              <input
                type="text"
                id="posgrado"
                name="posgrado"
                value={formData.posgrado}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">ASIGNATURA (4) | APRENDIZAJES ESPERADOS (5) | HORAS CLASE (6)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="asignatura">Asignatura:</label>
              <input
                type="text"
                id="asignatura"
                name="asignatura"
                value={formData.asignatura}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="aprendizajes">Aprendizajes esperados:</label>
              <textarea
                id="aprendizajes"
                name="aprendizajes"
                value={formData.aprendizajes}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="horas">Horas por semana:</label>
              <HoursCounter value={formData.horas} onChange={handleHoursChange} />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">IMPACTO EN EL PERFIL DE EGRESO (7)</div>
          <div className="p-4">
            <textarea
              id="impacto"
              name="impacto"
              value={formData.impacto}
              onChange={handleInputChange}
              className="w-full p-2 border rounded h-24"
            ></textarea>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">COMPETENCIA SELLO A LA QUE CONTRIBUYE (8)</div>
          <div className="p-4">
            <textarea
              id="competencia"
              name="competencia"
              value={formData.competencia}
              onChange={handleInputChange}
              className="w-full p-2 border rounded h-24"
            ></textarea>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">ESTRATEGIA DE EVALUACIÓN INTEGRAL (9)</div>
          <div className="p-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="font-bold">CRITERIOS</div>
              <div className="font-bold">PORCENTAJE</div>
              <input
                type="text"
                id="criterio1"
                name="criterio1"
                value={formData.criterio1}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                id="porcentaje1"
                name="porcentaje1"
                value={formData.porcentaje1}
                onChange={handleInputChange}
                className="p-2 border rounded"
                min="0"
                max="100"
              />
              <input
                type="text"
                id="criterio2"
                name="criterio2"
                value={formData.criterio2}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                id="porcentaje2"
                name="porcentaje2"
                value={formData.porcentaje2}
                onChange={handleInputChange}
                className="p-2 border rounded"
                min="0"
                max="100"
              />
              <input
                type="text"
                id="criterio3"
                name="criterio3"
                value={formData.criterio3}
                onChange={handleInputChange}
                className="p-2 border rounded"
              />
              <input
                type="number"
                id="porcentaje3"
                name="porcentaje3"
                value={formData.porcentaje3}
                onChange={handleInputChange}
                className="p-2 border rounded"
                min="0"
                max="100"
              />
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">SECUENCIA DIDÁCTICA</h3>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">BIENVENIDA (10) | CONTEXTUALIZACIÓN (11) | INTRODUCCIÓN (12)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bienvenida">Bienvenida:</label>
              <textarea
                id="bienvenida"
                name="bienvenida"
                value={formData.bienvenida}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="contextualizacion">Contextualización:</label>
              <textarea
                id="contextualizacion"
                name="contextualizacion"
                value={formData.contextualizacion}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="introduccion">Introducción:</label>
              <textarea
                id="introduccion"
                name="introduccion"
                value={formData.introduccion}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">TEMA / SUBTEMAS (13)</div>
          <div className="p-4">
            <input
              type="text"
              id="tema"
              name="tema"
              value={formData.tema}
              onChange={handleInputChange}
              placeholder="Tema principal"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              id="subtema1"
              name="subtema1"
              value={formData.subtema1}
              onChange={handleInputChange}
              placeholder="Subtema 1"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              id="subtema2"
              name="subtema2"
              value={formData.subtema2}
              onChange={handleInputChange}
              placeholder="Subtema 2"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">OBJETIVO DE APRENDIZAJE (14) | EVIDENCIA DE APRENDIZAJE (15) | ACTIVIDADES DE APRENDIZAJE (16)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block bg-gray-200 p-2 mb-2 font-bold rounded-lg" htmlFor="objetivo">Objetivo:</label>
              <textarea
                id="objetivo"
                name="objetivo"
                value={formData.objetivo}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
              <label className="block bg-gray-200 p-2 mb-2 font-bold rounded-lg" htmlFor="evidencia">Evidencia:</label>
              <textarea
                id="evidencia"
                name="evidencia"
                value={formData.evidencia}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24 mb-2"
              ></textarea>
              <label className="block bg-gray-200 p-2 mb-2 font-bold rounded-lg" htmlFor="instrumento">Instrumento de evaluación:</label>
              <textarea
                id="instrumento"
                name="instrumento"
                value={formData.instrumento}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24 mb-2"
              />
            </div>
            <div>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">INICIO</div>
              <textarea
                id="actividad_inicio"
                name="actividad_inicio"
                value={formData.actividad_inicio}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24 mb-2"
              ></textarea>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">DESARROLLO</div>
              <textarea
                id="actividad_desarrollo"
                name="actividad_desarrollo"
                value={formData.actividad_desarrollo}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24 mb-2"
              ></textarea>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">CIERRE</div>
              <textarea
                id="actividad_cierre"
                name="actividad_cierre"
                value={formData.actividad_cierre}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24 mb-2"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">ACTIVIDAD FINAL (17) | EVALUACIÓN (18)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block bg-gray-200 p-2 mb-2 font-bold rounded-lg" htmlFor="actividad_final">Actividad final:</label>
              <textarea
                id="actividad_final"
                name="actividad_final"
                value={formData.actividad_final}
                onChange={handleInputChange}
                className="w-full p-2 border rounded h-24"
              ></textarea>
            </div>
            <div>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">CRITERIOS</div>
              <input
                type="text"
                id="criterio_eval1"
                name="criterio_eval1"
                value={formData.criterio_eval1}
                onChange={handleInputChange}
                placeholder="Criterio 1"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                id="criterio_eval2"
                name="criterio_eval2"
                value={formData.criterio_eval2}
                onChange={handleInputChange}
                placeholder="Criterio 2"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">INSTRUMENTOS</div>
              <input
                type="text"
                id="instrumento1"
                name="instrumento1"
                value={formData.instrumento1}
                onChange={handleInputChange}
                placeholder="Instrumento 1"
                className="w-full p-2 border rounded mb-2"
              />
              <input
                type="text"
                id="instrumento2"
                name="instrumento2"
                value={formData.instrumento2}
                onChange={handleInputChange}
                placeholder="Instrumento 2"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
          <div className="bg-gray-800 text-white p-2 font-bold">NOMBRE Y FIRMA DEL DOCENTE (19) | AUTORIZACIÓN (20)</div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block bg-gray-200 p-2 mb-2 font-bold rounded-lg" htmlFor="nombre_firma">Nombre y firma:</label>
              <input
                type="text"
                id="nombre_firma"
                name="nombre_firma"
                value={formData.nombre_firma}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <div className="bg-gray-200 p-2 mb-2 font-bold rounded-lg">ACADEMIA</div>
              <input
                type="text"
                id="firma_academia"
                name="firma_academia"
                value={formData.firma_academia}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <div className="bg-gray-200 rounded-lg p-2 mb-2 font-bold">COORDINACIÓN ACADÉMICA</div>
              <input
                type="text"
                id="firma_coordinacion"
                name="firma_coordinacion"
                value={formData.firma_coordinacion}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <p className="mb-2">
            TUXTLA GUTIÉRREZ, CHIAPAS; A 
            <input
              type="number"
              id="dia"
              name="dia"
              min="1"
              max="31"
              value={formData.dia}
              onChange={handleInputChange}
              className="w-12 p-1 border rounded inline-block mx-1"
            /> DE 
            <input
              type="text"
              id="mes"
              name="mes"
              value={formData.mes}
              onChange={handleInputChange}
              className="w-32 p-1 border rounded inline-block mx-1"
            /> DE 
            <input
              type="number"
              id="anio"
              name="anio"
              min="2024"
              max="2100"
              value={formData.anio}
              onChange={handleInputChange}
              className="w-20 p-1 border rounded inline-block mx-1"
            />.
          </p>
          <div className="flex space-x-4">
            <button className="flex flex-col-1 items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-xl">
              Enviar
            </button>
          </div>
        </div>

        <footer className="text-center">
          <p className='font-semibold'><a href="http://www.upgch.mx">www.upgch.mx</a></p>
          <p className="">Libramiento Norte Oriente No. 3450 Fracc. Residencial Las Palmas, Tuxtla Gutiérrez, Chiapas. <p className="font-semibold">Tel. (961)61 4 11 12</p></p>
        </footer>
      </div>
    </div>
  );
}