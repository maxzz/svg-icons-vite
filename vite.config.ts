import { UserConfig } from "vite";
import Icons, { ViteIconsResolver } from "vite-plugin-icons";
import Components from "vite-plugin-components";

const config: UserConfig = {
    base: '/svg-icons-vite/',
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
