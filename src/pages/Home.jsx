import React from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

/* ---------------- HOME ---------------- */

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex justify-center">
            <div className="w-full max-w-md px-5 py-6 pb-32">

                {/* TOP NAV */}
                <div className="mb-6">
                    <h1 className="text-xl font-semibold">Inicio</h1>
                </div>

                {/* GRID */}
                <div className="space-y-4">
                    {/* Fila superior */}
                    <div className="flex gap-4">
                        <HomeButton title="Reportes" large onClick={() => navigate("/reports")} />
                        <HomeButton title="Recirculadora" large />
                    </div>

                    {/* Fila inferior */}
                    <div className="flex gap-4">
                        <HomeButton title="Técnicos" small disabled />
                        <HomeButton title="Áreas" small disabled />
                        <HomeButton title="Estadísticas" small disabled />
                    </div>
                </div>

                {/* ACTIVIDAD RECIENTE */}
                <RecentReports />

            </div>

            <BottomNav onAddPress={() => navigate("/reports")} />
        </div>

    );
}

/* ---------------- BOTÓN ---------------- */

function HomeButton({ title, disabled, large, small, onClick }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
        bg-[#1e293b]
        rounded-2xl
        p-4
        flex flex-col justify-between
        transition-all
        ${large ? "h-36 flex-1" : ""}
        ${small ? "h-24 flex-1" : ""}
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-[#334155]"}
      `}
        >
            <span className="font-semibold text-sm text-left">{title}</span>

            {disabled && (
                <span className="text-xs text-gray-400 text-left">
                    Próximamente
                </span>
            )}
        </button>
    );
}

/* ---------------- ACTIVIDAD ---------------- */

function RecentReports() {
    const reports = [
        { id: 124, title: "Fuga de agua", status: "Asignado" },
        { id: 119, title: "Luminaria dañada", status: "Pendiente" },
        { id: 110, title: "Puerta rota", status: "En progreso" },
        { id: 102, title: "Aire acondicionado", status: "Terminado" },
        { id: 170, title: "Aire acondicionado 2", status: "Terminado" },
        { id: 171, title: "Aire acondicionado", status: "Terminado" },
        { id: 172, title: "Aire acondicionado", status: "Terminado" },
        { id: 173, title: "Aire acondicionado", status: "Terminado" },
    ];

    return (
        <div className="bg-[#1e293b] rounded-2xl p-4 mt-8">
            <h2 className="font-semibold text-sm mb-3">
                Actividad reciente
            </h2>

            <div className="max-h-64 overflow-y-auto space-y-3 pr-1">
                {reports.map((r) => (
                    <div
                        key={r.id}
                        className="flex items-center justify-between border-b border-white/5 pb-2"
                    >
                        <span className="text-sm">
                            #{r.id} · {r.title}
                        </span>

                        <span
                            className={`text-[10px] font-semibold px-3 py-1 rounded-full text-white ${statusColor(
                                r.status
                            )}`}
                        >
                            {r.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* ---------------- STATUS COLORS ---------------- */

function statusColor(status) {
    switch (status) {
        case "Pendiente":
            return "bg-red-500";
        case "Asignado":
            return "bg-purple-500";
        case "En progreso":
            return "bg-yellow-500";
        case "Terminado":
            return "bg-green-500";
        default:
            return "bg-gray-500";
    }
}