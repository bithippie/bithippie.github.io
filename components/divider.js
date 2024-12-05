export default function Divider({ backgroundColor, curvePosition }) {
  return (
    <div
      className={`absolute h-0 bottom-[-1px] left-0 w-full bg-${backgroundColor}`}
    >
      <div
        className={`relative w-full h-10 sm:h-20 bg-${backgroundColor} ${curvePosition}-curve-divider`}
      ></div>
    </div>
  );
}
