import AdminController from '@/controller/Admin';
import PermissionController from '@/controller/Admin/permission';
import TypeController from '@/controller/Admin/type';
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

  router.post('/permission', use(PermissionController.AddPermission))

  router.get('/permission', use(PermissionController.getAllPermissions))

  router.post('/type', use(TypeController.AddType))

  return router
}

export default AdminHandler;
