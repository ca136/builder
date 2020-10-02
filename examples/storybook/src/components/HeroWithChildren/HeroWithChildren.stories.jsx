
import React from 'react';
import { getDefaultProps } from '@builder.io/storybook';
import { HeroWithEditableChildren } from './HeroWithChildren';
import { HeroWithBuilderChildrenConfig } from './HeroWithChildren.builder';

const props = getDefaultProps(HeroWithBuilderChildrenConfig);

export default {
  title: 'Hero with Children',
  component: HeroWithEditableChildren,
  parameters: {
    builder: {
      config: HeroWithBuilderChildrenConfig,
    },
  },
};

export const DefaultHeroWithChildren = () => (
  <div>
    <HeroWithEditableChildren {...props}></HeroWithEditableChildren>
  </div>
);
