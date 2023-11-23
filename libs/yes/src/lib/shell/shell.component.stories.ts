import type { Meta, StoryObj } from '@storybook/angular';
import { ShellComponent } from './shell.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<ShellComponent> = {
  component: ShellComponent,
  title: 'ShellComponent'
};
export default meta;
type Story = StoryObj<ShellComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/shell works!/gi)).toBeTruthy();
  }
};
