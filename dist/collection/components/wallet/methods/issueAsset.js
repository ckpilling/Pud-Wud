// import * as StellarSdk2 from "stellar-sdk";
//import { handleError } from "@services/error";

var StellarSdk = require("stellar-sdk");

var server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

// Keys for accounts to issue and receive the new asset
var issuingKeys = StellarSdk.Keypair.fromSecret(
    // google browser
    "SAFBLIHD2YH4MXRLLJEJROVILONDUTYN47K4XNLKUKAU6PWOOIUMNNIJ",
);
var receivingKeys = StellarSdk.Keypair.fromSecret(
    // firefox browser
    "SDDX3DATYRHSB6MQRC6IQDC2IEFLUDLMPY36DJQ7X56BFFCETL3W46OV",
);

// Create an object to represent the new asset
var zaq = new StellarSdk.Asset("zaq", issuingKeys.publicKey());

// export {issueAsset as default};

// export default async function issueAsset(e: Event) {
    // try {
    //     e.preventDefault();




        // First, the receiving account must trust the asset
        server
            .loadAccount(receivingKeys.publicKey())
            .then(function (receiver) {
                var transaction = new StellarSdk.TransactionBuilder(receiver, {
                    fee: 100,
                    networkPassphrase: StellarSdk.Networks.TESTNET,
                })
                    // The `changeTrust` operation creates (or alters) a trustline
                    // The `limit` parameter below is optional
                    .addOperation(
                        StellarSdk.Operation.changeTrust({
                            asset: zaq,
                            limit: "1000",
                        }),
                    )
                    // setTimeout is required for a transaction
                    .setTimeout(100)
                    .build();
                transaction.sign(receivingKeys);
                return server.submitTransaction(transaction);
            })
            .then(console.log)

            // Second, the issuing account actually sends a payment using the asset
            .then(function () {
                return server.loadAccount(issuingKeys.publicKey());
            })
            .then(function (issuer) {
                var transaction = new StellarSdk.TransactionBuilder(issuer, {
                    fee: 100,
                    networkPassphrase: StellarSdk.Networks.TESTNET,
                })
                    .addOperation(
                        StellarSdk.Operation.payment({
                            destination: receivingKeys.publicKey(),
                            asset: zaq,
                            amount: "10",
                        }),
                    )
                    // setTimeout is required for a transaction
                    .setTimeout(100)
                    .build();
                transaction.sign(issuingKeys);
                return server.submitTransaction(transaction);
            })

            .then(console.log)
            .catch(function (e) {
                console.error("Error!", e);
            });

        // } catch (err) {
        //     this.error = handleError(err);
   //  }
// }


