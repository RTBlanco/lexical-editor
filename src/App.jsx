import {$createTextNode, $getRoot, $getSelection} from 'lexical';
import {useEffect} from 'react';

import {AutoFocusPlugin} from '@lexical/react/LexicalAutoFocusPlugin';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LexicalErrorBoundary} from '@lexical/react/LexicalErrorBoundary';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {HeadingNode, $createHeadingNode} from "@lexical/rich-text"

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

function myHeadingPlugin() {
  const [editor] = useLexicalComposerContext()
  const onClick = (e) => {
    editor.update(() => {
      const root = $getRoot()
      root.append($createHeadingNode('h1').append($createTextNode("Hello World")))
    })
    return <button onClick={onClick}>Heading</button>
  }
}

function App() {
  const initialConfig = {
    namespace: 'MyEditor',
    theme,
    onError,
    nodes: [HeadingNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
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
      <HistoryPlugin />
      <AutoFocusPlugin />
    </LexicalComposer>
  );
}

export default App;