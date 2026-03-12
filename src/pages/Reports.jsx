import { useState } from "react";
import BottomNav from "../components/BottomNav";

const TABS = ["Pendiente", "En proceso", "Terminado"];

const MOCK_REPORTS = [
  {
    id: "1",
    title: "Fuga de agua",
    area: "Baños",
    date: "Hoy 10:30",
    status: "Pendiente",
  },
  {
    id: "2",
    title: "Computadora no enciende",
    area: "Sistemas",
    date: "Ayer 16:20",
    status: "En proceso",
  },
  {
    id: "3",
    title: "Switch fuera de linea",
    area: "Redes",
    date: "19/02/2026",
    status: "Terminado",
  },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState("Pendiente");
  const [showFilters, setShowFilters] = useState(false);
  const [areaFilter, setAreaFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [selectedReport, setSelectedReport] = useState(null);

  const filteredReports = MOCK_REPORTS.filter((r) => {
    if (r.status !== activeTab) return false;
    if (areaFilter !== "all" && r.area !== areaFilter) return false;
    if (dateFilter === "today" && !r.date.includes("Hoy")) return false;
    return true;
  });

  const getStatusColor = (status) => {
    if (status === "Pendiente") return "bg-red-500";
    if (status === "En proceso") return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6 text-white bg-[#0f172a] min-h-screen">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Reportes</h1>

        <button
          onClick={() => setShowFilters(true)}
          className="text-blue-400"
        >
          Filtros
        </button>
      </div>

      {/* TABS */}
      <div className="flex gap-3 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 rounded-full text-sm ${activeTab === tab
              ? "bg-blue-500 text-white"
              : "bg-gray-800 text-gray-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* REPORT LIST */}
      <div className="space-y-3">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            onClick={() => setSelectedReport(report)}
            className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700"
          >
            <h2 className="font-semibold">{report.title}</h2>
            <p className="text-sm text-gray-400">{report.area}</p>

            <div className="flex justify-between items-center mt-3">
              <p className="text-xs text-gray-400">{report.date}</p>

              <span
                className={`${getStatusColor(
                  report.status
                )} text-xs px-3 py-1 rounded-full`}
              >
                {report.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* FILTER MODAL */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-gray-900 p-6 rounded-xl w-80">

            <h2 className="text-lg font-bold mb-4">Filtros</h2>

            <p className="text-sm text-gray-400 mb-2">Área</p>

            {["all", "Baños", "Sistemas", "Redes"].map((a) => (
              <button
                key={a}
                onClick={() => setAreaFilter(a)}
                className={`block w-full text-left px-3 py-2 rounded mb-2 ${areaFilter === a
                  ? "bg-blue-500"
                  : "bg-gray-700"
                  }`}
              >
                {a === "all" ? "Todas" : a}
              </button>
            ))}

            <p className="text-sm text-gray-400 mt-4 mb-2">Fecha</p>

            {[
              { key: "all", label: "Todas" },
              { key: "today", label: "Hoy" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setDateFilter(f.key)}
                className={`block w-full text-left px-3 py-2 rounded mb-2 ${dateFilter === f.key
                  ? "bg-blue-500"
                  : "bg-gray-700"
                  }`}
              >
                {f.label}
              </button>
            ))}

            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  setAreaFilter("all");
                  setDateFilter("all");
                  setShowFilters(false);
                }}
                className="text-gray-400"
              >
                Limpiar
              </button>

              <button
                onClick={() => setShowFilters(false)}
                className="bg-blue-500 px-4 py-2 rounded"
              >
                Aplicar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REPORT MODAL */}
      {/* REPORT MODAL */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center p-6">

          <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">

            {/* TITLE */}
            <h2 className="text-xl font-bold mb-4 uppercase">
              {selectedReport.title}
            </h2>

            {/* DESCRIPCION */}
            <p className="text-gray-400 text-sm">Descripción</p>
            <p className="mb-4">
              Switch as0701-tpl-mexic se encuentra fuera de linea
            </p>

            {/* AREA */}
            <p className="text-gray-400 text-sm">Área</p>
            <p className="mb-4">{selectedReport.area}</p>

            {/* TECNICO */}
            <p className="text-gray-400 text-sm">Técnico asignado</p>
            <p className="mb-4">Francisco Vazquez</p>

            {/* PRIORIDAD */}
            <p className="text-gray-400 text-sm">Prioridad</p>
            <p className="mb-4">Baja</p>

            {/* FOTO REPORTE */}
            <p className="text-gray-400 text-sm mb-2">Fotos del reporte</p>

            <img
              src="/reptemple.jpeg"
              className="rounded-lg mb-6 w-full h-[150px] object-contain"
            />

            {/* TIMELINE */}
            <p className="text-gray-400 text-sm mb-3">Línea de tiempo</p>

            <TimelineItem
              label="Creación"
              date="19/02/2026 4:48PM"
            />

            <TimelineItem
              label="Asignación"
              date="20/02/2026 6:30AM"
              duration="13h 42m"
            />

            <TimelineItem
              label="Atención"
              date="20/02/2026 3:30PM"
              duration="9h"
            />

            <TimelineItem
              label="Término"
              date="20/02/2026 3:51PM"
              duration="21m"
            />

            {/* FOTO FINAL */}
            <p className="text-gray-400 text-sm mt-6 mb-2">
              Foto posterior
            </p>

            <img
              src="/reptemple1.jpeg"
              className="rounded-lg w-full h-[150px] object-contain"
            />

            {/* REINCIDENCIAS */}
            <p className="text-gray-400 text-sm mt-6 mb-3">
              Reincidencias
            </p>

            <div className="bg-gray-800 rounded-xl p-2 flex items-center gap-3">

              <img
                src="/reincidencia.png"
                className="w-5 h-5 object-contain opacity-80"
              />

              <p className="text-gray-400 text-sm">
                No cuenta con reincidencias
              </p>

            </div>

            {/* BOTON */}
            <button
              onClick={() => setSelectedReport(null)}
              className="w-full bg-blue-500 py-3 rounded-lg mt-6"
            >
              Cerrar
            </button>

          </div>
        </div>
      )}


    </div>
  );

  function TimelineItem({ label, date, duration }) {
    return (
      <div className="flex items-start gap-3 mb-4">

        <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>

        <div>
          <p className="font-semibold">{label}</p>
          <p className="text-gray-400 text-xs">{date}</p>

          {duration && (
            <p className="text-blue-400 text-xs mt-1">
              + {duration}
            </p>
          )}
        </div>

      </div>
    );
  }
}