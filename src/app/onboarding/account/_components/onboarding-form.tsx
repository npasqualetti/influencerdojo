"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { completeOnboarding } from "../_actions/complete-onboarding-action";
import { UploadButton } from "@/lib/uploadthing";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRouter } from "next/navigation";

const onboardingSchema = z.object({
  name: z.string().min(2).max(64),
  last_name: z.string().min(2).max(64),
});

export function OnboardingForm({ user }: { user: User }) {
  const router = useRouter();
  const form = useForm<z.infer<typeof onboardingSchema>>({
    //@ts-ignore
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      name: "" + user.name,
      last_name: "" + user.last_name,
    },
  });

  async function onSubmit(values: z.infer<typeof onboardingSchema>) {
    await completeOnboarding(values.name, values.last_name);
    toast({
      title: "Updated",
      description: "You have successfully changed your personal information",
      variant: "default",
    });
    router.push("/onboarding/plan");
  }

  return (
    <div className="flex flex-col m-auto w-full ">
      <div className="flex flex-col pb-8">
        <p className="dark:text-white text-black text-lg font-medium text-center">
         Add Account Details
        </p>
      </div>

<div className="flex items-center justify-between pb-2">
      <p className="text-sm font-medium leading-none">Profile picture</p>
      <p className="text-xs font-normal leading-none opacity-50">OPTIONAL</p>
      </div>
      <div className="flex items-center gap-8 pb-4">
        <img
          src={
            user.image?.length
              ? user.image
              : "https://as2.ftcdn.net/v2/jpg/00/64/67/63/1000_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
          }
          className="w-20 h-20 rounded-full"
          alt="Profile Picture"
        />
        <div className="rounded-md w-full dark:border-zinc-800 border-zinc-200 border border-dashed px-6 py-4 text-sm">
          <UploadButton
            endpoint="profilePictureUploader"
            onClientUploadComplete={(res) => {
              toast({
                title: "Profile picture changed",
                description: "You now have a new profile picture",
                variant: "default",
              });
              router.refresh();
            }}
            onUploadError={(error: Error) => {
              toast({
                title: "Error",
                description: "There was an error chaning your profile picture",
                variant: "destructive",
              });
            }}
          />
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="last_name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" size={"sm"}>
            Continue
          </Button>
        </form>
      </Form>
    </div>
  );
}
