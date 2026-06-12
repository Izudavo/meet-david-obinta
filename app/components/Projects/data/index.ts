import { frontendProjects } from "./frontend";
import { backendProjects } from "./backend";
import { cloudProjects } from "./cloud";
import { uiuxProjects } from "./uiux";

export const projects = [
  ...uiuxProjects,
  ...frontendProjects,
  ...backendProjects,
  ...cloudProjects,
];