"use client";

import BottomGradient from "@/components/bottom-gradient";
import LabelInputContainer from "@/components/label-input-container";
import MainContainer from "@/components/main-container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextEffect } from "@/components/ui/text-effect";
import { db, storage } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";

interface DataProps {
  fullname: string;
  email: string;
  designation: string;
  number: string;
  resume: File | null;
}

// ✅ Allowed file types and max size (in MB)
const SUPPORTED_EXTENSIONS = ["pdf", "doc", "docx"];
const MAX_FILE_SIZE_MB = 5;

export default function Page() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<DataProps>({
    fullname: "",
    designation: "",
    email: "",
    number: "",
    resume: null,
  });
  const [fileError, setFileError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.resume) return
    setLoading(true);
    try {
      const ext = formData?.resume?.name.split(".").pop()?.toLowerCase();
      const firebasePath = `progronics-resume/${crypto.randomUUID()}.${ext}`;
      const storageRef = ref(storage, firebasePath);

      // Upload directly to Firebase Storage
      const uploadTask = uploadBytesResumable(storageRef, formData.resume);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(percent);
        },
        (error) => {
          setFileError(error?.message)
          setLoading(false);
        },
        async () => {


          await addDoc(collection(db, "Progronics-Resume"), {
            fullname: formData.fullname,
            email: formData.email,
            designation: formData.designation,
            number: formData.number,
            resume: firebasePath
          })
          setLoading(false)
          const form = e.currentTarget;
          form.reset()
          alert("Data submitted")
        }

      );
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleFileChange = (file: File | null, key: string) => {
    if (!file) {
      setFormData((prev) => ({ ...prev, [key]: null }));
      return;
    }

    const ext = file.name.split(".").pop()?.toLowerCase();

    // ✅ Extension check
    if (!ext || !SUPPORTED_EXTENSIONS.includes(ext)) {
      setFileError(
        `Unsupported file format. Supported: ${SUPPORTED_EXTENSIONS.join(", ").toUpperCase()}`
      );
      setFormData((prev) => ({ ...prev, [key]: null }));
      return;
    }

    // ✅ File size check
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setFileError(`File size exceeds ${MAX_FILE_SIZE_MB} MB.`);
      setFormData((prev) => ({ ...prev, [key]: null }));
      return;
    }

    setFileError("");
    setFormData((prev) => ({ ...prev, [key]: file }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: keyof DataProps
  ) => {
    setFormData((prev) => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <MainContainer id="careers" className="py-20 relative min-h-screen">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white mb-4 leading-h2 tracking-tighter break-words">
            Careers
          </h2>
          <TextEffect
            per="word"
            as="h3"
            preset="blur"
            className="text-[18px] text-slate-300 leading-tight tracking-tight max-w-4xl"
          >
            Join our passionate team of innovators shaping the future of
            technology. We value creativity, dedication, and the drive to make
            an impact through meaningful digital experiences.
          </TextEffect>
        </div>

        <form className="my-8 space-y-4" onSubmit={handleSubmit}>
          <LabelInputContainer>
            <Label htmlFor="fullname">Full name</Label>
            <Input
              required
              id="fullname"
              placeholder="Tyler"
              type="text"
              value={formData.fullname}
              onChange={(e) => handleInputChange(e, "fullname")}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="designation">Designation</Label>
            <Input
              required
              id="designation"
              placeholder="Software Engineer"
              type="text"
              value={formData.designation}
              onChange={(e) => handleInputChange(e, "designation")}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              required
              id="email"
              placeholder="you@example.com"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email")}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="number">Number</Label>
            <Input
              required
              id="number"
              placeholder="+1234567890"
              type="text"
              value={formData.number}
              onChange={(e) => handleInputChange(e, "number")}
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="resume">Resume</Label>
            <Input
              required
              id="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null, "resume")}
            />
          </LabelInputContainer>

          {fileError && <p className="text-xs text-red-500 mt-1">{fileError}</p>}
          <p className="text-xs text-muted-foreground mt-1">
            Supported formats: PDF, DOC, DOCX. Max size: {MAX_FILE_SIZE_MB}MB.
          </p>

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
    </MainContainer>
  );
}
