import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xFcfC646e22352C5336EBEADe026E7eDFD5A515B4",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Lucario Sticker",
                description: "This NFT will give you access to PokemonDAO!",
                image: readFileSync("scripts/assets/lucario.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()

// Contract address: 0x0b363Fb759A60632114Bf23E3759f51187eCf0b3