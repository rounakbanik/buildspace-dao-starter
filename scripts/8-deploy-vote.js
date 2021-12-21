import sdk from "./1-initialize-sdk.js";

// Grab the app module address.
const appModule = sdk.getAppModule(
    "0x0b363Fb759A60632114Bf23E3759f51187eCf0b3",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            // Give your governance contract a name.
            name: "PokemonDAO's Proposals",

            // This is the location of our governance token, our ERC-20 contract!
            votingTokenAddress: "0x61779eE3bc5Fc030bC7e4273dD17157390158995",

            // After a proposal is created, when can members start voting?
            // For now, we set this to immediately.
            proposalStartWaitTimeInSeconds: 0,

            // How long do members have to vote on a proposal when it's created?
            // Here, we set it to 24 hours (86400 seconds)
            proposalVotingTimeInSeconds: 24 * 60 * 60,

            // Will explain more below.
            votingQuorumFraction: 0,

            // What's the minimum # of tokens a user needs to be allowed to create a proposal?
            // I set it to 0. Meaning no tokens are required for a user to be allowed to
            // create a proposal.
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
        );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();

// Vote module address: 0x564e64100a757272A516Fa7Fb2dD0d3e583b87cc