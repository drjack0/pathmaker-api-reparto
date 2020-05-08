import * as dynamoLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET nome =:nome, cognome = :cognome,  updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":nome": data.nome || "N/A",
            ":cognome": data.cognome || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function mensili(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET mensili.ottobre = :ottobre, mensili.novembre = :novembre, mensili.dicembre = :dicembre, mensili.gennaio = :gennaio, mensili.febbraio = :febbraio, mensili.marzo = :marzo, mensili.aprile = :aprile, mensili.maggio = :maggio, mensili.campoExtra = :campoExtra, mensili.accontoEstivo = :accontoEstivo, mensili.saldoEstivo = :saldoEstivo, mensili.updateMensili = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":ottobre": data.ottobre || "00",
            ":novembre": data.novembre || "00",
            ":dicembre": data.dicembre || "00",
            ":gennaio": data.gennaio || "00",
            ":febbraio": data.febbraio || "00",
            ":marzo": data.marzo || "00",
            ":aprile": data.aprile || "00",
            ":maggio": data.maggio || "00",
            ":campoExtra": data.campoExtra || "00",
            ":accontoEstivo": data.accontoEstivo || "00",
            ":saldoEstivo": data.saldoEstivo || "00",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function sentiero(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET sentiero.anno = :anno, sentiero.camminaPer = :camminaPer, sentiero.incarico = :incarico, sentiero.lavoraPer = :lavoraPer, sentiero.noteSentiero = :noteSentiero, sentiero.squadriglia = :squadriglia, sentiero.updateSentiero = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":anno": data.anno || "N/A",
            ":camminaPer": data.camminaPer || "N/A",
            ":incarico": data.incarico || "N/A",
            ":lavoraPer": data.lavoraPer || "N/A",
            ":noteSentiero": data.noteSentiero || "N/A",
            ":squadriglia": data.squadriglia || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function recapiti(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET recapiti.casa = :casa, recapiti.cellulare = :cellulare, recapiti.indirizzo = :indirizzo, recapiti.nascita = :dataNascita, recapiti.updateRecapiti = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":casa": data.casa || "N/A",
            ":cellulare": data.cellulare || "N/A",
            ":indirizzo": data.indirizzo || "N/A",
            ":dataNascita": data.dataNascita || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function mamma(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET mamma.cellMamma = :cellMamma, mamma.mailMamma = :mailMamma, mamma.nomeMamma = :nomeMamma, mamma.updateMamma = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":cellMamma": data.cellMamma || "N/A",
            ":mailMamma": data.mailMamma || "N/A",
            ":nomeMamma": data.nomeMamma || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function papa(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET papa.cellPapa = :cellPapa, papa.mailPapa = :mailPapa, papa.nomePapa = :nomePapa, papa.updatePapa = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":cellPapa": data.cellPapa || "N/A",
            ":mailPapa": data.mailPapa || "N/A",
            ":nomePapa": data.nomePapa || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function burocrazia(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET burocrazia.censimento = :censimento, burocrazia.updateBurocrazia = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":censimento": data.censimento || "00",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await burocraziaCensimento(event.pathParameters.censcode, data.censimentoDocumento);
        await burocraziaPrivacy(event.pathParameters.censcode, data.privacyDocumento);
        await burocraziaAutorizzazione(event.pathParameters.censcode, data.autorizzazioneDocumento);
        await burocraziaSS(event.pathParameters.censcode, data.ssDocumento);
        await burocraziaTS(event.pathParameters.censcode, data.tsDocumento);
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

async function burocraziaCensimento(codice, censimentoDocumento){
    if(censimentoDocumento !== "link"){
        const params = {
            TableName: process.env.tableNameReparto,
            Key: {
                censcode: codice,
            },
            UpdateExpression: "SET burocrazia.fogliCensimento.consegnato = :consegnato, burocrazia.fogliCensimento.documento = :documento, burocrazia.fogliCensimento.dataConsegna = :dataConsegna",
            ExpressionAttributeValues: {
                ":consegnato": "consegnato",
                ":documento": censimentoDocumento,
                ":dataConsegna": Date.now()
            },
            ReturnValues: "UPDATED_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            console.log(err);
            //return failure({ status: false });
        }
    }
}

async function burocraziaAutorizzazione(codice, autorizzazioneDocumento){
    if(autorizzazioneDocumento !== "link"){
        const params = {
            TableName: process.env.tableNameReparto,
            Key: {
                censcode: codice,
            },
            UpdateExpression: "SET burocrazia.autorizzazione.consegnato = :consegnato, burocrazia.autorizzazione.documento = :documento, burocrazia.autorizzazione.dataConsegna = :dataConsegna",
            ExpressionAttributeValues: {
                ":consegnato": "consegnato",
                ":documento": autorizzazioneDocumento,
                ":dataConsegna": Date.now()
            },
            ReturnValues: "UPDATED_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            console.log(err);
            //return failure({ status: false });
        }
    }
}

async function burocraziaPrivacy(codice, privacyDocumento){
    if(privacyDocumento !== "link"){
        const params = {
            TableName: process.env.tableNameReparto,
            Key: {
                censcode: codice,
            },
            UpdateExpression: "SET burocrazia.privacy.consegnato = :consegnato, burocrazia.privacy.documento = :documento, burocrazia.privacy.dataConsegna = :dataConsegna",
            ExpressionAttributeValues: {
                ":consegnato": "consegnato",
                ":documento": privacyDocumento,
                ":dataConsegna": Date.now()
            },
            ReturnValues: "UPDATED_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            console.log(err);
            //return failure({ status: false });
        }
    }
}

async function burocraziaSS(codice, ssDocumento){
    if(ssDocumento !== "link"){
        const params = {
            TableName: process.env.tableNameReparto,
            Key: {
                censcode: codice,
            },
            UpdateExpression: "SET burocrazia.schedaSanitaria.consegnato = :consegnato, burocrazia.schedaSanitaria.documento = :documento, burocrazia.schedaSanitaria.dataConsegna = :dataConsegna",
            ExpressionAttributeValues: {
                ":consegnato": "consegnato",
                ":documento": ssDocumento,
                "dataConsegna": Date.now()
            },
            ReturnValues: "UPDATED_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            console.log(err);
           // return failure({ status: false });
        }
    }
}

async function burocraziaTS(codice, tsDocumento){
    if(tsDocumento !== "link"){
        const params = {
            TableName: process.env.tableNameReparto,
            Key: {
                censcode: codice,
            },
            UpdateExpression: "SET burocrazia.tesseraSanitaria.consegnato = :consegnato, burocrazia.tesseraSanitaria.documento = :documento, burocrazia.tesseraSanitaria.dataConsegna = :dataConsegna",
            ExpressionAttributeValues: {
                ":consegnato": "consegnato",
                ":documento": tsDocumento,
                ":dataConsegna": Date.now()
            },
            ReturnValues: "UPDATED_NEW"
        };
        try{
            await dynamoLib.call("update",params);
            //return success({status: true});
        } catch(err) {
            console.log(err);
            //return failure({ status: false });
        }
    }
}

export async function addObiettivo(event, context) {
    const data = JSON.parse(event.body);
    const ob = [
        {
            nomeObiettivo: data.nomeObiettivo || "N/A",
            noteObiettivo: data.noteObiettivo || "N/A"
        }
    ];

    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET sentiero.obiettivi = list_append(sentiero.obiettivi, :ob),  updateSentiero = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":ob": ob || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function deleteObiettivo(event, context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "REMOVE sentiero.obiettivi["+data.obIndex+"] SET sentiero.updateSentiero = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function addCompetenza(event, context) {
    const data = JSON.parse(event.body);
    const comp = [
        {
            nomeCompetenza: data.nomeCompetenza || "N/A",
            anno: data.anno || "N/A"
        }
    ];
    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "SET sentiero.competenze = list_append(sentiero.competenze, :comp), sentiero.updateSentiero = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":comp": comp || "N/A",
            ":updateDate": Date.now()
        },

        ReturnValues: "UPDATED_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}

export async function deleteCompetenza(event, context) {
    const data = JSON.parse(event.body);
    const params = {
        TableName: process.env.tableNameReparto,

        Key: {
            censcode: event.pathParameters.censcode,
        },

        UpdateExpression: "REMOVE sentiero.competenze["+data.compIndex+"] SET sentiero.updateSentiero = :updateDate, updatedAt = :updateDate",
        ExpressionAttributeValues: {
            ":updateDate": Date.now()
        },

        ReturnValues: "ALL_NEW"
    };

    try{
        await dynamoLib.call("update",params);
        return success({status: true});
    } catch(err) {
        console.log(err);
        return failure({ status: false });
    }
}