import { h } from "@stencil/core";
import { has as loHas } from "lodash-es";
export default function render() {
    return [
        h("stellar-prompt", { prompter: this.prompter }),
        this.account ? ([
            h("div", { class: "account-key" },
                h("p", null, this.account.publicKey),
                h("button", { class: "small", type: "button", onClick: (e) => this.copyAddress(e) }, "Copy Address"),
                h("button", { class: "small", type: "button", onClick: (e) => this.copySecret(e) }, "Copy Secret")),
            h("button", { class: this.loading.pay ? "loading" : null, type: "button", onClick: (e) => this.makePayment(e) },
                this.loading.pay ? h("stellar-loader", null) : null,
                " Make Payment"),
        ]) : (h("button", { class: this.loading.fund ? "loading" : null, type: "button", onClick: (e) => this.createAccount(e) },
            this.loading.fund ? h("stellar-loader", null) : null,
            " Create Account")),
        this.error ? (h("pre", { class: "error" }, JSON.stringify(this.error, null, 2))) : null,
        loHas(this.account, "state") ? (h("pre", { class: "account-state" }, JSON.stringify(this.account.state, null, 2))) : null,
        this.account
            ? [
                h("button", { class: this.loading.update ? "loading" : null, type: "button", onClick: (e) => this.updateAccount(e) },
                    this.loading.update ? h("stellar-loader", null) : null,
                    " Update Account"),
                h("button", { type: "button", onClick: (e) => this.signOut(e) }, "Sign Out"),
            ]
            : null,
    ];
}
