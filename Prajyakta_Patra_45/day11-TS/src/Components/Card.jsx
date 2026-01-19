const Card = ({ children }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      {children}
    </div>
  );
};

export default Card;
