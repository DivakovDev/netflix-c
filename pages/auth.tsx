"use client";

import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import { signIn } from "next-auth/react";

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';


const Auth = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currVariant) =>
      currVariant === "login" ? "register" : "login"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });

    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className='realtive h-full w-full bg-[url("/hero.jpg")] bg-no-repeat bg-center bg-fixed bg-cover overflow-clip'>
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/logo.svg" alt="Logo" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded0md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "register" && (
                <Input
                  id="name"
                  onChange={(ev: any) => setName(ev.target.value)}
                  value={name}
                  title="Username"
                />
              )}
              <Input
                id="email"
                onChange={(ev: any) => setEmail(ev.target.value)}
                value={email}
                title="Email or mobile number"
                type="email"
              />
              <Input
                id="password"
                onChange={(ev: any) => setPassword(ev.target.value)}
                value={password}
                title="Password"
                type="password"
              />
            </div>
            <button
              onClick={variant === "login" ? login : register}
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"
            >
              {variant === "login" ? "Sign In" : "Sign Up"}
            </button>
            <h1 className="flex my-5 text-gray-300 justify-center">OR</h1>
            <div className="flex flex-row items-center justify-center gap-4 mt-8">
              <div onClick={() => signIn("google", {callbackUrl: '/profiles'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FcGoogle size={30}/>
              </div>
              <div onClick={() => signIn("github", {callbackUrl: '/profiles'})} className='w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition'>
                <FaGithub size={30}/>
              </div>
            </div>
            {variant === "login" && (
              <a
                href="#"
                className="flex justify-center items-center my-4 text-white text-md hover:underline text-center translate"
              >
                Forgot Password?
              </a>
            )}
            <p className="text-neutral-500 mt-4 text-center">
              {variant === "login"
                ? "New to Netflix?"
                : "Already have an account?"}
              <span
                onClick={toggleVariant}
                className="text-white ml-2 hover:underline cursor-pointer"
              >
                {variant === "login" ? "Sign up now" : "Sign In"}
              </span>
            </p>
            <p className="text-center text-gray-300 text-[12px] mt-6">
              This page is protected by Google reCAPTCHA to ensure you&apos;re
              not a bot.{" "}
              <span className="text-blue-400 hover:underline cursor-pointer">
                Learn more.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
