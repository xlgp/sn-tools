import { UserConfig } from "vite";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

let filePath = resolve(__dirname, 'package.json');

async function getVersion(version: string) {
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

    let newVersion = vNumList.join(".");
    return Promise.resolve(newVersion);
}

async function setVersionLine(packageText: string, setVersion: SetVersionFn) {
    let match = packageText.match("version.*");
    if (!match) {
        throw new Error("mo match version field");
    }
    let lastIndex = match[0].lastIndexOf('"');
    let lastNextIndex = match[0].lastIndexOf('"', lastIndex - 1);

    let currentVersion = match[0].substring(lastNextIndex + 1, lastIndex).trim();
    
    let newVersion = await setVersion(currentVersion);

    let newLine = match[0].substring(0, lastNextIndex + 1) + newVersion + match[0].substring(lastIndex);

    console.log(`current version is ${currentVersion}, new version will be updated`);

    return {
        packageText: packageText.replace(match[0], newLine),
        newVersion
    };
}

async function updateVersion(setVersion: SetVersionFn) {
    console.log("update version...");

    let packageText = await readFile(filePath, { encoding: "utf8" });

    let result = await setVersionLine(packageText, setVersion);
    await writeFile(filePath, result.packageText, { encoding: "utf8" });

    console.log(`package version is updated:${result.newVersion}`);
}

export type SetVersionFn = (oldVersion: string) => string | Promise<string>;

/**
 * command:
 * 与vite 中ConfigEnv 对应，
 * 同时增加了值 "all"。
 * 默认为 build
 */
export type UpdateVersionConfig = {
    command?: "all" | "build" | "serve"
    setVersion?: SetVersionFn
};

export default (config: UpdateVersionConfig = { command: "build", setVersion: getVersion }) => {

    let updateCommand = config.command || "build";

    return {
        name: "vite-plugin-update-version",
        async config(_config: UserConfig, { command }) {
            if (updateCommand == command || updateCommand == "all") {
                updateVersion(config.setVersion || getVersion);
            }
        }
    }
}