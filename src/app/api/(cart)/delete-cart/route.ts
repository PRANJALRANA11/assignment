import dbConnect from "@/lib/dbConnect";
import CartModel from "@/app/models/cart";
import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function DELETE(request: Request) {
  await dbConnect();
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const { asin } = await request.json();
    const cart = await CartModel.deleteMany({ email: user?.email, asin });
    return NextResponse.json({ cart, status: 200, success: true });
  } catch (error) {
   return NextResponse.json({
      status: 400,
      message: (error as Error).message,
      success: false,
    });
  }
}