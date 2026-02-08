"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, FormState } from "@/app/contact/actions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

const initialState: FormState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full" variant="accent">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message) {
      if (state.issues) {
        toast({
          title: "Please correct the errors",
          description: (
            <ul className="list-disc list-inside">
              {state.issues.map((issue, i) => (
                <li key={i}>{issue}</li>
              ))}
            </ul>
          ),
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success!",
          description: state.message,
        });
        // Consider resetting the form here if needed
      }
    }
  }, [state, toast]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your Name"
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your.email@example.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Inquiry about..."
          required
        />
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          required
          rows={5}
        />
      </div>
      <SubmitButton />
    </form>
  );
}
