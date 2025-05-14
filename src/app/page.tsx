import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen text-foreground overflow-hidden">
            <section className="relative z-10 py-24 flex-grow">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
                        {/* CORNER DECORATION */}
                        <div className="absolute -top-10 left-o w-40 h-40 border-l-2 border-t-2" />

                        {/* LEFT SIDE */}
                        <div className="lg:col-span-7 space-y-8 relative">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                                <div>
                                    <span className="text-foreground">Transform</span>
                                </div>
                                <div>
                                    <span className="text-primary">Your Body</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-foreground">With Advanced</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-foreground">AI</span>
                                    <span className="text-primary">Technology</span>
                                </div>
                            </h1>

                            {/* SEPERATOR LINE */}
                            <div className="h-px w-full bg-gradient-to-r from-primary via-secondary to-primary/50" />

                            <p className="text-xl text-muted-foreground w-2/3">
                                Talk to our AI Assistant and get personalized diet plans and workout routines designed just for you
                            </p>

                            {/* STATS */}
                            <div className="flex items-center gap-10 py-6 font-mono">
                                <div className="flex flex-col">
                                    <div className="text-2xl text-primary">500+</div>
                                    <div className="text-xs uppercase tracking-wider">ACTIVE USERS</div>
                                </div>

                                <div className="h-12 w-px  bg-gradient-to-b to-transparent via-border to-trasnparent" />

                                <div className="flex flex-col">
                                    <div className="text-2xl text-primary">3min</div>
                                    <div className="text-xs uppercase tracking-wider">Generation</div>
                                </div>
                                
                                <div className="h-12 w-px  bg-gradient-to-b to-transparent via-border to-trasnparent" />

                                <div className="flex flex-col">
                                    <div className="text-2xl text-primary">100%</div>
                                    <div className="text-xs uppercase tracking-wider">PERSONALIZED</div>
                                </div>
                            </div>

                            {/* BUTTON */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                <Button size={"lg"} asChild className="overflow-hidden bg-primary text-primary-foreground px-8 py-6 text-lg font-medium">
                                    <Link href={"/generate-program"} className="flex items-center font-mono">
                                        Build Your Program
                                        <ArrowRight className="ml-2 size-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="lg:col-span-5 relative">
                            {/* CORNER PIECES */}
                            <div className="absolute -inset-4 pointer-events-none">
                                <div className="absolute left-0 top-0 w-16 h-16 border-l-2 border-t-2 border-border" />
                                <div className="absolute right-0 top-0 w-16 h-16 border-r-2 border-t-2 border-border" />
                                <div className="absolute left-0 bottom-0 w-16 h-16 border-l-2 border-b-2 border-border" />
                                <div className="absolute right-0 bottom-0 w-16 h-16 border-r-2 border-b-2 border-border" />
                            </div>

                            {/* IMAGE CONTAINER */}
                            <div className="relative aspect-square max-w-lg mx-auto">
                                <div className="relative overflow-hidden rounded-lg bg-cyber-black">
                                    <img src="/hero-ai3.png" alt="AI Fitness Coach" className="size-full object-cover object-center" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
  )
}

export default HomePage
