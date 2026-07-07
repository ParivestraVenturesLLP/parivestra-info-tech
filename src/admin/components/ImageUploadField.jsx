import { useRef, useState } from "react";
import { buildStoragePath, deleteFile, uploadFile } from "../../lib/storage/upload";

export function ImageUploadField({
  label = "Image",
  url,
  path,
  slug,
  kind = "cover",
  collectionName,
  onChange,
  accept = "image/*",
  maxSizeMB = 5,
}) {
  const inputRef = useRef(null);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  async function handleFile(file) {
    setError(null);
    if (!slug) {
      setError("Save a slug first before uploading an image.");
      return;
    }
    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File must be under ${maxSizeMB}MB.`);
      return;
    }

    if (path) await deleteFile(path);

    const storagePath = buildStoragePath(kind, collectionName, slug, file.name);
    setProgress(0);
    try {
      const result = await uploadFile(file, storagePath, { onProgress: setProgress });
      onChange({ url: result.url, path: result.path });
    } catch {
      setError("Upload failed. Check your connection and try again.");
    } finally {
      setProgress(null);
    }
  }

  async function handleRemove() {
    if (path) await deleteFile(path);
    onChange({ url: "", path: "" });
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>

      {url ? (
        <div className="mt-2 flex items-center gap-4">
          <img src={url} alt="" className="h-20 w-20 rounded-xl object-cover" />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-sm font-medium text-accent hover:text-accent-hover"
            >
              Replace
            </button>
            <button
              type="button"
              onClick={handleRemove}
              className="text-sm font-medium text-status-critical"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="mt-2 flex h-24 w-full items-center justify-center rounded-xl border border-dashed border-border text-sm text-ink-faint hover:border-accent hover:text-accent"
        >
          {progress !== null ? `Uploading… ${progress}%` : "Click to upload"}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
      />

      {error && <p className="mt-1.5 text-xs text-status-critical">{error}</p>}
    </div>
  );
}
