import {Router} from 'express';
const spaceCoinRouter = Router();
//import spaceCoin from '../libs/SpaceCoinDummyData.js';


import {getSpaceCoin}  from '../models/spaceCoinModels.js';

spaceCoinRouter.get('/v1/spaceCoinDummyData', function(req, res){
res.json(getSpaceCoin());
})


export {spaceCoinRouter}