import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND } from "@lexical/list"
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

export default function ListsPlugin() {
  const [editor] = useLexicalComposerContext()
  const onClick = (tag) => {
    if ( tag === "ol") {
      editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
      return
    }

    editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
  }

  return (
    <>{["ol", "ul"].map(tag => (
      <button key={tag} className="heading-btn" onClick={() => onClick(tag)}>{tag.toUpperCase()}</button>
    ))}</>
  )
}