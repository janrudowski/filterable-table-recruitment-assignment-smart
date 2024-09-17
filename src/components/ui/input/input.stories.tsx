import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "error"],
    },
    inputSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
    clear: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const InputWrapper = (args: React.ComponentProps<typeof Input>) => {
  const [value, setValue] = useState("");
  return (
    <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />
  );
};

export const Default: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: "Username",
  },
};

export const WithIcons: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: "Search",
    prependIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
    appendIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
};

export const WithClear: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: "Clearable Input",
    clear: true,
    onClear: () => console.log("Input cleared"),
  },
};

export const ErrorState: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: "Email",
    variant: "error",
    errorMessage: "Please enter a valid email address",
  },
};

export const Disabled: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    label: "Disabled Input",
    disabled: true,
  },
};
