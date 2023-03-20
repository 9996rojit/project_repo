import AdminController from '@/controller/Admin';

import use from '@/utils/tryCatch'

function AdminHandler(router: any) {
  /**
     * getting admin Login to perform a login operation
     *
     */

  router.post('/login', use(AdminController.Login));

  router.post('/add-superadmin', use(AdminController.AddUser));

  router.get('/user', AdminController.getUser);

  router.get('/user/:id', AdminController.getUserById);

  router.post('/user', AdminController.createUser);

  router.post('/change-password/:id', AdminController.changeUserPassword);

  return router
}

export default AdminHandler;
