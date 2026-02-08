import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Wind, Sun, Droplets } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions | Nordiska Solutions",
  description: "Explore Nordiska Solutions' portfolio of cleantech offerings.",
};

const solutions = [
  {
    title: "Advanced Wind Capture",
    description:
      "Our next-generation turbines are more efficient and quieter, designed to maximize energy output even in low-wind conditions.",
    imageId: "solution-1",
    icon: Wind,
  },
  {
    title: "Bio-Integrated Solar Panels",
    description:
      "Solar panels that mimic photosynthesis, offering higher efficiency and a smaller environmental footprint during production.",
    imageId: "solution-2",
    icon: Sun,
  },
  {
    title: "Cryo-Purification Systems",
    description:
      "A revolutionary, energy-efficient method for purifying industrial and municipal wastewater using cryogenic technology.",
    imageId: "solution-3",
    icon: Droplets,
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Our Cleantech Solutions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We develop and deploy a range of technologies designed to tackle
              the world's most pressing environmental challenges.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === solution.imageId
              );
              const Icon = solution.icon;
              return (
                <Card key={solution.title} className="flex flex-col">
                  {image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={solution.title}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="h-8 w-8 text-accent" />
                      <span className="font-headline">{solution.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <CardDescription>{solution.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
