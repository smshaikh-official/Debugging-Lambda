
import { getItemFromDB } from "../../../../shared/services/dynamo-db";

export const getOrdertsByUserId = async (request: any) => {
    const params = {
        TableName: process.env.TABLE_USER_ORDERS || "",
        Key: {
            "userId": { S: request.params.userId }
        }
    };

    const orders = await getItemFromDB(params);
    return {
        statusCode: 200,
        orders: orders.Item?.[0] || []
    };
};