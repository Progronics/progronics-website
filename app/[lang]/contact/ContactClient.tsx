"use client"

import { MapPinIcon } from "@/components/animate-ui/icons/map-pin"
import { PhoneCall } from "@/components/animate-ui/icons/phone-call"
import { Send } from "@/components/animate-ui/icons/send"
import ContactForm from "@/components/contact-form"
import MainContainer from "@/components/main-container"
import { useLocale } from "@/store/LocaleContext"

export default function ContactPage() {

  const {dict} = useLocale()

  if(!dict){
    return (
      <div>Loading...</div>
    )
  }
 
  return (
      <MainContainer id="contact" className="py-20 relative min-h-screen">

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-16 ">

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">{dict.contact_page.section.title}</h1>
            <div className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl">
              {dict.contact_page.section.description}
            </div>
          </div>




         
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 ">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{dict.contact_page.info.title}</h3>
                <p className="text-muted-foreground mb-8 leading-tight tracking-tight">
                  {dict.contact_page.info.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPinIcon animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{dict.contact_page.contactDetails.address.title}</h4>
                    <p className="text-muted-foreground">
                      {dict.contact_page.contactDetails.address.value}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <PhoneCall animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{dict.contact_page.contactDetails.phone.title}</h4>
                    <p className="text-muted-foreground">{dict.contact_page.contactDetails.phone.value}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Send animateOnHover />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{dict.contact_page.contactDetails.email.title}</h4>
                    <p className="text-muted-foreground">{dict.contact_page.contactDetails.email.value}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">{dict.contact_page.responseTime}</p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>



        </div>
      </MainContainer>

      
  )
}
