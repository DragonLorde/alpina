import type { Meta, StoryObj } from '@storybook/react';
import { StyledTypography, sT } from '../../../src/components';

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
export const TypographySm: Story = {
  name: 'T medium',
  args: {
    isDanger: false,
    isGray: false,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseSm}>
      ALPINA
    </StyledTypography>
  ),
};

export const TypographyL: Story = {
  name: 'T light',
  args: {
    isDanger: false,
    isGray: false,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseL}>
      ALPINA
    </StyledTypography>
  ),
};

export const TypographyS: Story = {
  name: 'T secondary',
  args: {
    isDanger: false,
    isGray: false,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseS}>
      ALPINA
    </StyledTypography>
  ),
};

export const TypographyM: Story = {
  name: 'T medium',
  args: {
    isDanger: false,
    isGray: false,
    withBottomLine: false,
  },
  render: (args) => (
    <StyledTypography {...args} styleOverride={sT.variantBold.baseM}>
      ALPINA
    </StyledTypography>
  ),
};
