import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { storage } from "../firebase";

export function uploadFile(file, path, { onProgress } = {}) {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, path);
    const task = uploadBytesResumable(storageRef, file, {
      contentType: file.type,
    });

    task.on(
      "state_changed",
      (snapshot) => {
        if (onProgress) {
          onProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100));
        }
      },
      reject,
      async () => {
        const url = await getDownloadURL(task.snapshot.ref);
        resolve({ url, path });
      }
    );
  });
}

export async function deleteFile(path) {
  if (!path) return;
  try {
    await deleteObject(ref(storage, path));
  } catch {
    // object may already be gone — non-fatal
  }
}

export function buildStoragePath(kind, collectionName, slug, fileName) {
  const safeName = fileName.replace(/[^a-zA-Z0-9.\-_]/g, "_");
  if (kind === "cover") return `covers/${collectionName}/${slug}/${safeName}`;
  if (kind === "avatar") return `avatars/authors/${slug}/${safeName}`;
  if (kind === "reportFile") return `reports/files/${slug}/${safeName}`;
  throw new Error(`Unknown upload kind: ${kind}`);
}
