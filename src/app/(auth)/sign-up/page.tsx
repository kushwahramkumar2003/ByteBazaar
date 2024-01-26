"use client";
import {
  AuthCredentialsValidator,
  TAuthCredentialsValidator,
} from "@/lib/validators/account-credentials-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/Icons";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {trpc} from "@/trpc/client";

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });

//   const {data} = trpc.anyApiRoute.useQuery()

  const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {};

  return (
    <>
      <div
        className={
          "container relative flex pt20 flex-col items-center justify-center lg:px-0"
        }
      >
        <div
          className={
            "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
          }
        >
          <div className={"flex flex-col items-center space-y-2 text-center"}>
            <Icons.logo className={"h-20 w-20 "} />
            <h1 className={"text-2xl font-bold"}>Create an account</h1>
            <Link
              href={"sign-in"}
              className={buttonVariants({
                variant: "link",
                // className:"text-muted-foreground",
                className: "gap-1.5",
              })}
            >
              Already have an account ? Sign-in
              <ArrowRight className={"h-4 w-4 "} />
            </Link>
          </div>
          <div className={"grid gap-6"}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={"grid gap-2"}>
                <div className={"grid gap-1 py-2"}>
                  <Label htmlFor={"email"}>Email</Label>
                  <Input
                    {...register("email")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    placeholder={"you@example.com"}
                  />
                </div>
                <div className={"grid gap-1 py-2"}>
                  <Label htmlFor={"password"}>Password</Label>
                  <Input
                    {...register("password")}
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    placeholder={"Type password here.."}
                  />
                </div>
                <Button>Sign up</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
