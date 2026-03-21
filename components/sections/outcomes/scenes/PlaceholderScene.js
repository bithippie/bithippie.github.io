"use client";

export default function PlaceholderScene({ color = "#4A7C59" }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="rounded-2xl opacity-20"
        style={{
          width: 300,
          height: 300,
          backgroundColor: color,
        }}
      />
    </div>
  );
}
