import { UserConfig } from "vite";
import Icons, { ViteIconsResolver } from "vite-plugin-icons";
import Components from "vite-plugin-components";

const config: UserConfig = {
    assetsDir: "static",
    plugins: [
        Components({
            customComponentResolvers: [
                ViteIconsResolver()
            ],
        }),
        Icons(),
    ],
};

export default config;
