import { action } from "@storybook/addon-actions";
import Toggle from "./Toggle.svelte";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: { control: "radio", options: ["default", "outline"] },
    size: { control: "radio", options: ["default", "sm", "lg"] },
    pressed: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

const Template = ({ onClick, ...args }) => ({
  Component: Toggle,
  props: args,
  on: {
    click: action("Toggle clicked"),
  },
});

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  size: "default",
  pressed: false,
  disabled: false,
};

export const Customized = Template.bind({});
Customized.args = {
  variant: "outline",
  size: "lg",
  pressed: true,
  disabled: false,
};
