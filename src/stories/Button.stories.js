import { action } from "@storybook/addon-actions";
import Button from "../stories/Button.svelte";

export default {
  title: "Components/Button",
  tags: ["autodocs"],

  component: Button,
  argTypes: {
    width: { control: "text" },
    height: { control: "text" },
    backgroundColor: { control: "color" },
    text: { control: "text" },
    borderRadius: { control: "text" },
    textColor: { control: "color" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Button,
  props: args,
  on: {
    click: action("Button clicked"),
  },
});

export const Default = Template.bind({});
Default.args = {
  width: "100px",
  height: "40px",
  backgroundColor: "black",
  text: "button",
  borderRadius: "10px",
  textColor: "white",
};
