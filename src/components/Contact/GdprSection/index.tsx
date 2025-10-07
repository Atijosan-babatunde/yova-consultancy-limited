import { Accordion, AccordionItem } from "@/components/Ui/accordion";


export function GdprSection() {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        GDPR & Data Privacy
      </h2>

      <Accordion>
        <AccordionItem title="How do you handle my personal data?">
          We process your personal data in accordance with strict GDPR
          guidelines. Your information is used solely for responding to your
          inquiry and improving our services. We never share your data with
          third parties without your explicit consent.
        </AccordionItem>

        <AccordionItem title="Can I request access to my data?">
          Yes, you have the right to access, modify, or delete your personal
          data at any time. Simply contact us at privacy@yovatech.com with your
          request, and we'll process it within 30 days as required by GDPR
          regulations.
        </AccordionItem>

        <AccordionItem title="What security measures are in place?">
          We employ industry-standard security measures including SSL
          encryption, secure data storage, regular security audits, and access
          controls. All data is stored on secure servers with regular backups
          and monitoring to protect against unauthorized access.
        </AccordionItem>
      </Accordion>
    </div>
  )
}
