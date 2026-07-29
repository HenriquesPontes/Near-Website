import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <h1 className="mb-4 font-sans text-4xl font-medium tracking-tight sm:text-5xl">
          Terms of <span className="font-pixel">Service</span>
        </h1>
        <p className="mb-12 font-mono text-sm tracking-[0.1em] text-foreground/50">
          Last Updated: July 29, 2026
        </p>

        <div className="space-y-10 font-sans text-base leading-relaxed tracking-tight opacity-80 sm:text-lg">
          
          <section>
            <p>
              Welcome to Near. These Terms of Service (&quot;Terms&quot;) govern your use of the Near iOS application (&quot;the App&quot;) and the nearglasses.com website (&quot;the Website&quot;). By downloading, accessing, or using our services, you agree to be bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              1. Purpose of the Application
            </h2>
            <p>
              Near is a personal privacy utility designed to alert users when potentially intrusive smart glasses or recording wearables are detected nearby. The App works by passively scanning for Bluetooth Low Energy (BLE) signatures associated with known devices.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              2. No Guarantee of Detection (Disclaimer)
            </h2>
            <p>
              While we continually update our signature database, <strong>Near does not guarantee 100% detection of all smart glasses or recording devices</strong>. 
            </p>
            <ul className="list-inside list-disc mt-4 space-y-2">
              <li>Some devices may not broadcast identifiable Bluetooth packets.</li>
              <li>Manufacturers may update device firmware to randomize or spoof MAC addresses, temporarily evading detection.</li>
              <li>Devices that are powered off, in airplane mode, or out of Bluetooth range will not be detected.</li>
            </ul>
            <p className="mt-4">
              You acknowledge that Near is a supplementary awareness tool, not a foolproof security guarantee. You should not rely solely on the App for physical security or privacy protection.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              3. Acceptable Use
            </h2>
            <p>
              You agree to use Near solely for personal privacy awareness. You strictly agree <strong>not</strong> to use the App for:
            </p>
            <ul className="list-inside list-disc mt-4 space-y-2">
              <li>Harassing, stalking, or confronting individuals who are identified as wearing smart glasses.</li>
              <li>Vigilantism or any form of physical or verbal altercation.</li>
              <li>Reverse engineering the App&apos;s Bluetooth signature database to create competing products.</li>
              <li>Any illegal activities in your jurisdiction.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              4. Intellectual Property
            </h2>
            <p>
              All rights, title, and interest in and to the Near application, including its signature detection algorithms, UI design, and branding, remain the exclusive property of Near and its developers. You are granted a limited, non-exclusive, non-transferable license to use the App for personal use.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Near and its developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of privacy, data, or personal injury resulting from:
            </p>
            <ul className="list-inside list-disc mt-4 space-y-2">
              <li>Your use or inability to use the App.</li>
              <li>The failure of the App to detect a specific recording device.</li>
              <li>Any interactions you have with third parties as a result of using the App.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              6. Modifications to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will indicate that changes have been made by updating the &quot;Last Updated&quot; date. Continued use of the App following any modifications indicates your acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              7. Contact
            </h2>
            <p>
              For any questions regarding these Terms, please contact us at <a href="mailto:hello@nearglasses.com" className="text-[#FF2B00] hover:underline">hello@nearglasses.com</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
