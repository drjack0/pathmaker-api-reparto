import * as dynamoLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameSquadriglie,

        Key: {
            squadriglia: event.pathParameters.squadriglia,
        },

        UpdateExpression: "SET genere = :genere, lavoraPer = :lavoraPer, note = :note, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":genere": data.genere || "N/A",
            ":lavoraPer": data.lavoraPer || "N/A",
            ":note": data.note || "nessuna",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await updateImg(event.pathParameters.squadriglia, data.imgSquad);
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        //console.log(err);
        return failure({ status: false });
    }
}

async function updateImg(squad,imgSquad){
    if(imgSquad !== "img"){
        const params = {
            TableName: process.env.tableNameSquadriglie,
            Key: {
                squadriglia: squad,
            },
            UpdateExpression: "SET imgSquad = :imgSquad, updatedAt = :updateDate",
            ExpressionAttributeValues: {
                ":imgSquad": imgSquad,
                ":updateDate": Date.now()
            },
            ReturnValues: "ALL_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            //console.log(err);
            //return failure({ status: false });
        }
    }
}