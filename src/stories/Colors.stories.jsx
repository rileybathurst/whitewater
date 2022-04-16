import React from 'react';
import { Colors } from './Colors';

// import "./stories.scss";

export default {
  title: 'Colors',
  component: Colors,
};

const Template = (args) => <Colors {...args} />;

export const SolarFusion = Template.bind({});
SolarFusion.args = {
  primary: true,
  label: 'Colors',
  Name: 'Solar Fusion',
  Color: 'e0a240',
};

export const GlitterLake = Template.bind({});
GlitterLake.args = {
  label: 'Colors',
  Name: 'Glitter Lake',
  Color: '4bb6fd',
};

export const DarkCharcoal = Template.bind({});
DarkCharcoal.args = {
  label: 'Colors',
  Name: 'Dark Charcoal',
  Color: '323232',
};

export const White = Template.bind({});
White.args = {
  label: 'Colors',
  Name: 'White',
  Color: 'ffffff',
};