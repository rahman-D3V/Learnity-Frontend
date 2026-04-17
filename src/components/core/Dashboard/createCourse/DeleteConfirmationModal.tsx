type DeleteConfirmModalProps = {
  setDeleteModal: (data: boolean) => void;
  onDelete: () => void;
  lectureTitle?: string;
};

const DeleteConfirmModal = ({ setDeleteModal, onDelete, lectureTitle }: DeleteConfirmModalProps) => {

  function handleDelete(): void {
    onDelete();
    setDeleteModal(false);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[#1c1c28] border border-white/10 rounded-2xl p-6 w-full max-w-sm shadow-xl shadow-black/40 text-white">

        {/* Icon */}
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 mb-4 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>

        {/* Text */}
        <h2 className="text-center text-lg font-semibold text-white mb-1">
          Delete Lecture
        </h2>
        <p className="text-center text-sm text-gray-400 mb-1">
          Are you sure you want to delete
        </p>
        {lectureTitle && (
          <p className="text-center text-sm font-medium text-white mb-4">
            "{lectureTitle}"?
          </p>
        )}
        <p className="text-center text-xs text-gray-500 mb-6">
          This action cannot be undone.
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setDeleteModal(false)}
            className="flex-1 py-2 rounded-xl text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className="flex-1 py-2 rounded-xl text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default DeleteConfirmModal;