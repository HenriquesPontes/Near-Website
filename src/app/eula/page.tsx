import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "End User License Agreement | Near Glasses",
};

export default function EULAPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
        <h1 className="mb-4 font-sans text-4xl font-medium tracking-tight sm:text-5xl">
          End User License <span className="font-pixel">Agreement</span>
        </h1>
        <p className="mb-12 font-mono text-sm tracking-[0.1em] text-foreground/50">
          Last Updated: July 29, 2026
        </p>

        <div className="space-y-10 font-sans text-base leading-relaxed tracking-tight opacity-80 sm:text-lg">
          
          <section>
            <p>
              This End User License Agreement (&quot;EULA&quot;) is a legal agreement between you and Near (&quot;Licensor&quot;) governing your use of the Near iOS application (&quot;Application&quot;). By installing or using the Application, you agree to be bound by the terms of this EULA.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              1. Scope of License
            </h2>
            <p>
              Licensor grants you a non-transferable, non-exclusive, revocable license to use the Application on any Apple-branded products that you own or control, as permitted by the Usage Rules set forth in the Apple App Store Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              2. App-Specific Restrictions
            </h2>
            <p>
              In addition to standard Apple App Store restrictions, you specifically agree that you will not:
            </p>
            <ul className="list-inside list-disc mt-4 space-y-2">
              <li>Reverse engineer, decompile, or extract the proprietary Bluetooth signature database used for device detection.</li>
              <li>Use the Application&apos;s detection capabilities to harass, stalk, or physically confront individuals.</li>
              <li>Integrate the Application&apos;s scanning logic or notifications into automated physical security or retaliation systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              3. Consent to Local Processing
            </h2>
            <p>
              The Application requires access to your device&apos;s Bluetooth hardware and Location Services to function properly. By using the Application, you consent to these hardware requests. You acknowledge that all detection algorithms, matching, and data storage occur strictly locally on your device, and Licensor does not collect or transmit this data.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              4. Disclaimer of Warranty
            </h2>
            <p>
              THE APPLICATION IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;. LICENSOR MAKES NO WARRANTY THAT THE APPLICATION WILL DETECT EVERY SMART GLASS OR RECORDING DEVICE. YOU ACKNOWLEDGE THAT BLUETOOTH SIGNATURES CAN BE SPOOFED OR DISABLED BY HARDWARE MANUFACTURERS OR USERS, AND LICENSOR IS NOT LIABLE FOR ANY UNDETECTED DEVICES OR RESULTING LOSS OF PRIVACY.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              5. Maintenance and Support
            </h2>
            <p>
              Licensor is solely responsible for providing any maintenance and support services for the Application. Apple has no obligation whatsoever to furnish any maintenance and support services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              6. Termination
            </h2>
            <p>
              The license is effective until terminated by you or Licensor. Your rights under this license will terminate automatically without notice if you fail to comply with any of its terms. Upon termination, you must cease all use of the Application and delete all copies from your devices.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-sans text-2xl font-medium text-foreground opacity-100">
              7. Contact Information
            </h2>
            <p>
              For questions, complaints, or claims regarding the Application, please contact us at <a href="mailto:hello@nearglasses.com" className="text-[#FF2B00] hover:underline">hello@nearglasses.com</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
