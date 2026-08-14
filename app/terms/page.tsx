import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | 大笨鳥華語",
  description: "Temporary terms of service placeholder for Big Dumb Bird Mandarin.",
};

const sections = [
  {
    heading: "Using the service",
    body: "The final terms will describe who may use the app, account requirements if any, and the rules that apply when using the service.",
  },
  {
    heading: "Content and ownership",
    body: "The final terms will explain ownership of app content, permitted use, and how user-provided content is handled if that feature is offered.",
  },
  {
    heading: "Availability and changes",
    body: "The final terms will describe service availability, updates, interruptions, and how changes to the service or terms will be communicated.",
  },
  {
    heading: "Contact",
    body: "A dedicated support contact, governing terms, and effective date will be added with the final terms of service.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      titleZh="服務條款"
      intro="This temporary page reserves the terms of service location while the final agreement is being prepared."
      sections={sections}
    />
  );
}
