import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Edit3, BarChart3, Clock, Shield, Apple, Check, Scale } from "lucide-react"
import Image from "next/image"
import logo from "@/public/trackingfood.png"

export default function TrackingFoodLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
                <Image  src={logo} alt="logo"  height={55}/>
              {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Apple className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Tracking Food</span> */}
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                Recursos
              </a>
              <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                Como Funciona
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Preços
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:inline-flex">
                Já tenho acesso
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Comece Agora</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary text-primary-foreground border-primary">
                  🚀 Novo: Reconhecimento por Inteligencia Artificial 
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground text-balance">
                  Cuide da sua alimentação nunca foi tão
                  <span className="text-primary"> fácil</span>
                </h1>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                  Calcule os macros dos alimentos apenas com um clique. Fotografe, grave áudio ou digite - nós fazemos o
                  resto.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar Gratuitamente
                </Button>
                <Button size="lg" variant="outline" className="border-border bg-transparent">
                  Ver Demonstração
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Resultados em segundos</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/modern-smartphone-showing-food-tracking-app-interf.jpg"
                  alt="Tracking Food App Interface"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl transform scale-110"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Três formas simples de rastrear</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha a forma que mais combina com você. Nossa IA faz o trabalho pesado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Fotografe ou grave áudio</h3>
                <p className="text-muted-foreground">
                  Nosso bot no Telegram reconhece automaticamente os alimentos e calcula os macros instantaneamente.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-secondary/20 transition-colors">
                  <Edit3 className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Digite o que comeu</h3>
                <p className="text-muted-foreground">
                  Se não quiser usar foto ou voz, basta escrever o nome do alimento. Simples assim.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-accent/20 transition-colors">
                  <BarChart3 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">Receba os cálculos</h3>
                <p className="text-muted-foreground">
                  O Tracking Food mostra calorias, nutrientes e um relatório diário personalizado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Como funciona</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Em apenas 3 passos simples, você tem controle total da sua alimentação
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Capture seu prato</h3>
                  <p className="text-muted-foreground">Tire uma foto, grave um áudio ou digite o que você comeu</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">IA processa</h3>
                  <p className="text-muted-foreground">
                    Nossa inteligência artificial identifica os alimentos e calcula os nutrientes
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Receba insights</h3>
                  <p className="text-muted-foreground">Veja calorias, macros e acompanhe seu progresso diário</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <img
                src="/dashboard-showing-nutrition-tracking-with-colorful.jpg"
                alt="Dashboard do Tracking Food"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Balance Scale Illustration */}
                  <div className="flex items-center justify-center mb-8">
                    <Scale className="w-32 h-32 text-primary/20" />
                  </div>

                  {/* Benefits around the scale */}
                  <div className="absolute -top-4 -left-8 bg-card border border-border rounded-lg p-4 shadow-lg max-w-48">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <h4 className="font-semibold text-sm text-card-foreground">Praticidade absoluta</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Use foto, texto ou voz, do jeito que for mais rápido para você.
                    </p>
                  </div>

                  <div className="absolute -bottom-4 -left-12 bg-card border border-border rounded-lg p-4 shadow-lg max-w-48">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <h4 className="font-semibold text-sm text-card-foreground">Relatórios inteligentes</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Visualize seu progresso diário, semanal e mensal.</p>
                  </div>

                  <div className="absolute -top-4 -right-8 bg-card border border-border rounded-lg p-4 shadow-lg max-w-48">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <h4 className="font-semibold text-sm text-card-foreground">Controle total</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">Saiba exatamente o que está consumindo.</p>
                  </div>

                  <div className="absolute -bottom-4 -right-12 bg-card border border-border rounded-lg p-4 shadow-lg max-w-48">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <h4 className="font-semibold text-sm text-card-foreground">Mais saúde, menos preocupação</h4>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Mantenha o equilíbrio sem precisar decorar tabelas de calorias.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Está esperando o quê para começar a cuidar da sua saúde de forma simples e prática?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Com o Tracking Food você tem o controle da sua alimentação na palma da mão, sem complicação. Escolha o
                plano que combina com você e dê o primeiro passo para uma vida mais equilibrada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Escolha seu plano</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comece gratuitamente e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="relative border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground">Plano Gratuito</h3>
                  <p className="text-muted-foreground">Experimente sem compromisso</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-card-foreground">R$ 0,00</div>
                    <div className="text-muted-foreground">/mês</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">1 Reconhecimento por foto por dia</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Relatórios básicos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Histórico de até 7 dias</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Acesso à comunidade Tracking Food</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline">
                  Começar a usar grátis
                </Button>
              </CardContent>
            </Card>

            {/* Plus Plan */}
            <Card className="relative border-primary bg-card hover:shadow-lg transition-all duration-300 scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Mais Popular</Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground">Plano Plus</h3>
                  <p className="text-muted-foreground">Mais recursos para quem quer praticidade</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-card-foreground">R$ 15,00</div>
                    <div className="text-muted-foreground">/mês</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Reconhecimento por foto e voz</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Relatórios avançados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Histórico completo das suas refeições</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Sugestões inteligentes de substituições saudáveis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Exportação de relatórios em PDF</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Suporte por chat</span>
                  </li>
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Começar e Testar grátis
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="relative border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-card-foreground">Plano Premium</h3>
                  <p className="text-muted-foreground">O plano ideal para levar sua saúde a sério</p>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-card-foreground">R$ 25,00</div>
                    <div className="text-muted-foreground">/mês</div>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Tudo do plano Plus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Acompanhamento personalizado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Relatórios detalhados semanais e mensais</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Comparação de progresso mês a mês e metas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Recomendação de cardápios com base nos seus objetivos</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-primary" />
                    <span className="text-card-foreground">Prioridade no suporte</span>
                  </li>
                </ul>

                <Button className="w-full bg-transparent" variant="outline">
                  Começar e testar grátis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
              Pronto para transformar sua alimentação?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já estão cuidando melhor da saúde com o Tracking Food
            </p>
            <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
              Começar Gratuitamente
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Apple className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">Tracking Food</span>
              </div>
              <p className="text-muted-foreground">Cuide da sua alimentação de forma inteligente e simples.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Produto</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Recursos
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Preços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Suporte</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Central de Ajuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Termos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Tracking Food. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
