import React from "react";
import cx from "classnames";

import { CodeNode } from "@lexical/code";
import { LinkNode } from "@lexical/link";
import { ListItemNode, ListNode } from "@lexical/list";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { EditorState } from "lexical";

export const EDITOR_NAMESPACE = "lexical-editor";

const EDITOR_NODES = [
  CodeNode,
  HeadingNode,
  LinkNode,
  ListNode,
  ListItemNode,
  QuoteNode,
];

type LexicalEditorProps = {
  className?: string;
  children: JSX.Element;
};

export function LexicalEditor(props: LexicalEditorProps) {
  return (
    <div
      id="editor-wrapper"
      className={cx(
        props.className,
        "relative prose prose-slate prose-p:my-0 prose-headings:mb-4 prose-headings:mt-2"
      )}
    >
      <LexicalComposer
        initialConfig={{
          namespace: EDITOR_NAMESPACE,
          nodes: EDITOR_NODES,
          editorState: (editor) => {
            const state = editor.parseEditorState(INITIAL_CONTENT as any);
            editor.setEditorState(state);
          },
          theme: {
            root:
              "p-4 border-slate-500 border-2 rounded h-auto min-h-[200px] focus:outline-none focus-visible:border-black",
            link: "cursor-pointer",
            text: {
              bold: "font-semibold",
              underline: "underline decoration-wavy",
              italic: "italic",
              strikethrough: "line-through",
              underlineStrikethrough: "underlined-line-through",
            },
          },
          onError: (error) => {
            console.log(error);
          },
        }}
      >
        {/* Official Plugins */}
        <RichTextPlugin
          contentEditable={<ContentEditable spellCheck={false} />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ListPlugin />
        {props.children}
      </LexicalComposer>
    </div>
  );
}

const Placeholder = () => {
  return (
    <div className="absolute top-[1.125rem] left-[1.125rem] opacity-50">
      Start writing...
    </div>
  );
};

const INITIAL_CONTENT = {
  root: {
    children: [
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text: "Laboris amet dolor eiusmod aliquip.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "heading",
        version: 1,
        tag: "h2",
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text:
              "Aute in qui amet labore adipisicing dolore. Cillum elit et labore ipsum minim laboris veniam. Incididunt aute do reprehenderit deserunt proident velit nisi esse adipisicing. Laboris sit in nulla deserunt id aliqua ullamco in. Aliquip anim amet dolore exercitation et amet velit reprehenderit id reprehenderit deserunt eiusmod.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
      {
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text:
              "Aute in qui amet labore adipisicing dolore. Cillum elit et labore ipsum minim laboris veniam. Incididunt aute do reprehenderit deserunt proident velit nisi esse adipisicing. Laboris sit in nulla deserunt id aliqua ullamco in. Aliquip anim amet dolore exercitation et amet velit reprehenderit id reprehenderit deserunt eiusmod.",
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "paragraph",
        version: 1,
      },
    ],
    direction: "ltr",
    format: "",
    indent: 0,
    type: "root",
    version: 1,
  },
};
