
const COLORS = {
  yellow: "border-yellow-100 hover:border-yellow-300",
  red: "border-red-200 hover:border-red-400",
};

function LearnMore({ color }) {
  return (
    <a
      href="#"
      className={`uppercase font-[Fraunces] border-b-8 ${COLORS[color]}`}
    >
      learn more
    </a>
  );
}

export default LearnMore;
