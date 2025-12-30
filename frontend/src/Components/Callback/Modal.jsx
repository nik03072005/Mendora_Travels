

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-transparent backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
        <div
          className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg pointer-events-auto relative"
          onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
        >
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
