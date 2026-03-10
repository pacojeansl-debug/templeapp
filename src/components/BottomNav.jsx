import { useNavigate } from "react-router-dom";

export default function BottomNav({ onAddPress }) {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-0 w-full flex justify-center z-50">

            {/* NAV BAR */}
            <div className="relative flex items-center bg-[#1e293b] h-[72px] w-[92%] max-w-md rounded-2xl mb-4">

                {/* HOME */}
                <div className="flex-1 flex justify-center">
                    <button
                        onClick={() => navigate("/")}
                        className="flex flex-col items-center"
                    >
                        <span className="text-xl">⌂</span>
                        <span className="text-[11px] text-gray-400 mt-1">Home</span>
                    </button>
                </div>

                {/* ESPACIO FAB */}
                <div className="w-[80px]" />

                {/* PERFIL */}
                <div className="flex-1 flex justify-center">
                    <button className="flex flex-col items-center">
                        <span className="text-[11px] text-gray-400 mt-1">Perfil</span>
                    </button>
                </div>

                {/* FAB */}
                <button
                    onClick={onAddPress}
                    className="
          absolute
          -top-6
          left-1/2
          -translate-x-1/2
          w-[80px]
          h-[80px]
          rounded-full
          bg-blue-500
          flex
          items-center
          justify-center
          text-4xl
          shadow-lg
          "
                >
                    +
                </button>

            </div>
        </div>
    );
}