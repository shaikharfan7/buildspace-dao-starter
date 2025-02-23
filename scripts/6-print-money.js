import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js"

const tokenModule = sdk.getTokenModule(
    "0x567dFA528EFB639D98EE8d8931b3148e54dc5c6f"
);

(async () => {
    try {
      const amount = 1_000_000;
      // We use the util function from "ethers" to convert the amount
      // to have 18 decimals (which is the standard for ERC20 tokens).
      const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
      // Interact with your deployed ERC-20 contract and mint the tokens!
      await tokenModule.mint(amountWith18Decimals);
      const totalSupply = await tokenModule.totalSupply();
      
      // Print out how many of our token's are out there now!
      console.log(
        "✅ There now is",
        ethers.utils.formatUnits(totalSupply, 18),
        "$HOKAGE in circulation",
      );
    } catch (error) {
      console.error("Failed to print money", error);
    }
  })();