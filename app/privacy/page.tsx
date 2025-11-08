import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Separator } from "@/components/ui/separator";


export default function Page() {

  return (
    <>
      <Navigation />
      <div >
        <section className="py-20">
          <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-16">
            <div className="mx-auto space-y-5">
              <div>
                <div className="text-3xl font-bold ">
                  Privacy Policy
                </div>
                <p className="text-muted-foreground">
                  Last updated: November 07, 2025
                </p>
              </div>
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  This Privacy Policy describes our policies and procedures on the collection, use and
                  disclosure of your information when you use our Service and tells you about your
                  privacy rights and how the law protects you.
                </p>
                <p>
                  By using our Service, you agree to the collection and use of information in accordance
                  with this Privacy Policy.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Interpretation and Definitions</h2>

                <h3 className="font-medium">Interpretation</h3>
                <p>
                  Words with initial capital letters have meanings defined under the following
                  conditions. These definitions shall have the same meaning regardless of singular or
                  plural usage.
                </p>

                <h3 className="font-medium">Definitions</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Account:</strong> A unique account created for you to access our Service.
                  </li>
                  <li>
                    <strong>Affiliate:</strong> An entity that controls, is controlled by, or is under
                    common control with us.
                  </li>
                  <li>
                    <strong>Company:</strong> Refers to Progronics ("the Company", "We", "Us", or "Our").
                  </li>
                  <li>
                    <strong>Cookies:</strong> Small files placed on your device to store browsing data.
                  </li>
                  <li>
                    <strong>Country:</strong> Refers to Pakistan.
                  </li>
                  <li>
                    <strong>Device:</strong> Any device that can access the Service, such as a computer,
                    phone, or tablet.
                  </li>
                  <li>
                    <strong>Personal Data:</strong> Any information that relates to an identifiable
                    individual.
                  </li>
                  <li>
                    <strong>Service:</strong> Refers to the Website.
                  </li>
                  <li>
                    <strong>Website:</strong> Refers to Progronics, accessible at{" "}
                    <a href="https://www.progronics.com" className="text-primary underline">
                      www.progronics.com
                    </a>
                  </li>
                  <li>
                    <strong>You:</strong> The individual accessing or using the Service, or a company or
                    legal entity represented by such individual.
                  </li>
                </ul>

                <Separator />
                <h2 className="text-xl font-semibold">Collecting and Using Your Personal Data</h2>

                <h3 className="font-medium">Types of Data Collected</h3>
                <p>
                  We may collect Personal Data such as your email address, first and last name, and
                  Usage Data.
                </p>

                <h3 className="font-medium">Usage Data</h3>
                <p>
                  Usage Data includes details like IP address, browser type, visited pages, and time
                  spent on those pages. It may also include information from your mobile device.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Tracking Technologies and Cookies</h2>
                <p>
                  We use Cookies and similar technologies like web beacons and tags to analyze and
                  improve our Service.
                </p>

                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Essential Cookies:</strong> Needed to provide access and prevent fraudulent
                    use.
                  </li>
                  <li>
                    <strong>Notice Acceptance Cookies:</strong> Remember your cookie preferences.
                  </li>
                  <li>
                    <strong>Functionality Cookies:</strong> Remember your login details and preferences.
                  </li>
                </ul>

                <Separator />
                <h2 className="text-xl font-semibold">Use of Your Personal Data</h2>
                <p>The Company may use your data for the following purposes:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>To provide and maintain our Service.</li>
                  <li>To manage your account and registration.</li>
                  <li>To contact you about updates or inquiries.</li>
                  <li>To provide offers, news, and promotions.</li>
                  <li>To manage your requests or customer support cases.</li>
                  <li>For business transfers such as mergers or acquisitions.</li>
                  <li>
                    For analytics, performance evaluation, and service improvement.
                  </li>
                </ul>

                <Separator />
                <h2 className="text-xl font-semibold">Retention and Transfer of Data</h2>
                <p>
                  We retain Personal Data as long as necessary to comply with legal obligations and
                  improve our services. Your information may be transferred across jurisdictions under
                  secure conditions.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Delete Your Personal Data</h2>
                <p>
                  You may request deletion of your Personal Data or manage it through your account
                  settings. Some information may be retained as required by law.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Disclosure of Data</h2>
                <p>
                  We may disclose data to comply with legal obligations, defend Company rights, prevent
                  fraud, or protect public safety.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Security</h2>
                <p>
                  While we strive to use commercially reasonable means to protect your Personal Data, no
                  method of transmission over the Internet is 100% secure.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Children’s Privacy</h2>
                <p>
                  We do not knowingly collect information from anyone under the age of 13. If you
                  believe your child has provided us data, contact us for removal.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Links to Other Websites</h2>
                <p>
                  Our Service may contain external links. We are not responsible for the content or
                  privacy practices of third-party websites.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. Updates will be posted on this page
                  with the revised “Last updated” date.
                </p>

                <Separator />
                <h2 className="text-xl font-semibold">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, contact us at{" "}
                  <a href="mailto:info@progronics.com" className="text-primary underline">
                    info@progronics.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>



      <Footer />
    </>
  )
}