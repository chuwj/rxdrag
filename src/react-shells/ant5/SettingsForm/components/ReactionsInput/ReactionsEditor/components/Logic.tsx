import { memo } from "react"
import { useEditEdge } from "../hooks/edit-meta/useEditEdge"
import { useAddNode } from "../hooks/edit-meta/useAddNode"
import { useMovedNode } from "../hooks/edit-meta/useMovedNode"
import { useArrowhead } from "../hooks/useArrowhead"
import { useShowCells } from "../hooks/useShowCells"
import { useTraceLining } from "../hooks/useTraceLining"
import { useSelection } from "../hooks/useSelection"
import { useRemove } from "../hooks/edit-meta/useRemove"
import { useZoom } from "../hooks/useZoom"

export const Logic = memo(()=>{
  useShowCells()
  useTraceLining()
  useAddNode()
  useEditEdge()
  useMovedNode()
  useArrowhead()
  useSelection()
  useRemove()
  useZoom()
  return null
})