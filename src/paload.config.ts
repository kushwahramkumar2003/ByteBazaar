import {buildConfig} from "payload/config";
import {slateEditor} from "@payloadcms/richtext-slate";
import * as mongoose from "mongoose";
import {mongooseAdapter} from "@payloadcms/db-mongodb";
import {webpackBundler} from "@payloadcms/bundler-webpack";

export default buildConfig({
    serverURL:process.env.NEXT_PUBLIC_URL || '',
    collections:[],
    routes:{
        admin:'/sell'
    },
    admin:{
        bundler:webpackBundler()
    },
    editor:slateEditor({}),
    db:mongooseAdapter({
        url:process.env.MONGODB_URL!,
    })
})