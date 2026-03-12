import { useState } from "react";

const AREAS = [
  "Mantenimiento",
  "Electricidad",
  "Plomería",
  "Climatización",
  "Seguridad",
  "Sistemas",
];

const TECNICOS = [
  "Carlos Guerrero",
  "Helaman Helaman",
  "Francisco Vazquez",
  "Angel Alejandro",
  "Luis Rey",
  "Everardo Ever",
];

const PRIORIDADES = ["Baja", "Media", "Alta", "Urgente"];

export default function ActionModal({ visible, onClose }) {
  const [step, setStep] = useState("menu");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [tecnico, setTecnico] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const [openSelector, setOpenSelector] = useState(null);

  if (!visible) return null;

  function closeAll() {
    setStep("menu");
    setOpenSelector(null);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-end z-50">
      <div className="bg-[#1e1e1e] w-full rounded-t-3xl p-6 space-y-3">

        {/* MENU */}
        {step === "menu" && (
          <>
            <h2 className="text-center text-white font-semibold">
              Nueva acción
            </h2>

            <button
              className="w-full py-4 bg-[#2b2b2b] rounded-xl"
              onClick={() => setStep("report")}
            >
              Crear reporte
            </button>

            <button className="w-full py-4 bg-[#2b2b2b] rounded-xl opacity-50">
              Crear orden
            </button>

            <button
              className="w-full py-4 text-gray-400"
              onClick={closeAll}
            >
              Cancelar
            </button>
          </>
        )}

        {/* FORM REPORTE */}
        {step === "report" && (
          <>
            <h2 className="text-center text-white font-semibold">
              Nuevo reporte
            </h2>

            <input
              placeholder="Título del reporte"
              className="w-full p-3 rounded-xl bg-[#111] text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Descripción"
              className="w-full p-3 rounded-xl bg-[#111] text-white min-h-[90px]"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <SelectInput
              label="Área"
              value={area}
              onClick={() => setOpenSelector("area")}
            />

            <SelectInput
              label="Técnico"
              value={tecnico}
              onClick={() => setOpenSelector("tecnico")}
            />

            <SelectInput
              label="Prioridad"
              value={prioridad}
              onClick={() => setOpenSelector("prioridad")}
            />

            <button className="w-full py-4 bg-[#2b2b2b] rounded-xl">
              Agregar foto
            </button>

            <button className="w-full py-4 bg-[#2b2b2b] rounded-xl">
              Guardar reporte
            </button>

            <button
              className="w-full py-4 text-gray-400"
              onClick={() => setStep("menu")}
            >
              Volver
            </button>
          </>
        )}
      </div>

      {/* SELECTORES */}
      {openSelector && (
        <BottomSelector
          options={
            openSelector === "area"
              ? AREAS
              : openSelector === "tecnico"
              ? TECNICOS
              : PRIORIDADES
          }
          onSelect={(v) => {
            if (openSelector === "area") setArea(v);
            if (openSelector === "tecnico") setTecnico(v);
            if (openSelector === "prioridad") setPrioridad(v);

            setOpenSelector(null);
          }}
        />
      )}
    </div>
  );
}

function SelectInput({ label, value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3 rounded-xl bg-[#111] text-white"
    >
      {value || label}
    </button>
  );
}

function BottomSelector({ options, onSelect }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/60">
      <div className="bg-[#1e1e1e] rounded-t-3xl p-6 space-y-3">
        {options.map((o) => (
          <button
            key={o}
            className="block w-full text-center py-3 text-white"
            onClick={() => onSelect(o)}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}