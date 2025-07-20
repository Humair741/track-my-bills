import { useState } from "react";
import { FiUpload, FiTrash2 } from "react-icons/fi";

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!["image/png", "image/jpeg", "application/pdf"].includes(selected.type)) {
      setError("Only JPG, PNG, or PDF files are allowed.");
      setFile(null);
      return;
    }

    if (selected.size > 2 * 1024 * 1024) {
      setError("File must be under 2MB.");
      setFile(null);
      return;
    }

    setFile(selected);
    setError("");
  };

  const handleReset = () => {
    setFile(null);
    setError("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Upload Your Receipt</h2>

      <div className="flex flex-col items-center gap-4">
        {!file && (
          <label className="cursor-pointer px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            <input
              type="file"
              accept="image/*,application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="flex items-center gap-2 justify-center">
              <FiUpload className="text-xl" />
              <span>Upload Receipt</span>
            </div>
          </label>
        )}

        {error && <p className="text-red-500 text-sm">{error}</p>}

        {file && (
          <div className="w-full text-center">
            {file.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="w-full max-h-64 object-contain rounded"
              />
            ) : (
              <p className="text-sm text-gray-700">📄 {file.name}</p>
            )}
            <button
              onClick={handleReset}
              className="flex items-center gap-2 mt-2 text-red-600 hover:text-red-800 text-sm"
            >
              <FiTrash2 />
              Remove File
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
