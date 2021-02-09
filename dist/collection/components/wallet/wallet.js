import componentWillLoad from "./events/componentWillLoad";
import render from "./events/render";
import createAccount from "./methods/createAccount";
import updateAccount from "./methods/updateAccount";
import makePayment from "./methods/makePayment";
import copyAddress from "./methods/copyAddress";
import copySecret from "./methods/copySecret";
import signOut from "./methods/signOut";
import setPrompt from "./methods/setPrompt";
export class Wallet {
    constructor() {
        this.prompter = { show: false };
        this.loading = {};
        this.error = null;
        // Stellar methods
        this.createAccount = createAccount;
        this.updateAccount = updateAccount;
        this.makePayment = makePayment;
        this.copyAddress = copyAddress;
        this.copySecret = copySecret;
        this.signOut = signOut;
        // Misc methods
        this.setPrompt = setPrompt;
    }
    // Component events
    componentWillLoad() { }
    render() { }
    static get is() { return "stellar-wallet"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["wallet.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["wallet.css"]
    }; }
    static get properties() { return {
        "server": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Server",
                "resolved": "Server",
                "references": {
                    "Server": {
                        "location": "import",
                        "path": "stellar-sdk"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
    static get states() { return {
        "account": {},
        "prompter": {},
        "loading": {},
        "error": {}
    }; }
}
Wallet.prototype.componentWillLoad = componentWillLoad;
Wallet.prototype.render = render;
