import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ActionModal from "./ActionModal";

export default function BottomNav({ onAddPress }) {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);

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
                        <img
                            src="/home.png"
                            alt="Home"
                            className="w-8 h-8 object-contain"
                        />
                        <span className="text-gray-400 mt-1">Home</span>
                    </button>
                </div>

                {/* FAB */}
                <div className="w-[80px] flex justify-center items-center">
                    <button className="w-[75px] h-[75px] -mt-8 rounded-full bg-blue-500 flex items-center justify-center text-4xl shadow-2xl shadow-gray-950"
                        onClick={() => setShowModal(true)}>
                        <img
                            src="/more.png"
                            alt="More"

                        />
                    </button>
                </div>

                {/* PERFIL */}
                <div className="flex-1 flex justify-center">
                    <button className="flex flex-col items-center">
                        <img
                            src="/profile.jpeg"
                            alt="Perfil"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-gray-400 mt-1">Perfil</span>
                    </button>
                </div>

                {/* FAB */}
                {/* <button
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
                </button> */}

            </div>

            <ActionModal
                visible={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>

    );
}