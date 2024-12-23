import lambdaApi, { API } from 'lambda-api';
import { getOrdertsByUserId } from './handlers/orders';

// instantiate lambda-api framework
const router: API = lambdaApi();

router.get('v1/user/:userId/orders', getOrdertsByUserId);

// Handler function for the AWS Lambda
export const handler = async (event: any, context: any) => {
    console.log("handler : start : ", event);
    return await router.run(event, context);
};

exports.handler = handler;