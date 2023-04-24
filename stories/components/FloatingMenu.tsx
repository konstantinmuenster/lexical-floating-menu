import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from "lexical";
import { useEffect, useState } from "react";

import { FloatingMenuComponentProps } from "../../src";

import { IconButton } from "./IconButton";

export type FloatingMenuState = {
  isBold: boolean;
  isCode: boolean;
  isItalic: boolean;
  isStrikethrough: boolean;
  isUnderline: boolean;
};

export function FloatingMenu({ editor }: FloatingMenuComponentProps) {
  const [state, setState] = useState<FloatingMenuState>({
    isBold: false,
    isCode: false,
    isItalic: false,
    isStrikethrough: false,
    isUnderline: false,
  });

  useEffect(() => {
    editor.getEditorState().read(() => {
      const selection = $getSelection();
      if (!$isRangeSelection(selection)) return;

      setState({
        isBold: selection.hasFormat("bold"),
        isCode: selection.hasFormat("code"),
        isItalic: selection.hasFormat("italic"),
        isStrikethrough: selection.hasFormat("strikethrough"),
        isUnderline: selection.hasFormat("underline"),
      });
    });
  }, [editor]);

  return (
    <div className="flex items-center justify-between bg-slate-100 border-[1px] border-slate-300 rounded-md p-1 gap-1">
      <IconButton
        icon="bold"
        aria-label="Format text as bold"
        active={state.isBold}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          setState({ ...state, isBold: !state.isBold });
        }}
      />
      <IconButton
        icon="italic"
        aria-label="Format text as italics"
        active={state.isItalic}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          setState({ ...state, isItalic: !state.isItalic });
        }}
      />
      <IconButton
        icon="underline"
        aria-label="Format text to underlined"
        active={state.isUnderline}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          setState({ ...state, isUnderline: !state.isUnderline });
        }}
      />
      <IconButton
        icon="strike"
        aria-label="Format text with a strikethrough"
        active={state.isStrikethrough}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough");
          setState({ ...state, isStrikethrough: !state.isStrikethrough });
        }}
      />
      <IconButton
        icon="code"
        aria-label="Format text with inline code"
        active={state.isCode}
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code");
          setState({ ...state, isCode: !state.isCode });
        }}
      />
    </div>
  );
}
