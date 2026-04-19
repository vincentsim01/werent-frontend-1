"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Terjadi error aplikasi:", error);
  }, [error]);

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center p-6 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-lg">
        <h2 className="text-2xl font-bold text-[#1d3222] mb-4">Gagal Terhubung ke Server!</h2>
        <p className="text-gray-600 mb-6">
          Koneksi ke backend (Railway) terputus atau *timeout* (terlalu lama merespons).<br/><br/>
          *Catatan: Server gratis di Railway sering tertidur jika tidak diakses beberapa saat. Butuh sekitar 15-30 detik agar server terbangun kembali.*
        </p>
        <button
          className="bg-[var(--werent-green-2)] text-white px-8 py-3 rounded-full font-semibold hover:bg-[var(--werent-green-1)] transition-colors"
          onClick={() => reset()}
        >
          Muat Ulang Halaman
        </button>
      </div>
    </div>
  );
}
