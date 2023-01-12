import { UserConfig } from "vite";
import updateVersion from "./update.version"

export default () => {
    return {
        name: "update-version",
        async config(_config:UserConfig, { command }) {
            if (command == "build") {
                await updateVersion();
            }
        }
    }
}