// import { Component, h } from '@stencil/core'
// import * as StellarSdk from 'stellar-sdk'

// @Component({
//   tag: 'stellar-wallet',
//   styleUrl: 'wallet.scss',
//   shadow: true
// })
// export class Wallet {
//   render() {
//     return [
//       <h1>
//         {
//         !!StellarSdk
//         ? 'The StellarSdk is xxx ready to rock 🤘'
//         : 'Uh oh, the StellarSdk is missing 😱'
//         }
//       </h1>
//     ]
//   }
// }

import { Component, State, Prop } from "@stencil/core";
import { Server, ServerApi } from "stellar-sdk";

import componentWillLoad from "./events/componentWillLoad";
import render from "./events/render";

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

@Component({
  tag: "stellar-wallet",
  styleUrl: "wallet.scss",
  shadow: true,
})
export class Wallet {
  @State() account: StellarAccount;
  @State() prompter: Prompter = { show: false };
  @State() loading: Loading = {};
  @State() error: any = null;

  @Prop() server: Server;

  // Component events
  componentWillLoad() {}
  render() {}

  // Stellar methods
  createAccount = createAccount;
  updateAccount = updateAccount;
  makePayment = makePayment;
  copyAddress = copyAddress;
  copySecret = copySecret;
  signOut = signOut;

  // Misc methods
  setPrompt = setPrompt;
}

Wallet.prototype.componentWillLoad = componentWillLoad;
Wallet.prototype.render = render;


