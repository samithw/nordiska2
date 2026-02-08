import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
const missionImage = PlaceHolderImages.find((img) => img.id === "mission");
const visionImage = PlaceHolderImages.find((img) => img.id === "vision");

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-primary-foreground px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
            Pioneering Nordic Cleantech
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-primary-foreground/80">
            Innovative solutions for a sustainable future. We harness the power
            of nature and technology to create a cleaner world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="accent" asChild>
              <Link href="/solutions">Our Solutions</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-muted-foreground">
                At Nordiska Solutions, our mission is to accelerate the
                transition to a sustainable global economy. We believe in a
                future where clean technology is the standard, not the
                exception.
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Innovation</h3>
                    <p className="text-muted-foreground text-sm">
                      Continuously developing cutting-edge cleantech.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Sustainability</h3>
                    <p className="text-muted-foreground text-sm">
                      Placing environmental and social responsibility at our
                      core.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Collaboration</h3>
                    <p className="text-muted-foreground text-sm">
                      Working with partners to maximize our impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {missionImage && (
                <Image
                  src={missionImage.imageUrl}
                  alt={missionImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-full"
                  data-ai-hint={missionImage.imageHint}
                />
              )}
              {visionImage && (
                <Image
                  src={visionImage.imageUrl}
                  alt={visionImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-full mt-8"
                  data-ai-hint={visionImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Our Core Values
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
              The principles that guide our work every day.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  Trustworthiness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We build lasting relationships based on transparency,
                  reliability, and integrity.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive for the highest quality in our technology, our
                  services, and our partnerships.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                  Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We are driven by the desire to make a tangible, positive
                  impact on the planet.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
