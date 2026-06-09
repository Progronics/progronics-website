"use client"
import { Separator } from "@/components/ui/separator";
import { useLocale } from "@/store/LocaleContext";


export default function Page() {

  const { dict } = useLocale()

  if (!dict) {
    return (
      <div>Loading...</div>
    )
  }

  const privacy = dict.privacy_page

  return (
    <div>
      <section className="py-20">
        <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-16">
          <div className="mx-auto space-y-5">
            <div>
              <h1 className="text-3xl font-bold">
                {privacy.title}
              </h1>

              <p className="text-muted-foreground">
                {privacy.last_updated}
              </p>
            </div>

            <div className="space-y-6 text-sm leading-relaxed">
              <p>{privacy.intro.p1}</p>
              <p>{privacy.intro.p2}</p>

              <Separator />

              <h2 className="text-xl font-semibold">
                {privacy.interpretation_definitions.title}
              </h2>

              <h3 className="font-medium">
                {privacy.interpretation_definitions.interpretation_title}
              </h3>

              <p>
                {privacy.interpretation_definitions.interpretation_text}
              </p>

              <h3 className="font-medium">
                {privacy.interpretation_definitions.definitions_title}
              </h3>

              <ul className="list-disc list-inside space-y-1">
                {Object.values(privacy.interpretation_definitions.definitions).map(
                  (item) => (
                    <li key={item.label}>
                      <strong>{item.label}:</strong> {item.text}
                    </li>
                  )
                )}
              </ul>

              <Separator />

              <h2 className="text-xl font-semibold">
                {privacy.collecting_data.title}
              </h2>

              <h3 className="font-medium">
                {privacy.collecting_data.types_title}
              </h3>

              <p>{privacy.collecting_data.types_text}</p>

              <h3 className="font-medium">
                {privacy.collecting_data.usage_title}
              </h3>

              <p>{privacy.collecting_data.usage_text}</p>

              <Separator />

              <h2 className="text-xl font-semibold">
                {privacy.cookies_section.title}
              </h2>

              <p>{privacy.cookies_section.text}</p>

              <ul className="list-disc list-inside space-y-1">
                {Object.values(privacy.cookies_section.items).map((item) => (
                  <li key={item.label}>
                    <strong>{item.label}:</strong> {item.text}
                  </li>
                ))}
              </ul>

              <Separator />

              <h2 className="text-xl font-semibold">
                {privacy.use_data.title}
              </h2>

              <p>{privacy.use_data.text}</p>

              <ul className="list-disc list-inside space-y-1">
                {privacy.use_data.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <PolicySection section={privacy.retention_transfer} />
              <PolicySection section={privacy.delete_data} />
              <PolicySection section={privacy.disclosure} />
              <PolicySection section={privacy.security} />
              <PolicySection section={privacy.children} />
              <PolicySection section={privacy.external_links} />
              <PolicySection section={privacy.changes} />

              <Separator />

              <h2 className="text-xl font-semibold">
                {privacy.contact.title}
              </h2>

              <p>
                {privacy.contact.text}{" "}
                <a
                  href="mailto:info@progronics.com"
                  className="text-primary underline"
                >
                  info@progronics.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PolicySection({
  section,
}: {
  section: {
    title: string
    text: string
  }
}) {
  return (
    <>
      <Separator />

      <h2 className="text-xl font-semibold">
        {section.title}
      </h2>

      <p>{section.text}</p>
    </>
  )
}
