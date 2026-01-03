const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-[#181c22] p-12">
      <div className="max-w-md text-center">

        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-2xl bg-indigo-500/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-4 text-[#d1d5db]">{title}</h2>
        <p className="text-[#d1d5db]">{subtitle}</p>

      </div>
    </div>
  );
};

export default AuthImagePattern;
