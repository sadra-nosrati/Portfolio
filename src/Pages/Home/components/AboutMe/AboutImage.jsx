function AboutImage() {
  return (
    <div className="relative shrink-0 group">
      <div className="absolute inset-0 rounded-2xl bg-slate-100 transition-transform duration-500 group-hover:rotate-3"></div>

      <img
        src="./Images/AboutMe.webp"
        alt="مهندس مکانیک مکاترونیک در حوزه طراحی تجهیزات صنعتی و بازیافت سرب"
        loading="lazy"
        className="relative h-72 w-72 rounded-2xl object-cover transition-all duration-500 ease-out group-hover:-rotate-2 mobile:h-80 mobile:w-80 tablet-portrait:h-96 tablet-portrait:w-96 tablet-landscape:h-[430px] tablet-landscape:w-[430px] laptop:h-[520px] laptop:w-[520px]"
      />
    </div>
  );
}

export default AboutImage;
