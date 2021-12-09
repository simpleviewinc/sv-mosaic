import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';

// Components
import MapCoordinates from './MapCoordinates';

export default {
  title: 'Forms|MapCoordinates',
  decorators: [withKnobs],
};

const mapPosition = {
  lat: -3.745,
  lng: -38.523,
};

export const Example = (): ReactElement => {
  const disabled = boolean('Disabled', false);

  return (
    <MapCoordinates apiKey='' disabled={disabled} mapPosition={mapPosition} />
  );
};
