import type { Meta, StoryObj } from '@storybook/react';
import { CatalogItemLink } from '../../src';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import catalog from '../../static/catalog.webp';
const meta: Meta<typeof CatalogItemLink> = {
  component: CatalogItemLink,
};

export default meta;
type Story = StoryObj<typeof CatalogItemLink>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    alt: 'alpina',
    src: catalog.src,
    link: '/item',
    text: 'Кровати и матрасы',
  },
  name: 'Default Catalog Item',
  render: (args) => <CatalogItemLink {...args}></CatalogItemLink>,
};
