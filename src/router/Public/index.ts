import use from "@/utils/tryCatch";
import CartController from '@/controller/public/cart'

function PublicHandler(router: any) {


    router.post('/cart', use(CartController.createCart))

    router.get('/cart/:id', use(CartController.getCart))

    return router

}

export default PublicHandler;
