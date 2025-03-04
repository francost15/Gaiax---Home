import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, CheckCircle } from "lucide-react"

export default function DemoPage() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Agenda una <span className="text-primary">demostración</span>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Descubre cómo Gaiax puede transformar la formación en tu organización con una demostración personalizada.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold mb-6">¿Qué incluye la demostración?</h2>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Sesión personalizada de 30 minutos</h3>
                  <p className="text-muted-foreground">Adaptada a las necesidades específicas de tu organización</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Recorrido completo por la plataforma</h3>
                  <p className="text-muted-foreground">
                    Conoce todas las funcionalidades y cómo pueden beneficiar a tu equipo
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Consulta con un experto</h3>
                  <p className="text-muted-foreground">Resuelve todas tus dudas con uno de nuestros especialistas</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Propuesta personalizada</h3>
                  <p className="text-muted-foreground">Recibe un plan adaptado a tus objetivos y presupuesto</p>
                </div>
              </li>
            </ul>

            {/* <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="text-sm">
                "La demostración nos ayudó a entender cómo GaiaX podía adaptarse a nuestras necesidades específicas.
                Ahora nuestro equipo está más comprometido con su desarrollo profesional."
              </p>
              <div className="mt-3 flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                <div>
                  <p className="font-medium">María Rodríguez</p>
                  <p className="text-sm text-muted-foreground">Directora de RRHH, Empresa S.A.</p>
                </div>
              </div>
            </div> */}
          </div>

          <div className="bg-white p-8 rounded-xl border shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Solicita tu demostración</h2>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="nombre-demo" className="text-sm font-medium">
                  Nombre completo
                </label>
                <input
                  id="nombre-demo"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email-demo" className="text-sm font-medium">
                  Correo electrónico
                </label>
                <input
                  id="email-demo"
                  type="email"
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="empresa-demo" className="text-sm font-medium">
                  Empresa
                </label>
                <input
                  id="empresa-demo"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tamano" className="text-sm font-medium">
                  Tamaño de la empresa
                </label>
                <select
                  id="tamano"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="1-10">1-10 empleados</option>
                  <option value="11-50">11-50 empleados</option>
                  <option value="51-200">51-200 empleados</option>
                  <option value="201-500">201-500 empleados</option>
                  <option value="501+">Más de 500 empleados</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="fecha" className="text-sm font-medium">
                  Fecha preferida
                </label>
                <input
                  id="fecha"
                  type="date"
                  className="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="pt-4">
                <Button className="w-full">Solicitar demostración</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

