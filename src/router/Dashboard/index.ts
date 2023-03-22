import use from "@/utils/tryCatch";
import DashboardController from '@/controller/dashboard/company'

function DashboardHandler(router: any) {


    router.post('/company', use(DashboardController.createCompany))

    return router

}

export default DashboardHandler;
