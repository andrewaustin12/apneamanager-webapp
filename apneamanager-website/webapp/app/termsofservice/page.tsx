import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/footer";


const TermsOfService = () => {
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
          Terms of Service for Apnea Manager
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap text-foreground"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Terms of Service
Effective Date: ${new Date().toLocaleDateString()}

Welcome to Apnea Manager! By using our application, you agree to these Terms of Service. Please read them carefully.

1. Acceptance of Terms
By using Apnea Manager, you confirm that you have read, understood, and agreed to these Terms of Service. If you do not agree, please do not use the application.

2. Service Description
Apnea Manager is a privacy-focused freediving and breath-hold training application that performs all calculations locally on your device. We do not collect, store, or process any user data on external servers.

3. Privacy
We are committed to protecting your privacy by not collecting any personal data. All training information remains solely on your device. For more details, please refer to our Privacy Policy.

4. Use of Service
You agree to:
- Use the application only for its intended purpose of freediving and breath-hold training
- Not attempt to reverse engineer or modify the application
- Not use the application for any illegal purposes
- Not distribute or share modified versions of the application

5. Training Safety
You acknowledge that freediving and breath-hold training carry inherent risks. The application is designed as a training tool only and should be used responsibly:
- Never train alone
- Always follow proper safety protocols
- Consult with qualified instructors for proper technique
- Listen to your body and don't exceed your limits

6. Intellectual Property
All content within Apnea Manager, including but not limited to the software, design, logos, and other visual elements, is the intellectual property of Apnea Manager or its licensors. You may not copy, modify, or distribute our intellectual property without explicit permission.

7. Disclaimer of Warranties
Apnea Manager is provided "as is" and "as available." We make no warranties, expressed or implied, regarding the application's reliability, accuracy, or availability. The application is not intended to replace proper training or qualified instruction.

8. Limitation of Liability
To the maximum extent permitted by law, Apnea Manager and its creators shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the application.

9. Changes to Service
We reserve the right to:
- Modify or discontinue any part of the application
- Update these terms at any time
- Release new versions with different features

10. Governing Law
These Terms of Service shall be governed by and construed in accordance with the laws of the United Kingdom.

11. Contact
If you have any questions about these Terms of Service, please contact us at:
Email: support@apneamanager.com

Thank you for using Apnea Manager!`}
        </pre>
      </main>
      <Footer />
    </>
  );
};

export default TermsOfService;
