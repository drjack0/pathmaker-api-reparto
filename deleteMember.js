import * as dynamoLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode
        }
    };
    try{
        await dynamoLib.call("delete", params);
        return success({status: true});
    } catch(err) {
        return failure({ status: false });
    }
}