import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Insights | Nordiska Solutions",
  description:
    "The latest articles, reports, and insights from the world of cleantech and Nordiska Solutions.",
};

const newsArticles = [
  {
    title: "The Future of Urban Wind Energy",
    date: "October 26, 2023",
    snippet:
      "How smaller, more efficient turbines could transform our cities into power generators.",
    imageId: "news-1",
    slug: "future-urban-wind-energy",
  },
  {
    title: "Nordiska Solutions Secures Series B Funding",
    date: "October 15, 2023",
    snippet:
      "We are thrilled to announce a new round of funding to accelerate our R&D and market expansion.",
    imageId: "news-2",
    slug: "series-b-funding",
  },
  {
    title: "A Deep Dive into Cryogenic Water Purification",
    date: "September 30, 2023",
    snippet:
      "Our lead scientist explains the technology behind our groundbreaking new water treatment system.",
    imageId: "news-3",
    slug: "cryo-water-purification",
  },
];

export default function NewsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              News & Insights
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Stay up-to-date with the latest developments in cleantech and at
              Nordiska Solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => {
              const image = PlaceHolderImages.find(
                (img) => img.id === article.imageId
              );
              return (
                <Card key={article.slug} className="flex flex-col">
                  {image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={image.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover rounded-t-lg"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline">{article.title}</CardTitle>
                    <CardDescription>{article.date}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{article.snippet}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" asChild>
                      {/* In a real app, this would link to /news/[slug] */}
                      <Link href="#">Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
