import { Globe, Users, BarChart2, TrendingUp } from "lucide-react"

export default function VisionPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nuestra <span className="text-primary">Visión</span>
          </h1>
          <p className="mt-8 text-xl italic border-l-4 border-primary pl-6 py-2 max-w-2xl mx-auto text-left">
            "Ser la plataforma líder en formación adaptativa para pymes a nivel global, transformando la capacitación en
            una experiencia dinámica, personalizada y medible, que genere un impacto positivo en la competitividad y
            crecimiento de las empresas."
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Globe className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Liderazgo Global</h3>
            <p className="text-muted-foreground">
              Aspiramos a ser reconocidos mundialmente como la solución preferida de capacitación para pequeñas y
              medianas empresas.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Formación Personalizada</h3>
            <p className="text-muted-foreground">
              Creamos experiencias de aprendizaje únicas adaptadas a las necesidades específicas de cada empleado y
              empresa.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <BarChart2 className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Resultados Medibles</h3>
            <p className="text-muted-foreground">
              Proporcionamos métricas claras y datos accionables para demostrar el impacto real del aprendizaje en los
              resultados empresariales.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <TrendingUp className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Impacto Positivo</h3>
            <p className="text-muted-foreground">
              Generamos un efecto multiplicador en la competitividad y el crecimiento sostenible de las pymes a nivel
              global.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

