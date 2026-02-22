import {$createTextNode, $getRoot, $getSelection, $isRangeSelection} from 'lexical';
import {useEffect} from 'react';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {HeadingNode, $createHeadingNode} from "@lexical/rich-text"
import {$setBlocksType} from "@lexical/selection"
import { INSERT_ORDERED_LIST_COMMAND, INSERT_UNORDERED_LIST_COMMAND, ListItemNode, ListNode } from "@lexical/list"
import { ListPlugin } from '@lexical/react/LexicalListPlugin';

const theme = {
  // Theme styling goes here
  //...
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.


function onError(error) {
  console.error(error);
}

function ToolbarPlugin() {

  return(
    <div className="toolbar-wrapper">
      <HeadingPlugin />
      <ListToolbarPlugin />
    </div>
  )
}

function ListToolbarPlugin() {
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

function HeadingPlugin() {
  const [editor] = useLexicalComposerContext()
  const onClick = (tag) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $setBlocksType(selection, () => $createHeadingNode(tag))
      }
    })
  }

  return (
    <>{["h1",'h2','h3'].map(tag => (
      <button key={tag} className="heading-btn" onClick={() => onClick(tag)}>{tag.toUpperCase()}</button>
    ))}</>
  )
}

export default function Editor() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      
      <ToolbarPlugin />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            aria-placeholder={'Enter some text...'}
            placeholder={<div className='placeholder'>Enter some text...</div>}
            className='contentEditable'
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <ListPlugin />
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}

