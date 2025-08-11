"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Wallet, DollarSign, Repeat2, ShieldCheck, TrendingUp, Zap } from "lucide-react"
import { useClerk, UserButton, useUser } from "@clerk/nextjs"

export default function Component() {

  const {isSignedIn} = useUser();
  const {openSignIn, openSignUp} = useClerk();
  return (
    <div className="flex flex-col w-[100dvw] p-10  min-h-[100dvh] bg-gray-950 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-center border-b border-gray-800 bg-gray-950">
        <Link href="#" className="flex items-center justify-center gap-2">
          <Wallet className="h-7 w-7 text-indigo-400" />
          <span className="font-extrabold text-xl tracking-tight">CloudWallet</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">
            Security
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-indigo-400 transition-colors">
            Contact
          </Link>
         {
          isSignedIn? <UserButton /> : <Button
          variant="outline"
          className="border-indigo-500 text-indigo-500 hover:bg-indigo-900 hover:text-white bg-transparent"
          onClick={()=> openSignIn({})}
        >
          Sign In
        </Button>
         }
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-gray-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg"
              layout="fill"
              objectFit="cover"
              alt="Background Pattern"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-4">
                  <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl/none bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                    Future-Proof Your Finances.
                  </h1>
                  <p className="max-w-[800px] text-gray-300 md:text-xl mx-auto lg:mx-0 leading-relaxed">
                    Unlock seamless control over your digital assets. Manage, transact, and grow your wealth with
                    CloudWallet – the next-gen platform built for you.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center lg:justify-start">
                  <Button className="inline-flex h-12 items-center justify-center rounded-full bg-indigo-600 px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950">
                    Get Started Now
                  </Button>
                  <Button
                    variant="outline"
                    className="inline-flex h-12 items-center justify-center rounded-full border-2 border-indigo-500 bg-transparent px-8 text-base font-semibold text-indigo-400 shadow-lg transition-all hover:bg-indigo-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950"
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative w-full max-w-lg mx-auto lg:mx-0 aspect-[4/3] lg:aspect-square">
                <Image
                  src="https://images.pexels.com/photos/8370754/pexels-photo-8370754.jpeg"
                  width="600"
                  height="600"
                  alt="Cloud Wallet Interface"
                  className="rounded-3xl object-cover shadow-2xl shadow-indigo-900/50 transform hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute -bottom-8 -right-8 bg-indigo-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl animate-pulse">
                  ⚡
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                  Features That Just Click.
                </h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience a new level of financial freedom with our cutting-edge tools.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-10 py-16 sm:grid-cols-2 lg:grid-cols-3">
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Wallet className="h-12 w-12 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Intuitive Wallet Hub</h3>
                <p className="text-gray-400">
                  Effortlessly manage all your digital assets from a single, sleek dashboard.
                </p>
              </div>
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <DollarSign className="h-12 w-12 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Blazing Fast Deposits</h3>
                <p className="text-gray-400">
                  Top up your wallet instantly with diverse payment options, no waiting around.
                </p>
              </div>
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Repeat2 className="h-12 w-12 text-pink-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Seamless Global Transfers</h3>
                <p className="text-gray-400">
                  Send and receive money across borders with lightning speed and minimal fees.
                </p>
              </div>
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <ShieldCheck className="h-12 w-12 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Fortress-Level Security</h3>
                <p className="text-gray-400">
                  Your funds are guarded by military-grade encryption and advanced fraud protection.
                </p>
              </div>
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Smart Financial Insights</h3>
                <p className="text-gray-400">Visualize your spending and saving patterns with intelligent analytics.</p>
              </div>
              <div className="grid gap-4 text-center bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 hover:border-indigo-500 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <Zap className="h-12 w-12 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Instant Notifications</h3>
                <p className="text-gray-400">Stay on top of every transaction with real-time alerts and updates.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-950 border-t border-gray-800">
          <div className="container grid items-center justify-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tighter md:text-5xl/tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                Ready to Level Up Your Wallet?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the future of digital finance. Sign up for CloudWallet today and experience true financial freedom.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-4">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Your email, no spam, promise."
                  className="max-w-lg flex-1 bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
                />
                <Button
                  type="button"
                  onClick={()=> openSignUp({})}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
                >
                  Sign Up Now
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline underline-offset-2 text-indigo-400 hover:text-indigo-300">
                  Terms &amp; Conditions
                </Link>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-950">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} CloudWallet. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-6">
          <Link href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Terms of Service
          </Link>
          <Link href="#" className="text-sm text-gray-400 hover:text-indigo-400 transition-colors">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}
