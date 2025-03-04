import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, BarChart } from "lucide-react"

export default function AcercaDePage() {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Acerca de <span className="text-primary">Gaiax</span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">Transformando la capacitación empresarial</p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <p className="text-lg leading-relaxed">
              En Gaiax, estamos redefiniendo la forma en que las pequeñas y medianas empresas abordan la capacitación de
              su personal.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Nuestra plataforma nació de la necesidad de proporcionar soluciones de formación accesibles y
              personalizadas para pymes que tradicionalmente han tenido acceso limitado a programas de desarrollo de
              talento de alta calidad.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                href="/mision"
                className="block p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Nuestra Misión</h3>
                <p className="text-muted-foreground">Descubre nuestro propósito y compromiso con las pymes.</p>
              </Link>

              <Link
                href="/vision"
                className="block p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Nuestra Visión</h3>
                <p className="text-muted-foreground">Conoce hacia dónde nos dirigimos y qué queremos lograr.</p>
              </Link>

              <Link
                href="/valores"
                className="block p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">Nuestros Valores</h3>
                <p className="text-muted-foreground">
                  Explora los principios que guían nuestras decisiones y acciones.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué Gaiax?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-center mb-12">
              Nuestra plataforma está diseñada para resolver los desafíos específicos que enfrentan las pymes en el
              desarrollo de su capital humano.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Ahorro de tiempo</h3>
                <p className="text-muted-foreground">
                  Reducimos el tiempo de implementación de programas de capacitación hasta en un 70%, permitiendo a las
                  empresas centrarse en su core business.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Costo accesible</h3>
                <p className="text-muted-foreground">
                  Ofrecemos soluciones hasta un 60% más económicas que los programas tradicionales de capacitación, con
                  planes flexibles adaptados a cada presupuesto.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resultados medibles</h3>
                <p className="text-muted-foreground">
                  Proporcionamos análisis detallados del progreso y métricas claras para demostrar el ROI de tus
                  iniciativas de capacitación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+500</div>
              <p className="text-muted-foreground">Pymes atendidas</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+15k</div>
              <p className="text-muted-foreground">Empleados formados</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">93%</div>
              <p className="text-muted-foreground">Índice de satisfacción</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">+250</div>
              <p className="text-muted-foreground">Cursos disponibles</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para transformar la capacitación en tu empresa?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Descubre cómo Gaiax puede ayudarte a desarrollar el potencial de tu equipo.
          </p>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/contacto">Contactar ahora</Link>
          </Button>
        </div>
      </section>
    </>
  )
}

