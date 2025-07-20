import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feature Requests",
  description: "Help shape the future of Apnea Manager by suggesting and voting on new features. Join our community in building the ultimate breath hold training app.",
  openGraph: {
    title: "Feature Requests | Apnea Manager",
    description: "Help shape the future of Apnea Manager by suggesting and voting on new features.",
  },
  twitter: {
    title: "Feature Requests | Apnea Manager",
    description: "Help shape the future of Apnea Manager by suggesting and voting on new features.",
  },
};

export default function FeatureRequestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 