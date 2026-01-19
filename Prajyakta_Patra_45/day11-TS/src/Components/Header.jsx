const Header = ({ title, subtitle }) => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
    </div>
  );
};

export default Header;
