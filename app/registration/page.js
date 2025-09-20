
"use client";

import { useRef, useState } from "react";
import axios from "axios";
import Sparc from "../components/Sparc";
import Home from "../components/Home";

export default function Registion() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const parentNameRef = useRef("");
  const yourContactRef = useRef("");
  const parentContactRef = useRef("");
  const teacherNameRef = useRef("");
  const teacherContactRef = useRef("");
  const schoolNameRef = useRef("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const ok = await loadRazorpayScript();
      if (!ok) throw new Error("Razorpay SDK failed to load");

      const payload = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        parentName: parentNameRef.current.value,
        yourContact: yourContactRef.current.value,
        parentContact: parentContactRef.current.value,
        teacherName: teacherNameRef.current.value,
        teacherContact: teacherContactRef.current.value,
        schoolName: schoolNameRef.current.value,
        amount: 10000,
      };

      const saveRes = await axios.post("/api/registration", payload);
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc_pX7axYQfB9c1uhKeHJ4i2xWJXhOXPEF0pKnfUfRUWnqmrA/viewform?usp=preview";
      return;

      // const { data } = await axios.post("/api/pay", payload);

      // await openRazorpayCheckout({
      //   name: payload.name,
      //   email: payload.email,
      //   amount: payload.amount,
      //   orderId: data.orderId,
      // });

    //   setMessage("Payment flow opened. Complete payment in the popup.");
    // } catch (err) {
    //   setMessage(
    //     err?.response?.data?.error || err?.message || "Failed to submit"
    //   );
    } finally {
      setLoading(false);
    }
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve, reject) => {
      if (typeof window === "undefined") return resolve(false);
      if (document.getElementById("razorpay-sdk")) return resolve(true);
      const script = document.createElement("script");
      script.id = "razorpay-sdk";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
      document.body.appendChild(script);
    });
  };

  const openRazorpayCheckout = async ({ orderId, name, email, amount = 100 }) => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;

    const opstion = {
      key,
      order_id: orderId,
      theme: { color: "#111111" },
      amount: amount,
      currency: "INR",
      name: name,
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      callback_url: `https://docs.google.com/forms/d/e/1FAIpQLSc_pX7axYQfB9c1uhKeHJ4i2xWJXhOXPEF0pKnfUfRUWnqmrA/viewform?usp=preview`,
      prefill: {
        name: name,
        email: email,
        contact: yourContactRef.current.value,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
    };

    const rzp = new window.Razorpay(opstion);
    rzp.on("payment.failed", function (response) {
      setMessage(response?.error?.description || "Payment failed");
    });
    rzp.open();
  };
  return (
    <>
      <Home/>
      <div className="min-h-screen flex items-center justify-center p-6 mt-36">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <h1 className="text-2xl font-semibold">Competition Registration</h1>

          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm">Name</label>
            <input
              id="name"
              type="text"
              ref={nameRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Your full name"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              required
              className="border rounded px-3 py-2"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="parentName" className="text-sm">Parent Name</label>
            <input
              id="parentName"
              type="text"
              ref={parentNameRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Parent's full name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="yourContact" className="text-sm">Your Contact Number</label>
            <input
              id="yourContact"
              type="tel"
              ref={yourContactRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Your contact number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="parentContact" className="text-sm">Parent&apos;s Contact Number</label>
            <input
              id="parentContact"
              type="tel"
              ref={parentContactRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Parent's contact number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="teacherName" className="text-sm">School Teacher&apos;s Name (Mentor)</label>
            <input
              id="teacherName"
              type="text"
              ref={teacherNameRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Teacher's full name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="teacherContact" className="text-sm">School Teacher&apos;s Contact Number</label>
            <input
              id="teacherContact"
              type="tel"
              ref={teacherContactRef}
              required
              className="border rounded px-3 py-2"
              placeholder="Teacher's contact number"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="schoolName" className="text-sm">Name of the School</label>
            <input
              id="schoolName"
              type="text"
              ref={schoolNameRef}
              required
              className="border rounded px-3 py-2"
              placeholder="School name"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-black text-white py-2 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Register"}
          </button>

          {message && (
            <p className="text-sm text-center">{message}</p>
          )}
        </form>
      </div>
    </>
  );
}
