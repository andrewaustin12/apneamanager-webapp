import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about Apnea Manager's privacy-first approach. We collect no personal data - all training calculations happen locally on your device.",
  openGraph: {
    title: "Privacy Policy | Apnea Manager",
    description: "Learn about Apnea Manager's privacy-first approach. We collect no personal data.",
  },
  twitter: {
    title: "Privacy Policy | Apnea Manager",
    description: "Learn about Apnea Manager's privacy-first approach. We collect no personal data.",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <Button asChild variant="secondary" size="lg">
            <Link href="/" className="gap-2">
              <ArrowLeft size={16} />
              Back
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-extrabold pb-6">
          Privacy Policy for Apnea Manager
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Privacy Policy
Effective Date: ${new Date().toLocaleDateString()}

Welcome to Apnea Manager! We prioritize your privacy by operating as a completely data-free application.

1. No Data Collection
We are committed to your privacy and want to be clear: Apnea Manager does not collect, store, or process any personal data. All training calculations and tracking are performed locally on your device.

2. How Apnea Manager Works
- All training calculations and tracking are done directly on your device
- No information is sent to external servers
- No user accounts are required
- No cookies are used
- No analytics are collected

3. Your Privacy Benefits
- Complete data privacy: your training information stays on your device
- No risk of data breaches: we can't lose what we don't collect
- No tracking: your usage of the app is completely private
- No advertisements: we don't collect or share data for advertising

4. Third-Party Services
We do not integrate with any third-party services that would collect your data.

5. Future Updates
If our data collection practices ever change, we will update this policy and notify users through the application.

6. Contact Us
If you have any questions about our privacy practices, please contact us at:
Email: privacy@apneamanager.com

Thank you for choosing Apnea Manager - where your privacy comes first!`}
        </pre>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
