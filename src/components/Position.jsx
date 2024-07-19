const produceSpans = (text, position, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-${position} ${animation}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-base xs:text-xl sm:text-3xl md:text-[36px] 2xl:text-[66px] leading-[32px] 2xl:leading-[40px] w-full flex justify-center items-center">
      <div className="absolute inset-0 flex flex-col lg:top-2">
        <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Software Developer">
          {produceSpans("Web Developer", "botom", "animate-textRotate1")}
        </div>
        <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Content Creator">
          {produceSpans("Data Analyst", "top", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};

export default Position;