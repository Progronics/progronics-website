"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { sendSingleEmail } from "@/lib/notification-service";
import React, { useState } from "react";
import BottomGradient from "./bottom-gradient";
import LabelInputContainer from "./label-input-container";

interface DataProps {
  firstname: string;
  lastname: string;
  email: string;
  number?: string;
  message: string
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: DataProps = {
      firstname: formData.get("firstname")?.toString() || "",
      lastname: formData.get("lastname")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      number: formData.get("number")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    setLoading(true);
    try {
      await sendSingleEmail(data);
      alert("Message sent");

      form.reset();
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="shadow-input w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input required id="firstname" name="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input required id="lastname" name="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input required id="email" name="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="number">Number</Label>
          <Input id="number" name="number" placeholder="+xxxxxxxx" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Input required id="message" name="message" placeholder="Type your message...." type="text" />
        </LabelInputContainer>

        <button
          disabled={loading}
          className="group/btn relative block h-10 w-full rounded-md bg-linear-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {loading ? "Submitting..." : "Submit"}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}




