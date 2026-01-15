type CardsProps = {
  amount: number;
  title: string;
  color: string;
  hoverColor: string;
};

const Cards = ({ amount, title, color, hoverColor }: CardsProps) => {
  return (
    <div
      className={`relative text-white ${color} hover:${hoverColor} rounded-2xl px-8 py-10 min-h-[140px]`}
      style={{ minWidth: "260px" }}
    >
      <span className="absolute top-4 left-8 text-3xl font-bold">
        {amount}+
      </span>
      <span className="absolute bottom-4 left-8 text-lg font-medium">
        {title}
      </span>
    </div>
  );
};

export default Cards;
