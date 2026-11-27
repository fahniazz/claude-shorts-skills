// CLI defaults for every render / still in this project.
import { Config } from "@remotion/cli/config";

// Draw WebGL (three.js) on the GPU. The default is a software renderer on the CPU: about 20x slower for these
// scenes, with identical pictures. Set REMOTION_GL=swangle (or pass --gl=swangle) if your machine has no usable GPU.
type OpenGlRenderer = "swangle" | "angle" | "egl" | "swiftshader" | "vulkan" | "angle-egl";
Config.setChromiumOpenGlRenderer((process.env.REMOTION_GL as OpenGlRenderer) || "angle");
