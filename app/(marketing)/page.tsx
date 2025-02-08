import Link from "next/link";
import {
  Sparkles,
  ImageIcon,
  Eraser,
  Wand2,
  Palette,
  ArrowRight,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A1A1A] text-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-white/10">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 justify-center">
            <Image width={60} height={60} src="/assets/logo.png" alt="Logo" className="h-6 w-6 text-orange-500" />
            <span className="font-bold text-xl">ImageAlchemy</span>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600" asChild>
            <Link href="/home">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex-1 py-20 lg:py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <Sparkles className="h-4 w-4 text-orange-500" />
              <span className="text-sm text-orange-500">
                AI-Powered Image Editing
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-white to-orange-500/50 bg-clip-text text-transparent mb-8">
              Transform Imagination into Reality
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Experience the future of image editing with our AI-powered tools.
              Restore, generate, remove, recolor, and more with just a few
              clicks.
            </p>
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
              asChild
            >
              <Link href="/home">
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
        <div className="container px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">
            Powerful AI Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-orange-500/50 transition-colors"
              >
                <div className="p-3 bg-orange-500/10 rounded-xl w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 lg:py-32 border-t border-white/10">
        <div className="container px-4">
          <div className="relative p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/20 rounded-full blur-3xl" />
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                  Start Creating Today
                </h2>
                <p className="text-gray-400 text-lg max-w-xl">
                  Join thousands of creators who are transforming their images
                  with AI
                </p>
              </div>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
                asChild
              >
                <Link href="/home">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    icon: <ImageIcon className="h-6 w-6 text-orange-500" />,
    title: "Image Restore",
    description:
      "Breathe new life into old or damaged photos with our AI restoration technology",
  },
  {
    icon: <Wand2 className="h-6 w-6 text-orange-500" />,
    title: "Generative Fill",
    description:
      "Expand your images or fill in missing areas with AI-generated content",
  },
  {
    icon: <Eraser className="h-6 w-6 text-orange-500" />,
    title: "Object Remove",
    description:
      "Seamlessly remove unwanted objects while preserving image quality",
  },
  {
    icon: <Palette className="h-6 w-6 text-orange-500" />,
    title: "Object Recolor",
    description: "Change colors of specific objects with precision and ease",
  },
  {
    icon: <Trash2 className="h-6 w-6 text-orange-500" />,
    title: "Background Remove",
    description: "Easily remove and replace backgrounds from your images",
  },
];
