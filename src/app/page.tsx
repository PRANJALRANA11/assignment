"use client";
import React from "react";
import { Vortex } from "@/components/ui/vortex";
import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div className="w-full mx-auto rounded-md h-[100vh] overflow-hidden">
      <Vortex backgroundColor="black" className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full">
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome to our ShopFusion
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          here you can find the best products at the best prices and the best
          quality in the market
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <LoginLink>
            {" "}
            <button className="px-4 py-2 bg-white hover:bg-gray-300 transition duration-200 rounded-lg text-black shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">Sign in</button>
          </LoginLink>
          <RegisterLink>
            {" "}
            <button className="px-4 py-2  text-white ">
              Sign up
            </button>
          </RegisterLink>
        </div>
      </Vortex>
    </div>
  );
}
