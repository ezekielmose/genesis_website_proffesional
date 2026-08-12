"use client";

import {
  FormEvent,
  useState,
} from "react";

import {
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
} from "lucide-react";

import {
  signIn,
} from "next-auth/react";


export function StaffLoginForm() {

  const [
    loading,
    setLoading,
  ] =
    useState(false);


  const [
    error,
    setError,
  ] =
    useState("");


  const [
    showPassword,
    setShowPassword,
  ] =
    useState(false);


  // ======================================================
  // LOGIN
  // ======================================================

  async function handleSubmit(
    event:
      FormEvent<HTMLFormElement>
  ) {

    event.preventDefault();


    setLoading(true);

    setError("");


    const form =
      new FormData(
        event.currentTarget
      );


    const email =
      String(
        form.get("email") || ""
      )
        .trim()
        .toLowerCase();


    const password =
      String(
        form.get("password") || ""
      );


    // Basic browser-side validation
    if (
      !email ||
      !password
    ) {

      setError(
        "Enter your email and password."
      );

      setLoading(false);

      return;

    }


    try {

      const result =
        await signIn(
          "credentials",
          {

            email,

            password,

            redirect: false,

          }
        );


      console.log(
        "Sign in result:",
        result
      );


      if (
        !result ||
        result.error
      ) {

        setError(
          "Invalid email or password, or your account is inactive."
        );

        return;

      }


      // ================================================
      // SUCCESS
      // ================================================

      window.location.href =
        "/staff";


    } catch (error) {

      console.error(
        "LOGIN ERROR:",
        error
      );


      setError(
        "Unable to sign in. Please try again."
      );


    } finally {

      setLoading(false);

    }

  }


  return (

    <form
      onSubmit={
        handleSubmit
      }
      className="mt-8 grid gap-5"
    >

      {/* =================================================
          EMAIL
      ================================================= */}

      <label className="grid gap-2 text-sm font-black">

        Email


        <div className="relative">

          <Mail
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--muted)]
            "
          />


          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="admin@genesisdigital.in"
            className="
              w-full
              rounded-xl
              border
              border-[var(--line)]
              bg-[var(--bg)]
              py-4
              pl-12
              pr-4
              font-normal
              outline-none
              transition
              focus:border-[var(--brand)]
            "
          />

        </div>

      </label>


      {/* =================================================
          PASSWORD
      ================================================= */}

      <label className="grid gap-2 text-sm font-black">

        Password


        <div className="relative">

          <LockKeyhole
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--muted)]
            "
          />


          <input
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="current-password"
            required
            minLength={8}
            className="
              w-full
              rounded-xl
              border
              border-[var(--line)]
              bg-[var(--bg)]
              py-4
              pl-12
              pr-12
              font-normal
              outline-none
              transition
              focus:border-[var(--brand)]
            "
          />


          <button
            type="button"
            aria-label={
              showPassword
                ? "Hide password"
                : "Show password"
            }
            onClick={() => {

              setShowPassword(
                previous =>
                  !previous
              );

            }}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-[var(--muted)]
            "
          >

            {showPassword ? (

              <EyeOff
                size={18}
              />

            ) : (

              <Eye
                size={18}
              />

            )}

          </button>

        </div>

      </label>


      {/* =================================================
          ERROR
      ================================================= */}

      {error && (

        <div
          className="
            rounded-xl
            border
            border-red-400/20
            bg-red-500/10
            p-4
            text-sm
            font-bold
            text-red-500
          "
        >

          {error}

        </div>

      )}


      {/* =================================================
          LOGIN BUTTON
      ================================================= */}

      <button
        type="submit"
        disabled={
          loading
        }
        className="
          btn-primary
          mt-1
          w-full
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        {loading ? (

          <>

            <LoaderCircle
              size={18}
              className="animate-spin"
            />

            Signing in...

          </>

        ) : (

          "Sign In"

        )}

      </button>

    </form>

  );

}