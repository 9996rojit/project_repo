import App from '@/app/';
import config from '@/config/';

App(config.NODE_ENV as string).listen(config.PORT, () => {
  console.log(`This application is running at http://localhost:${config.PORT}`);
});
