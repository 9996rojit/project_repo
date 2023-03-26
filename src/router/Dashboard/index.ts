import use from "@/utils/tryCatch";
import DashboardController from '@/controller/dashboard/company'
import ProductController from '@/controller/dashboard/product'
import { fileUploadHandler } from "@/helper/imageUploader";

function DashboardHandler(router: any) {

    router.post('/company', use(DashboardController.createCompany))

    router.get('/company', use(DashboardController.getAllCompany))

    router.post('/profile', fileUploadHandler('profile').fields([
        {
            name: 'profile_image'
        },
        {
            name: 'cover_image'
        }
    ]), use(DashboardController.createProfile))

    router.get('/profile/:id', use(DashboardController.getProfileById))

    router.post('/product', fileUploadHandler('product').array('product_image'), use(ProductController.createProduct))


    router.get('/product', use(ProductController.getProducts))

    return router

}

export default DashboardHandler;
