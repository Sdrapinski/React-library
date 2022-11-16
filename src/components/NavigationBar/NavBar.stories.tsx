import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import NavBar from "./NavBar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Test1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test1.args = {
  children: (
    <ul>
      <li>hej</li>
      <li>hej</li>
    </ul>
  ),
};

export const Text = Template.bind({});
Text.args = {
  children: "Hello",
};
