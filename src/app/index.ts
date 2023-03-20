import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import passport from 'passport';
import HandelRouter from '@/router';
import errorHandler from '@/middleware/errorHandler.middleware';

function App(NODE_ENV: string) {

  const app = express();
  const router = express.Router();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))

  app.use(cors());
  app.use(morgan('tiny'));
  app.use(helmet());

  if (NODE_ENV === 'production') {
    app.use('/api/v1', HandelRouter(router, passport));
  } else {
    app.use('/api', HandelRouter(router, passport));
  }

  app.use((err: Error, req: any, res: any, Next: any) => {
    console.log("🚀 ~ file: index.ts:27 ~ app.use ~ err:", err);
    console.log(err)
  })
  // app.use(notFound)

  return app;
}

export default App;
