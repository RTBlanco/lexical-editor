import HeadingPlugin from "./plugins/HeaderPlugin"
import ListsPlugin from "./plugins/ListsPlugin"
import UnderLinedPlugin from "./plugins/UnderLinedPlugin"
import BoldPlugin from "./plugins/BoldPlugin"
import ItalicPlugin from "./plugins/ItalicPlugin"
import "./toolbar.css"

export default function ToolbarPlugin() {

  return(
    <div className="toolbar-container">
      {/* <HeadingPlugin /> */}
      <BoldPlugin />
      <ItalicPlugin />
      <UnderLinedPlugin />
      <ListsPlugin />
    </div>
  )
}