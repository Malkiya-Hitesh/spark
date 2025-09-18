
"use client";

import { useState } from "react";
import axios from "axios";

export default function Registion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [parentName, setParentName] = useState("");
  const [yourContact, setYourContact] = useState("");
  const [parentContact, setParentContact] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherContact, setTeacherContact] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const ok = await loadRazorpayScript();
      if (!ok) throw new Error("Razorpay SDK failed to load");
      const {data} = await axios.post("/api/pay", {
        name,
        email,
        parentName,
        yourContact,
        parentContact,
        teacherName,
        teacherContact,
        schoolName,
        amount: 10000,
      });
     console.log(data);
      await openRazorpayCheckout({
        name,
        email,
        amount:10000,
        orderId: data.orderId
      });

      setMessage("Payment flow opened. Complete payment in the popup.");
    } catch (err) {
      setMessage(
        err?.response?.data?.error || err?.message || "Failed to submit"
      );
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

  const openRazorpayCheckout = async ({ orderId, name, email, amount= 100 }) => {


    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
   
 
    const opstion= {
      key,
      order_id: orderId,
      theme: { color: "#111111" },
    amount:amount, // Amount is in currency subunits. 
    currency: "INR",
    name: name, //your business name
    description: "Test Transaction",
    image: "https://example.com/your_logo",
      //  callback_url: `${process.env.url}/api/pay`,
      callback_url: `http://localhost:3000/user`,
    prefill: {
        name: name, //your customer's name
        email: email,
        "contact": yourContact //Provide the customer's phone number for better conversion rates 
    },
    notes: {
        address: "Razorpay Corporate Office"
    },
  
      }
  console.log(opstion);
  

    const rzp = new window.Razorpay(opstion);
    rzp.on("payment.failed", function (response) {
      setMessage(response?.error?.description || "Payment failed");
    });
    rzp.open();

  }
  return (


    <>

    <div className="min-h-screen flex items-center justify-center p-6 mt-36">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <h1 className="text-2xl font-semibold">Competition Registration</h1>

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
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
            value={yourContact}
            onChange={(e) => setYourContact(e.target.value)}
            required
            className="border rounded px-3 py-2"
            placeholder="Your contact number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="parentContact" className="text-sm">Parent's Contact Number</label>
          <input
            id="parentContact"
            type="tel"
            value={parentContact}
            onChange={(e) => setParentContact(e.target.value)}
            required
            className="border rounded px-3 py-2"
            placeholder="Parent's contact number"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="teacherName" className="text-sm">School Teacher's Name (Mentor)</label>
          <input
            id="teacherName"
            type="text"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            required
            className="border rounded px-3 py-2"
            placeholder="Teacher's full name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="teacherContact" className="text-sm">School Teacher's Contact Number</label>
          <input
            id="teacherContact"
            type="tel"
            value={teacherContact}
            onChange={(e) => setTeacherContact(e.target.value)}
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
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
            className="border rounded px-3 py-2"
            placeholder="School name"
          />
        </div>
        
        <button
          type="submit"
       
          className="w-full rounded bg-black text-white py-2 disabled:opacity-50"
        >
          {/* {loading ? "Submitting..." : ""} */}
          Register & Pay
        </button>

        {/* message && (
          <p className="text-sm text-center">{message}</p>
        ) */}
      </form>
    </div>


    </>
  );
}
