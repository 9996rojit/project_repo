import { NextFunction, Request, Response } from "express";
import AdminHandler from "@/router/Admin";
import PublicHandler from "@/router/Public";
import DashboardHandler from "@/router/Dashboard";



function HandelRouter(router: any, passport: any) {
    /**
     * 
     * 
     */

    router.use("/admin", AdminHandler(router));
    /**
     * 
     * 
     */
    router.use("/public", PublicHandler(router));
    /**
     * 
     * 
     */

    router.use("/dashboard", DashboardHandler(router));
    /**
     * 
     * 
     */



    return router

}

export default HandelRouter