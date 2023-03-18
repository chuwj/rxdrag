import { IComponentMaterial } from "@rxdrag/react-core";
import { Menu } from "components/layouts/Menu";
import { logoIcon } from "./icon";
import { menuLocales, logoResourceLocales } from "./locales";
import { logoSchema } from "./schema";

const name = "Menu"
export const MenuMaterial: IComponentMaterial = {
  componentName: name,
  component: Menu,
  designer: Menu,
  designerLocales: menuLocales,
  designerSchema: logoSchema,
  resource: {
    name: name,
    icon: logoIcon,
    color: "#F5A623",
    resourceLocales: logoResourceLocales,
    elements: [
      {
        componentName: name,
      }
    ]
  },
}
