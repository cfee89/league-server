import express from 'express';
import { indexPage, addLeague, getLeagues, findLeague } from '../controllers';
const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/leagues', getLeagues)
indexRouter.post('/add-league', addLeague);
indexRouter.post('/find-league', findLeague);

export default indexRouter;


