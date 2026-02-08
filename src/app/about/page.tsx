import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nordiska Solutions",
  description:
    "Learn about Nordiska Solutions' history, team, and expertise in the cleantech industry.",
};

const teamMembers = [
  { name: "Astrid Nilsson", title: "CEO & Founder", imageId: "team-member-1" },
  {
    name: "Björn Larsson",
    title: "Head of Engineering",
    imageId: "team-member-2",
  },
  {
    name: "Freja Magnusson",
    title: "Lead Scientist",
    imageId: "team-member-3",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              About Nordiska Solutions
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We are a team of passionate engineers, scientists, and visionaries
              dedicated to building a sustainable future through cleantech
              innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-16">
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="md:text-right md:pr-12 mb-8 md:mb-0">
                  <p className="font-bold text-accent">2018</p>
                  <h3 className="font-headline text-2xl font-bold text-primary mt-1">
                    The Idea is Born
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Nordiska Solutions was founded with a simple yet powerful
                    idea: to leverage Nordic ingenuity to solve global
                    environmental challenges.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="hidden md:block"></div>
                <div className="md:pl-12 mb-8 md:mb-0">
                  <p className="font-bold text-accent">2020</p>
                  <h3 className="font-headline text-2xl font-bold text-primary mt-1">
                    First Prototype
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    After two years of intensive R&D, we successfully launched
                    our first prototype for a revolutionary water purification
                    system.
                  </p>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <div className="md:text-right md:pr-12">
                  <p className="font-bold text-accent">2022</p>
                  <h3 className="font-headline text-2xl font-bold text-primary mt-1">
                    Securing Partnerships
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    We partnered with key industry leaders to scale our
                    solutions and expand our reach across Northern Europe.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === member.imageId
              );
              return (
                <Card key={member.name} className="text-center">
                  <CardHeader>
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        width={120}
                        height={120}
                        className="rounded-full mx-auto mb-4 border-4 border-primary"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                    <CardTitle className="font-headline">
                      {member.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-accent font-semibold">{member.title}</p>
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
