export default function Divider({ backgroundColor, curvePosition }) {
  return (
    <div className={`relative bg-${backgroundColor}`}>
      <div
        className={`relative w-full h-10 sm:h-20 bg-${backgroundColor} ${curvePosition}-curve-divider`}
      ></div>
    </div>
  );
}
