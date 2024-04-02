import type { Meta, StoryObj } from '@storybook/react';
import { CatalogCarouselItem, CatalogItemLink } from '../../src';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import catalog from '../../static/catalog.webp';
const meta: Meta<typeof CatalogCarouselItem> = {
  component: CatalogCarouselItem,
};

export default meta;
type Story = StoryObj<typeof CatalogCarouselItem>;

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
  render: (args) => <CatalogCarouselItem {...args}></CatalogCarouselItem>,
};
