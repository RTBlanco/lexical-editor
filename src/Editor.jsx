import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import {HeadingNode} from "@lexical/rich-text"
import { ListItemNode, ListNode } from "@lexical/list"
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import './editor.css'

// toolbar 
import ToolbarPlugin from './Editor/ToolBar';

const theme = {
  text: {
    underline: "underline",
    bold: "textBold",
    italic: "textItalic",
  }
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.


function onError(error) {
  console.error(error);
}


export default function Editor({id}) {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [HeadingNode, ListNode, ListItemNode ]
  };

  
  return (
    <div id={id}>
      <form action="">
        <LexicalComposer initialConfig={initialConfig}>
          <div className="editor-wrapper">

            <ToolbarPlugin />
            <div className="editor-text-container">
              <RichTextPlugin
                contentEditable={<ContentEditable className="contentEditable" />}
                placeholder={<div className="placeholder">Enter some text...</div>}
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>

          </div>
          <ListPlugin />
          <HistoryPlugin />
          <AutoFocusPlugin />
        </LexicalComposer>
      </form>
    </div>
  );
}

