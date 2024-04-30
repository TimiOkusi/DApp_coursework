import dotenv from "dotenv";
import algosdk from "algosdk";
import { open, readFile } from "node:fs/promises";
dotenv.config();

const baseServer = "https://testnet-api.algonode.cloud";
const algodClient = new algosdk.Algodv2('', baseServer, '');

// Directly setting mnemonic here for demonstration purposes
const MNEMONIC = "eagle trip attract arctic window hammer flock naive daughter hawk exile canyon index pact slim sadness smoke involve stuff baby industry calm master absent swarm";
let myaccount = algosdk.mnemonicToSecretKey(MNEMONIC);
let sender = myaccount.addr;

async function compileProgram(client, TealSource) {
    let encoder = new TextEncoder();
    let programBytes = encoder.encode(TealSource);
    let compileResponse = await client.compile(programBytes).do();
    let compiledBytes = new Uint8Array(Buffer.from(compileResponse.result, "base64"));
    return compiledBytes;
}

(async () => {
    try {
        const localInts = 0;
        const localBytes = 0;
        const globalInts = 2;
        const globalBytes = 0;
        const approvalProgramfile = await open("./contracts/artifacts/multicontract_approval.teal");
        const clearProgramfile = await open("./contracts/artifacts/multicontract_clear.teal");

        const approvalProgram = await readFile(approvalProgramfile, { encoding: 'utf-8' });
        const clearProgram = await readFile(clearProgramfile, { encoding: 'utf-8' });

        const approvalProgramBinary = await compileProgram(algodClient, approvalProgram);
        const clearProgramBinary = await compileProgram(algodClient, clearProgram);

        let params = await algodClient.getTransactionParams().do();
        const onComplete = algosdk.OnApplicationComplete.NoOpOC;

        console.log("Deploying Application. . . . ");
        let txn = algosdk.makeApplicationCreateTxn(
            sender,
            params,
            onComplete,
            approvalProgramBinary,
            clearProgramBinary,
            localInts,
            localBytes,
            globalInts,
            globalBytes
        );
        let txId = txn.txID().toString();
        console.log("Signed transaction with txID: %s", txId);

        let signedTxn = txn.signTxn(myaccount.sk);
        await algodClient.sendRawTransaction(signedTxn).do();
        await algosdk.waitForConfirmation(algodClient, txId, 2);

        let transactionResponse = await algodClient.pendingTransactionInformation(txId).do();
        let appId = transactionResponse["application-index"];
        console.log("Created new app with app-id: ", appId);
    } catch (err) {
        console.error("Failed to deploy!", err);
        process.exit(1);
    }
})();
