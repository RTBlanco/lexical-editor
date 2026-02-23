import { HeadingPlugin } from "./plugins/HeaderPlugin"
import ListsPlugin from "./plugins/ListsPlugin"

export default function ToolbarPlugin() {

  return(
    <div className="toolbar-wrapper">
      <HeadingPlugin />
      <ListsPlugin />
    </div>
  )
}