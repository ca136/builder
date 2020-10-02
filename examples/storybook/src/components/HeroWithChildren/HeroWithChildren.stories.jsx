
import React from 'react';
import { getDefaultProps } from '@builder.io/storybook';
import { HeroWithBuilderChildrenConfig, HeroWithBuilderChildren } from './HeroWithChildren.builder';

const props = getDefaultProps(HeroWithBuilderChildrenConfig);
console.log('foooofds', props);

export default {
  title: 'Hero with Children',
  component: HeroWithBuilderChildren,
  parameters: {
    builder: {
      config: HeroWithBuilderChildrenConfig,
    },
  },
};

export const DefaultHeroWithChildren = () => (
  <div>
    <HeroWithBuilderChildren {...props} />
  </div>
);
