import sdk from "./1-initialize-sdk.js";

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x0b363Fb759A60632114Bf23E3759f51187eCf0b3");

(async () => {
    try {
        // Deploy a standard ERC-20 contract.
        const tokenModule = await app.deployTokenModule({
            // What's your token's name? Ex. "Ethereum"
            name: "PokemonDAO Governance Token",
            // What's your token's symbol? Ex. "ETH"
            symbol: "POKE",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
        );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();

// Token contract address: 0x61779eE3bc5Fc030bC7e4273dD17157390158995