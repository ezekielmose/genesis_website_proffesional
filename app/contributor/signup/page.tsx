"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowLeft,
  UserPlus,
  Loader2,
} from "lucide-react";

import { auth, db } from "@/lib/firebase";

import {
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

export default function ContributorSignup() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.phone ||
      !form.country
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      setLoading(true);

      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );

      const user = userCredential.user;

      await setDoc(doc(db, "contributors", user.uid), {
        uid: user.uid,

        fullName: form.fullName,

        email: form.email,

        phone: form.phone,

        country: form.country,

        role: "contributor",

        status: "active",

        createdAt: serverTimestamp(),
      });

      alert("Account created successfully!");

      router.push("/contributor/dashboard");

    } catch (error: any) {

      alert(error.message);

    } finally {

      setLoading(false);

    }
  };
