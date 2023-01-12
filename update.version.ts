
import { readFile, writeFile } from "fs/promises";

let filePath = './package.json';

function getVersion(version: string) {
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

function setVersionLine(packageText: string) {
    let match = packageText.match("version.*");
    if (!match) {
        throw new Error("mo match version field");
    }
    let lastIndex = match[0].lastIndexOf('"');
    let lastNextIndex = match[0].lastIndexOf('"', lastIndex - 1);

    let currentVersion = match[0].substring(lastNextIndex + 1, lastIndex).trim();
    let newVersion = getVersion(currentVersion);

    let newLine = match[0].substring(0, lastNextIndex + 1) + newVersion + match[0].substring(lastIndex);

    console.log(`current version is ${currentVersion}, new version will be updated`);

    return {
        packageText: packageText.replace(match[0], newLine),
        newVersion
    };
}

export default async () => {
    console.log("update version...");

    let packageText = await readFile(filePath, { encoding: "utf8" });

    let result = setVersionLine(packageText);
    await writeFile(filePath, result.packageText, { encoding: "utf8" });

    console.log(`package version is updated:${result.newVersion}`);
}