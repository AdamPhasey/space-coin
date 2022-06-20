import spaceCoin from "../libs/SpaceCoinDummyData.js";
import faqData from "../libs/faqData.js";
//import {spaceCoinRouter} from "../Routes/spaceCoinRouter.js";

export function getSpaceCoin() {
  const responseObject = spaceCoin;
  return responseObject;
}

export function getFaqData() {
  const responseObject = faqData;
  return responseObject;
}
