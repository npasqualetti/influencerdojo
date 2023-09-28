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
              description="Use any OAuth provider supported by next-auth."
            />
            <FeatureCard
              icon={<Activity size={16} />}
              feature="Low Bounce Rate"
              description="Create monthly and yearly billing plans. Let users manage thier billing plan."
            />
            <FeatureCard
              icon={<Paintbrush size={16} />}
              feature="Curated"
              description="Fully customizable component library using Tailwind."
            />
          </div>
          <div className="flex flex-col gap-8">
            <FeatureCard
              icon={<Mail size={16} />}
              feature="Email Export"
              description="Create email templates using react-email."
            />
            <FeatureCard
              icon={<Server size={16} />}
              feature="Updated Weely"
              description="Deploy painlessly using Vercel or any serverless provider."
            />
            <FeatureCard
              icon={<Code2 size={16} />}
              feature="Integrations"
              description="Easy to use, clean code, expertly crafted."
            />
          </div>
        </div>
      </div>
    );
  }