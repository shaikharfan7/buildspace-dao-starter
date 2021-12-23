import sdk from "./1-initialize-sdk.js";
import {readFileSync} from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x75FEDa0BF8e5c5851Fc171b3d6d9C1f82db2Ebfd"
);


(async()=>{
    try{
        await bundleDrop.createBatch([
            {
                name:"NFTSupportDAO Card",
                descritpion:"This NFT gives you access to NFTSupportDAO!",
                image: readFileSync("scripts/assets/nft.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    }catch (error) {
        console.error("failed to create the new NFT", error);
      }
})()