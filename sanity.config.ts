import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./src/sanity/schemas";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { codeInput } from "@sanity/code-input";
import { myTheme } from "./src/sanity/theme";
import StudioNavbar from "@/src/sanity/components/studio-navbar";
import StudioLogo from "@/src/sanity/components/studio-logo";
import { defaultDocumentNode } from "./src/sanity/desk/default-document-node";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: "/admin",
	name: "My_Blog",
	title: "My Blog",
	projectId,
	dataset,
	plugins: [
		deskTool({ defaultDocumentNode }),
		visionTool(),
		unsplashImageAsset(),
		codeInput(),
	],
	schema: {
		types: schemaTypes,
	},
	studio: {
		components: {
			logo: StudioLogo,
			navbar: StudioNavbar,
		},
	},
	theme: myTheme,
});
