import { ID, INodeSchema } from "core"
import { memo, useEffect, useMemo } from "react"
import { ComponentField } from "./ComponentField"
import { ComponentSchemaContext } from "./contexts"
import { usePreviewComponent } from "core-react/hooks/usePreviewComponent"
import { withBind } from "runner/ComponentRender/withBind"
import { IBindParams } from "./interfaces"
import { IFieldMeta } from "runner/fieldy"
import { withController } from "./withController"

export interface IComponentRenderSchema extends INodeSchema<IFieldMeta<IBindParams>> {
  id: ID,
  children?: IComponentRenderSchema[]
  slots?: {
    [name: string]: IComponentRenderSchema | undefined
  }
}
export type ComponentViewProps = {
  node: IComponentRenderSchema,
}

export const ComponentView = memo((
  props: ComponentViewProps
) => {
  const { node, ...other } = props
  const com = usePreviewComponent(node.componentName)
  const Component = useMemo(() => com && withController(withBind(com, node?.["x-field"]), node["x-reactions"]), [com, node]);
  const slots = useMemo(() => {
    const slts: { [key: string]: React.ReactElement } = {}
    for (const name of Object.keys(node?.slots || {})) {
      const slot = node?.slots?.[name]
      if (slot) {
        slts[name] = <ComponentView node={slot} />
      }
    }

    return slts
  }, [node?.slots])
  useEffect(() => {
  }, [node, slots, Component])
  return (
    node &&
    <ComponentSchemaContext.Provider value={node}>
      <ComponentField fieldMeta={node?.["x-field"]}>
        {
          Component &&
          (
            !!node.children?.length ?
              <Component {...node.props} {...slots} {...other}>
                {
                  node.children?.map(child => {
                    return (<ComponentView key={child.id} node={child} />)
                  })
                }
              </Component>
              : <Component {...node.props} {...slots} {...other} />
          )
        }
      </ComponentField>
    </ComponentSchemaContext.Provider>
  )
})