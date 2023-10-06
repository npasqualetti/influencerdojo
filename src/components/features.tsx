import { FeatureCard } from "@/components/ui/feature-card";
import {
    Code2,
    Activity,
    Lock,
    Mail,
    Paintbrush,
    Server,
} from "lucide-react";

export function Features() {
    return (
      <div className="max-w-4xl m-auto px-4 w-full py-20">
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <FeatureCard
              icon={<Lock size={16} />}
              feature="Unlock 10K+ Leads"
              description="Access a vast database of over 10,000 carefully chosen influencer leads across various niches."
            />
            <FeatureCard
              icon={<Activity size={16} />}
              feature="Low Bounce Rate"
              description="Ensure your messages reach their intended recipients with our low bounce rate guarantee."
            />
            <FeatureCard
              icon={<Paintbrush size={16} />}
              feature="Curated Leads"
              description="Say goodbye to irrelevant profiles; our leads are handpicked to match your industry and audience."
            />
          </div>
          <div className="flex flex-col gap-8">
            <FeatureCard
              icon={<Mail size={16} />}
              feature="Unlimited Email Export"
              description="Seamlessly scale your outreach efforts by exporting unlimited email addresses."
            />
            <FeatureCard
              icon={<Server size={16} />}
              feature="Updated Weekly"
              description="Stay current with weekly database updates, discovering emerging influencers."
            />
            <FeatureCard
              icon={<Code2 size={16} />}
              feature="Custom Data Requests"
              description="Tailor your searches to fit your brand's unique needs with our customizable data options."
            />
          </div>
        </div>
      </div>
    );
  }