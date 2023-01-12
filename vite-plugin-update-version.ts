import { UserConfig } from "vite";
import { readFile, writeFile } from "fs/promises";
import { resolve } from "path";

export type SetVersionFn = (oldVersion: string) => string | Promise<string>;

/**
 * command: 与vite 中ConfigEnv 对应，同时增加了值 "all"，默认为 "build"。
 * setVersion：设置version的function
 */
export type UpdateVersionConfig = {
    command?: "all" | "build" | "serve"
    setVersion?: SetVersionFn
};

export default (config: UpdateVersionConfig = { command: "build", setVersion: getVersion }) => {

    let updateCommand = config.command || "build";
    console.log(config);
    return {
        name: "vite-plugin-update-version",
        apply(_config: UserConfig, { command }) {
            return updateCommand == command;
        },
        buildEnd() {
            updateVersion(config.setVersion || getVersion);
        }
    }
}

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

    return vNumList.join(".");
}

async function setVersionLine(packageText: string, setVersion: SetVersionFn) {
    let match = packageText.match("version.*");
    if (!match) {
        throw new Error("no match version field");
    }
    let versionLine = match[0];

    let lastIndex = versionLine.lastIndexOf('"');
    let lastNextIndex = versionLine.lastIndexOf('"', lastIndex - 1);

    let currentVersion = versionLine.substring(lastNextIndex + 1, lastIndex).trim();

    let newVersion = await setVersion(currentVersion);

    let newLine = versionLine.substring(0, lastNextIndex + 1) + newVersion + versionLine.substring(lastIndex);

    return {
        packageText: packageText.replace(versionLine, newLine),
        version: newVersion,
        oldVersion: currentVersion
    };
}

async function updateVersion(setVersion: SetVersionFn) {
    console.log("update version...");

    let filePath = resolve(__dirname, 'package.json');

    let packageText = await readFile(filePath, { encoding: "utf8" });

    let result = await setVersionLine(packageText, setVersion);

    console.log(`current version is ${result.oldVersion}, new version will be updated`);

    await writeFile(filePath, result.packageText, { encoding: "utf8" });

    console.log(`package version is updated:${result.version}`);
}