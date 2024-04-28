import algosdk from "algosdk";
const algodToken = "a".repeat(64);
const server = "http://localhost";
const port = "4001";
const mnemonic = "eagle trip attract arctic window hammer flock naive daughter hawk exile canyon index pact slim sadness smoke involve stuff baby industry calm master absent swarm";
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
//# sourceMappingURL=config.js.map