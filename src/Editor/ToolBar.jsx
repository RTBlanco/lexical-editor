import { HeadingPlugin } from "./plugins/HeaderPlugin"
import ListsPlugin from "./plugins/ListsPlugin"
import "./toolbar.css"

export default function ToolbarPlugin() {

  return(
    <div className="toolbar-container">
      {/* <HeadingPlugin /> */}
      <ListsPlugin />
    </div>
  )
}