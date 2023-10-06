import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQs() {
    return (
    <div className="max-w-4xl m-auto px-4 py-28">
        <div className="grid items-center w-full">
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl mb-4">
              <span className="mb-4 bg-gradient-to-r max-w-4xl from-violet-500 via-rose-500 to-amber-500 bg-clip-text text-transparent">
                FAQs               
              </span>
            </h1>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                <AccordionTrigger>What is Influencer Dojo, and how does it work?</AccordionTrigger>
                <AccordionContent>
                Influencer Dojo is a comprehensive collection of carefully curated influencer profiles spanning various niches and industries. It works by providing you with access to over 10,000 influential figures who can help you boost your brand's visibility and engagement.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                <AccordionTrigger>Why is a low bounce rate important for my outreach campaigns?</AccordionTrigger>
                <AccordionContent>
                A low bounce rate is crucial because it ensures that the messages you send through our database reach their intended recipients' inboxes. This means your outreach efforts are more likely to result in successful collaborations, increasing your chances of engagement.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                <AccordionTrigger>What makes your leads different from other databases?</AccordionTrigger>
                <AccordionContent>
                Our leads are handpicked to ensure quality over quantity. We prioritize relevance by aligning influencers with your industry, target audience, and brand values. You won't have to sift through irrelevant profiles, saving you time and effort.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                <AccordionTrigger>Can I export as many email addresses as I need?</AccordionTrigger>
                <AccordionContent>
                Yes, you can! We offer unlimited email exports, giving you the flexibility to scale your outreach efforts as much as your campaign requires. No restrictions mean you can reach out to as many potential collaborators as you need.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                <AccordionTrigger>How often is the database updated, and why is that important?</AccordionTrigger>
                <AccordionContent>
                Our database is updated weekly to keep you current with the latest trends and emerging influencers. Staying up-to-date is crucial in influencer marketing, as it allows you to discover new rising stars and align your campaigns with the latest trends.
                </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                <AccordionTrigger>What if I need specific data or information about certain influencers?</AccordionTrigger>
                <AccordionContent>
                We've got you covered! Our database offers a custom data request feature. You can tailor your searches to fit your brand's unique requirements and objectives, ensuring you have all the information you need to make informed decisions for your campaigns.
                </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
        </div>
    </div>
    )
  }
  