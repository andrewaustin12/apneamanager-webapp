import config from '@/config';

export default function CTA() {
  const { cta } = config.landingPage;

  return (
    <section className={`bg-[${config.theme.colors.secondary}] py-24`}>
      <div className="container px-4 mx-auto max-w-4xl text-center">
        <h2 className="text-6xl font-bold mb-6">
          {cta.title}
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          {cta.description}
        </p>
        <button 
          onClick={() => window.open(cta.buttonLink, '_blank')}
          className={`text-white font-semibold px-8 py-3 rounded-md flex items-center gap-2 mx-auto hover:opacity-90`} 
          style={{ backgroundColor: config.theme.colors.primary }}
        >
          <svg 
            viewBox={cta.buttonIcon.viewBox}
            fill="white"
            className="w-5 h-5"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d={cta.buttonIcon.path} />
          </svg>
          {cta.buttonText}
        </button>
      </div>
    </section>
  );
}