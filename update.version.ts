
import { readFile, writeFile } from "fs/promises";

function setVersion(version: string) {
    let vNumList = version.split(".").map(item => Number(item));
    if (vNumList[2] >= 9) {
        vNumList[2] = 0;
        vNumList[1] += 1;

        if (vNumList[1] > 9) {
            vNumList[1] = 0;
            vNumList[0] += 1;
        }
    } else {
        vNumList[2] += 1
    }

    return vNumList.join(".");
}

export default async () => {
    let filePath = './package.json';
    console.log("update version...");
    let packageText = await readFile(filePath, { encoding: "utf8" });
    let packageJson = JSON.parse(packageText);
    packageJson.version = setVersion(packageJson.version);
    await writeFile(filePath, JSON.stringify(packageJson), { encoding: "utf8" });
    console.log(`package version is updated:${packageJson.version}`);
};