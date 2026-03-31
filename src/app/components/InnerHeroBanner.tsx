import cics1 from "../../assets/cics-1.png";

interface InnerHeroBannerProps {
  title: string;
  breadcrumb: string;
  overlayOpacity?: number;
}

export default function InnerHeroBanner({ title, breadcrumb, overlayOpacity = 0.55 }: InnerHeroBannerProps) {
  return (
    <section className="relative w-full h-[250px] md:h-[411px]">
      <div className="absolute inset-0">
        <img
          src={cics1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }} />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-white uppercase mb-2 md:mb-3 text-3xl md:text-6xl font-extrabold"
          style={{
            fontFamily: "'Poppins', sans-serif",
            textAlign: 'center',
            lineHeight: '1.2',
          }}
        >
          {title}
        </h1>
        <p
          className="text-white text-base md:text-2xl font-normal"
          style={{
            fontFamily: "'Poppins', sans-serif",
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}