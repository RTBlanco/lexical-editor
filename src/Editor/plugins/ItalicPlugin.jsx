import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";


export default function ItalicPlugin() {
  const [editor] = useLexicalComposerContext()
  const onClick = (tag) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")
  }

  const underLineIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-58.7 0-133.3 320 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l58.7 0 133.3-320-64 0c-17.7 0-32-14.3-32-32z"/></svg>

  return(
    <button className="toolbar-btn" onClick={onClick}>{underLineIcon}</button>
  )
}