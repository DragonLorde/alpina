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
  render: () => <StyledTypography styleOverride={sT.variantLight.baseSm}> ALPINA </StyledTypography>,
};

export const TypographyL: Story = {
  name: 'T light',
  render: () => <StyledTypography styleOverride={sT.variantLight.baseL}> ALPINA </StyledTypography>,
};

export const TypographyS: Story = {
  name: 'T secondary',
  render: () => <StyledTypography styleOverride={sT.variantLight.baseS}> ALPINA </StyledTypography>,
};

export const TypographyM: Story = {
  name: 'T medium',
  render: () => <StyledTypography styleOverride={sT.variantLight.baseM}> ALPINA </StyledTypography>,
};
