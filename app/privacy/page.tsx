import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | 大笨鳥華語",
  description: "Temporary privacy policy placeholder for Big Dumb Bird Mandarin.",
};

const sections = [
  {
    heading: "Information and collection",
    body: "The final policy will explain what information the app collects, why it is needed, and how it is processed. These details are still being prepared.",
  },
  {
    heading: "Storage and sharing",
    body: "The final policy will describe retention, security, service providers, and any circumstances in which information may be shared.",
  },
  {
    heading: "Your choices",
    body: "The final policy will explain the controls and rights available to users, including how to request access, correction, or deletion where applicable.",
  },
  {
    heading: "Contact",
    body: "A dedicated privacy contact and effective date will be added with the final policy.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      titleZh="隱私權政策"
      intro="This temporary page reserves the privacy policy location while the final policy is being prepared."
      sections={sections}
    />
  );
}
