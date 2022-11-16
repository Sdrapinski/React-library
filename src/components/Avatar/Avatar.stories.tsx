import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Avatars",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const thumbnail = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
thumbnail.args = {
  source: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  alt: "random user",
  title: "random user",
};
export const circle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
circle.args = {
  source: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
  alt: "random user",
  title: "random user",
  borderRadius: 50,
};

export const medium = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
medium.args = {
  source: "https://randomuser.me/api/portraits/med/men/75.jpg",
  alt: "random user",
  title: "random user",
};
export const large = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
large.args = {
  borderRadius: 20,
  source: "https://randomuser.me/api/portraits/men/75.jpg",
  alt: "random user",
  title: "random user",
};
