import { Server, ServerApi } from "stellar-sdk";
import createAccount from "./methods/createAccount";
import updateAccount from "./methods/updateAccount";
import makePayment from "./methods/makePayment";
import copyAddress from "./methods/copyAddress";
import copySecret from "./methods/copySecret";
import signOut from "./methods/signOut";
import setPrompt from "./methods/setPrompt";
import { Prompter } from "@prompt/prompt";
interface StellarAccount {
    publicKey: string;
    keystore: string;
    state?: ServerApi.AccountRecord;
}
interface Loading {
    fund?: boolean;
    pay?: boolean;
    update?: boolean;
}
export declare class Wallet {
    account: StellarAccount;
    prompter: Prompter;
    loading: Loading;
    error: any;
    server: Server;
    componentWillLoad(): void;
    render(): void;
    createAccount: typeof createAccount;
    updateAccount: typeof updateAccount;
    makePayment: typeof makePayment;
    copyAddress: typeof copyAddress;
    copySecret: typeof copySecret;
    signOut: typeof signOut;
    setPrompt: typeof setPrompt;
}
export {};
