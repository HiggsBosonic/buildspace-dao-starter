import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x43D7090688D29335f6c8fB47310b87b93De74992",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Ranch Bro's Family Invitation",
        description: "This NFT will give you access to FamilyDAO, start your own DAO for Friends & Family!",
        image: readFileSync("scripts/assets/Ranch_Bros.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()