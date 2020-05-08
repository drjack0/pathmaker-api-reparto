import * as dynamoLib from "./libs/dynamodb-lib";
import { success, failure } from "./libs/response-lib";

export async function main(event, context) {
    const data = JSON.parse(event.body);

    const params = {
        TableName: process.env.tableNameReparto,

        Item: {
            censcode: data.censcode,
            nome: data.nome,
            cognome: data.cognome,
            updatedAt: Date.now(),
            mamma: {
                cellMamma: data.mamma.cellMamma || "N/A",
                mailMamma: data.mamma.mailMamma || "N/A",
                nomeMamma: data.mamma.nomeMamma || "N/A",
                updateMamma: Date.now()
            },
            papa: {
                cellPapa: data.papa.cellPapa || "N/A",
                mailPapa: data.papa.mailPapa || "N/A",
                nomePapa: data.papa.nomePapa || "N/A",
                updatePapa: Date.now()
            },
            mensili: {
                ottobre: "00",
                novembre: "00",
                dicembre: "00",
                gennaio: "00",
                febbraio: "00",
                marzo: "00",
                aprile: "00",
                maggio: "00",
                campoExtra: "00",
                accontoEstivo: "00",
                saldoEstivo: "00",
                updateMensili: Date.now()
            },
            recapiti: {
                casa: data.recapiti.casa || "N/A",
                cellulare: data.recapiti.cellulare || "N/A",
                indirizzo: data.recapiti.indirizzo || "N/A",
                nascita: data.recapiti.nascita || "N/A",
                updateRecapiti: Date.now()
            },
            sentiero: {
                anno: data.sentiero.anno || "N/A",
                camminaPer: data.sentiero.camminaPer || "N/A",
                competenze: [],
                incarico: data.sentiero.incarico || "N/A",
                lavoraPer: data.sentiero.lavoraPer || "N/A",
                noteSentiero: data.sentiero.noteSentiero || "N/A",
                obiettivi: [],
                squadriglia: data.sentiero.squadriglia || "N/A",
                updateSentiero: Date.now()
            },
            burocrazia: {
                autorizzazione: {
                    consegnato: "N/A",
                    documento: "link",
                    dataConsegna: "data consegna"
                },
                censimento: "00",
                fogliCensimento: {
                    consegnato: "N/A",
                    documento: "link",
                    dataConsegna: "data consegna"
                },
                privacy: {
                    consegnato: "N/A",
                    documento: "link",
                    dataConsegna: "data consegna"
                },
                schedaSanitaria: {
                    consegnato: "N/A",
                    documento: "link",
                    dataConsegna: "data consegna"
                },
                tesseraSanitaria: {
                    consegnato: "N/A",
                    documento: "link",
                    dataConsegna: "data consegna"
                },
                updateBurocrazia: Date.now()
            }
        }
    };

    try{
        await dynamoLib.call("put",params);
        return success(params.Item);
    } catch(err) {
        return failure({ status: false });
    }
}