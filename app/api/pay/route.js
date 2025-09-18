
import { NextResponse } from "next/server";
import Razorpay from "razorpay";


const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,

})

export async function POST(req) {
    try {



        const body = await req.json();
        const name = body?.name;
        const email = body?.email;
        const amount = Number(body?.amount);

        if (!name || !email || !amount || Number.isNaN(amount) || amount <= 0) {
            return NextResponse.json({ error: "Invalid input" }, { status: 400 });
        }

        const receiptNo = `receipt_${Date.now()}`;

        // const user = await User.create({ name, email, currency: "INR", recNo: receiptNo });

        let oder ={
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt: receiptNo,
            notes: {
                name,
                email,
        }
    }
    const x = await razorpay.orders.create(oder)

        return NextResponse.json({
            x,
            id: x.id,
            amount:x.amount,
            name,
            email,

           
        
        });
    } catch (err) {
        return NextResponse.json({ error: err?.message || "Server error" });
    }
}