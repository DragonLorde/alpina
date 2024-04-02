import type { Meta, StoryObj } from '@storybook/react';
import { ButtonStyled } from '../src/components';
import { variantFill } from '../src/components/atoms/Button/button.css';

const meta: Meta<typeof ButtonStyled> = {
  component: ButtonStyled,
};

export default meta;
type Story = StoryObj<typeof ButtonStyled>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'Default Button',
  render: () => <ButtonStyled styleOverride={variantFill.baseBlack}>Купить</ButtonStyled>,
};

export const PrimaryButton: Story = {
  name: 'White Button',
  render: () => <ButtonStyled styleOverride={variantFill.transparentFill}>Задать вопрос</ButtonStyled>,
};

export const SmallButtonBlack: Story = {
  name: 'Small Button Black',
  render: () => <ButtonStyled styleOverride={variantFill.smallButtonBlack}>Задать вопрос</ButtonStyled>,
};

export const SmallButtonWhite: Story = {
  name: 'Small Button White',
  render: () => <ButtonStyled styleOverride={variantFill.smallButtonWhite}>Подробнее</ButtonStyled>,
};
