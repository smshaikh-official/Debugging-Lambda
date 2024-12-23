import {
    addItemToDB,
    getItemFromDB
} from "../../../../shared/services/dynamo-db";

export const addUser = async (fname: string, lname: string) => {
    const params = {
        TableName: process.env.TABLE_USER || "",
        Item: {
            "userId": { S: "e8b445b9-6461-40e6-83f6-0afe6d52519a" },
            "fname": { S: fname },
            "lname": { S: lname }
        }
    };

    const result = await addItemToDB(params);
    console.log("User added to database");

    return { statusCode: 200, message: "Ok" };
};

export const getUserByUserId = async (request: any) => {
    console.log("getUserByUserId:start : ", request.params);
    const params = {
        TableName: process.env.TABLE_USER || "",
        Key: {
            "userId": { S: request.params.userId }
        }
    };

    const userDetails = await getItemFromDB(params);

    console.log("User details : ", userDetails);

    return {
        statusCode: 200,
        data: userDetails.Item?.[0] || {}
    };
};