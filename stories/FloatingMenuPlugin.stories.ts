import { Meta, StoryObj } from "@storybook/react";

import { FloatingMenuPlugin } from "../src";
import { FloatingMenu } from "./components/FloatingMenu";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/FloatingMenuPlugin",
  component: FloatingMenuPlugin,
} satisfies Meta<typeof FloatingMenuPlugin>;

export default meta;

type Story = StoryObj<typeof FloatingMenuPlugin>;

export const Default: Story = {
  args: {
    MenuComponent: FloatingMenu
  },
};