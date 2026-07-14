function AboutImage() {
  return (
    <div className="relative shrink-0 group">
      <div className="absolute inset-0 rounded-2xl bg-slate-100 transition-transform duration-500 group-hover:rotate-3"></div>

      <img
        src="./Images/Main-Image-2.png"
        alt="مهندس مکانیک مکاترونیک در حوزه طراحی تجهیزات صنعتی و بازیافت سرب"
        loading="lazy"
        className="relative w-130 h-130 rounded-2xl object-cover transition-all duration-500 ease-out group-hover:-rotate-3deg"
      />
    </div>
  );
}

export default AboutImage;
