import {
    DynamoDBClient,
    PutItemCommand,
    PutItemCommandInput,
    PutItemCommandOutput,
    GetItemCommand,
    GetItemCommandInput,
    GetItemCommandOutput
} from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient();

export const addItemToDB = async (itemData: PutItemCommandInput): Promise<PutItemCommandOutput> => {
    try {
        const command = new PutItemCommand(itemData);
        return client.send(command);
    } catch (error) {
        console.log("Error occurred while adding item to database : ", error);
        throw error;
    }
};

export const getItemFromDB = async (queryParams: GetItemCommandInput): Promise<GetItemCommandOutput> => {
    try {
        const command = new GetItemCommand(queryParams);
        return await client.send(command);
    } catch (error) {
        console.log("Error occurred while retriving item from database : ", error);
        throw error;
    }
};