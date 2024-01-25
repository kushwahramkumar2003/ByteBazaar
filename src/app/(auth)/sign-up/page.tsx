import {cn} from "@/lib/utils";

"use-client"




import {Label} from "@/components/ui/label";
import {Icons} from "@/components/Icons";
import Link from 'next/link'
import {buttonVariants} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import {Input} from "@/components/ui/input";

const Page = ()=>{
    return (<>
        <div className={"container relative flex pt20 flex-col items-center justify-center lg:px-0"}>
            <div className={"mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"}>
                <div className={"flex flex-col items-center space-y-2 text-center"}>
                    <Icons.logo className={"h-20 w-20 "}/>
                    <h1 className={"text-2xl font-bold"}>Create an account</h1>
                    <Link href={"sign-in"} className={buttonVariants({
                        variant: "link",
                        // className:"text-muted-foreground",
                        className:"gap-1.5"
                    })}>
                        Already have an account ? Sign-in
                        <ArrowRight className={"h-4 w-4 "}/>
                    </Link>
                </div>
                <div className={"grid gap-6"}>
                    <form onSubmit={}>
                        <div className={"grid gap-2"}>
                            <div className={"grid gap-1 py-2"}>
                                <Label htmlFor={"email"}>Email</Label>
                                <Input className={cn({
                                    "focus-visible:ring-red-500":true
                                })}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}

export default Page;