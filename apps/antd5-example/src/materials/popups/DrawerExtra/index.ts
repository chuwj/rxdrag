import { IComponentMaterial } from "@rxdrag/react-core";
import { DrawerExtra } from "components/popups/DrawerExtra";
import { locales } from "./locales";
import { materialSchema } from "./schema";

const name = "DrawerExtra"
export const DrawerExtraMaterial: IComponentMaterial = {
  componentName: name,
  component: DrawerExtra,
  designer: DrawerExtra,
  designerLocales: locales,
  designerSchema: materialSchema,
  designerProps: {
    //readOnly: true,
  },

  behaviorRule: {
    droppable: true,
  }
}