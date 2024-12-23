import lambdaApi, { API } from 'lambda-api';
import { getUserByUserId } from './handlers/users';

// instantiate lambda-api framework
const router: API = lambdaApi();

router.get('v1/user/:userId', getUserByUserId);

// Handler function for the AWS Lambda
export const handler = async (event: any, context: any) => {
    console.log("handler : start : ");
    return await router.run(event, context);
};

exports.handler = handler;