import Image from "next/image";

const WARM_WHITE = "#fdfcfb";

export default function OutcomeCard({ src, title, imageScale = "scale-[1.4]", children }) {
  return (
    <div className="flex flex-col lg:flex-row rounded-2xl border border-gray-200 shadow-sm overflow-hidden my-4 bg-warm-white">
      <div className="flex-shrink-0 flex items-center justify-center overflow-hidden w-full h-[260px] lg:w-[360px] lg:h-[360px] bg-warm-white relative">
        <Image
          width={300}
          height={200}
          src={src}
          className={`rounded-xl ${imageScale}`}
          alt={title}
        />
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, transparent 50%, ${WARM_WHITE} 70%)` }} />
      </div>
      <div className="flex flex-col space-y-6 p-8 pl-6 lg:p-8 lg:pl-4 text-center lg:text-left justify-center">
        <h2 className="text-3xl sm:text-4xl text-moss">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
