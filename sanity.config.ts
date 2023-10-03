import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: "/admin",
	name: "default",
	title: "New Post",

	projectId,
	dataset,

	plugins: [deskTool(), visionTool(), unsplashImageAsset()],

	schema: {
		types: schemaTypes,
	},
});
