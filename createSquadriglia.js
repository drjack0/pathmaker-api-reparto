import * as dynamoLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameSquadriglie,

        Item: {
            squadriglia: data.squadriglia,
            genere: data.genere,
            lavoraPer: data.lavoraPer,
            note: data.note || "nessuna",
            imgSquad: data.imgSquad || "imgSquad/IMG-Default",
            updatedAt: Date.now()
        }
    };

    try{
        await dynamoLib.call("put",params);
        return success(params.Item);
    } catch(err) {
        return failure({ status: false });
    }
}