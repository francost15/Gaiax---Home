import { Lightbulb, Users, Fingerprint, Shield, Users2, Heart } from "lucide-react"

export default function ValoresPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Nuestros <span className="text-primary">Valores</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Estos principios guían cada decisión que tomamos y definen nuestra cultura organizacional.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovación</h3>
            <p className="text-muted-foreground">
              Apostamos por el uso de tecnologías emergentes para reinventar el aprendizaje y mantenernos a la
              vanguardia.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Accesibilidad</h3>
            <p className="text-muted-foreground">
              Ofrecemos soluciones asequibles y fáciles de implementar, garantizando que la capacitación esté al alcance
              de todas las pymes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Fingerprint className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalización</h3>
            <p className="text-muted-foreground">
              Creemos en la formación única y adaptada a las necesidades individuales de cada empleado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integridad</h3>
            <p className="text-muted-foreground">
              Valoramos la transparencia, seguridad y privacidad de los datos, asegurando confianza en cada interacción.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users2 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Colaboración</h3>
            <p className="text-muted-foreground">
              Fomentamos el trabajo en equipo y las alianzas estratégicas, entendiendo que el éxito se construye de
              forma conjunta.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border shadow-sm">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Impacto Social</h3>
            <p className="text-muted-foreground">
              Nos comprometemos a contribuir al desarrollo social y económico, elevando la productividad y la calidad de
              vida de las comunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

