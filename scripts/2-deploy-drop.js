import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";
import {read, readFileSync} from "fs";

const app = sdk.getAppModule("0xB3b5BE1A172178A70CEB9F52D593BD6FE7941f00");


(async()=>{
    try{
        const bundleDropModule = await app.deployBundleDropModule({
            name:"NFTSupportDAO Membership",
            description: "A DAO to fund new and small NFT Projects.",
            image:readFileSync("scripts/assets/cover.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        })
        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
          );
          console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
          );
    }catch (error) {
        console.log("failed to deploy bundleDrop module", error);
      }
})()