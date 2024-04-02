import type { Meta, StoryObj } from '@storybook/react';
import { StyledTypography, sT } from '../../src';

const meta: Meta<typeof StyledTypography> = {
  component: StyledTypography,
};

export default meta;
type Story = StoryObj<typeof StyledTypography>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const TypographyDanger: Story = {
  name: 'T Danger',
  args: {
    isDanger: true,
    isGray: false,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseL}>
      ALPINA
    </StyledTypography>
  ),
};

export const TypographyGray: Story = {
  name: 'T Gray',
  args: {
    isDanger: false,
    isGray: true,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseS}>
      ALPINA
    </StyledTypography>
  ),
};

export const TypographyLined: Story = {
  name: 'T Line',
  args: {
    isDanger: false,
    isGray: false,
    withBottomLine: true,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseM}>
      ALPINA
    </StyledTypography>
  ),
};
