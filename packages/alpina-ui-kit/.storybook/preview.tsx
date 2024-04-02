import type { Preview } from '@storybook/react';
import '../styles/globalStyles.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { themeClass } from '../src';
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <AntdRegistry>
        <div className={`${themeClass}`}>
          <Story />
        </div>
      </AntdRegistry>
    ),
  ],
};

export default preview;
