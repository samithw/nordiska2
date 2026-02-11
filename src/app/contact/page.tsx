import { Contacts } from "@/components/Contacts";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Nordiska Solutions",
  description:
    "Get in touch with Nordiska Solutions for inquiries and requests.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Get in Touch
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question about our
              solutions, partnerships, or anything else, our team is ready to
              answer all your questions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-muted-foreground">
                      Innovator's House, 123 Cleantech Ave,
                      <br />
                      Stockholm, Sweden
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">
                      contact@nordiska.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Call Us</h3>
                    <p className="text-muted-foreground">+46 8 123 456 78</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <Contacts />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
