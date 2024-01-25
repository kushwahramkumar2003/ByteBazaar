import {buildConfig} from "payload/config";
import {slateEditor} from "@payloadcms/richtext-slate";
import * as mongoose from "mongoose";
import {mongooseAdapter} from "@payloadcms/db-mongodb";
import {webpackBundler} from "@payloadcms/bundler-webpack";
import path from "path";

export default buildConfig({
    serverURL:process.env.NEXT_PUBLIC_URL || '',
    collections:[],
    routes:{
        admin:'/sell'
    },
    admin:{
        bundler:webpackBundler(),
        meta:{
            titleSuffix:"- ByteBazaar",
            favicon:"/favicon.ico",
            ogImage:"/thumbnail.jpg",
        }
    },
    rateLimit:{
        max:2000,
    },
    editor:slateEditor({}),
    db:mongooseAdapter({
        url:process.env.MONGODB_URL!,
    }),
    typescript:{
        outputFile:path.resolve(__dirname,"payload-types.ts"),
    }
})