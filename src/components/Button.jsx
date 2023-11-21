export default function Button({ id, text, extend, onClick }) {
  return (
    <button
      className={`bg-secondary hover:scale-110 py-3 px-6 rounded-full text-white text-lg font-bold ${extend}`}
      onClick={onClick}
      id={id}
    >
      {text}
    </button>
  );
}
