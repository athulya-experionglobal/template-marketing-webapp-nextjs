import React from 'react';

import { CtfHeroBanner } from './ctf-hero-banner';

import { useHeroBannerQuery } from '@ctf-components/ctf-hero-banner/__generated/ctf-hero-banner.generated';

interface CtfHeroGqlPropsInterface {
  id: string;
  locale: string;
  preview: boolean;
}

const CtfHeroGql = (props: CtfHeroGqlPropsInterface) => {
  const { id, locale, preview } = props;
  const { data, isLoading } = useHeroBannerQuery({
    id,
    locale,
    preview,
  });

  if (!data?.componentHeroBanner || isLoading) return null;

  return <CtfHeroBanner {...data.componentHeroBanner} />;
};

export default CtfHeroGql;
