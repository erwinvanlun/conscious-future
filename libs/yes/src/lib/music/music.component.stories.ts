import type { Meta, StoryObj } from '@storybook/angular';
import { MusicComponent } from './music.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<MusicComponent> = {
  component: MusicComponent,
  title: 'MusicComponent'
};
export default meta;
type Story = StoryObj<MusicComponent>;

export const Primary: Story = {
  args: {}
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/music works!/gi)).toBeTruthy();
  }
};
