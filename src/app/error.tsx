"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h1>Đã có lỗi xảy ra</h1>
      {error.digest && <p>Mã lỗi: {error.digest}</p>}
      <button onClick={reset}>Thử lại</button>
    </main>
  );
}
