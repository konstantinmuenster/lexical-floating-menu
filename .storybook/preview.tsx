import React from "react";

import { Preview } from "@storybook/react";
import { LexicalEditor } from "./decorators/LexicalEditor";

import "./styles/global.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <LexicalEditor className="max-w-2xl my-10 mx-auto">
        <Story />
      </LexicalEditor>
    ),
  ],
};

export default preview;
