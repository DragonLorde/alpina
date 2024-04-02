import type { Meta, StoryObj } from '@storybook/react';
import { AlpinaPreview } from '../src/components/AlpinaPreview';

const meta: Meta<typeof AlpinaPreview> = {
  component: AlpinaPreview,
};

export default meta;
type Story = StoryObj<typeof AlpinaPreview>;

export const Primary: Story = {
  storyName: 'AlpinaPreview',
  name: 'Preview',
  render: () => <AlpinaPreview />,
};
