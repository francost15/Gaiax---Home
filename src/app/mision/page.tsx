import { Target, Users, BarChartIcon as ChartBar } from "lucide-react"

export default function MisionPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nuestra <span className="text-primary">Misión</span>
          </h1>
          <p className="mt-8 text-xl italic border-l-4 border-primary pl-6 py-2 max-w-2xl mx-auto text-left">
            "Empoderar a las pymes desarrollando su capital humano mediante una plataforma de capacitación en línea
            accesible y asequible, que transforme el aprendizaje tradicional en rutas formativas personalizadas y
            flexibles, impulsando el desarrollo social y económico."
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Capacitación Accesible</h3>
            <p className="text-muted-foreground">
              Creamos soluciones de formación que eliminan barreras de acceso para todas las pymes, sin importar su
              tamaño o recursos.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rutas Personalizadas</h3>
            <p className="text-muted-foreground">
              Transformamos el aprendizaje tradicional en experiencias adaptadas a las necesidades específicas de cada
              empleado y empresa.
            </p>
          </div>

          <div className="text-center">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ChartBar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Impacto Social</h3>
            <p className="text-muted-foreground">
              Contribuimos al desarrollo económico y social facilitando el crecimiento del capital humano de las pymes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

