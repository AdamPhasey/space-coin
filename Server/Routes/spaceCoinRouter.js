import {Router} from 'express';
const spaceCoinRouter = Router();
//import spaceCoin from '../libs/SpaceCoinDummyData.js';


import {getSpaceCoin, getFaqData}  from '../models/spaceCoinModels.js';

spaceCoinRouter.get('/v1/spaceCoinDummyData', function(req, res){
res.json(getSpaceCoin());
})


spaceCoinRouter.get('/v1/faqData', function(req, res) {
    res.json(getFaqData())
})

export {spaceCoinRouter}