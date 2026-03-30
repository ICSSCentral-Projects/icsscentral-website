import cics1 from "../../assets/cics-1.png";

interface InnerHeroBannerProps {
  title: string;
  breadcrumb: string;
  overlayOpacity?: number;
}

export default function InnerHeroBanner({ title, breadcrumb, overlayOpacity = 0.55 }: InnerHeroBannerProps) {
  return (
    <section className="relative w-full" style={{ height: '411px' }}>
      <div className="absolute inset-0">
        <img
          src={cics1}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }} />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <h1
          className="text-white uppercase mb-3"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: '60px',
            lineHeight: '87px',
            textAlign: 'center',
          }}
        >
          {title}
        </h1>
        <p
          className="text-white"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: '28px',
            lineHeight: '64px',
            textAlign: 'center',
          }}
        >
          {breadcrumb}
        </p>
      </div>
    </section>
  );
}