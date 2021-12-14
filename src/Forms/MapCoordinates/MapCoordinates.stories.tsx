import * as React from 'react';
import { ReactElement } from 'react';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

// Components
import MapCoordinates from './MapCoordinates';
import { Address } from '@root/forms/Address/AddressTypes';

export default {
  title: 'Forms|MapCoordinates',
  decorators: [withKnobs],
};

const mapPosition = {
  lat: -3.745,
  lng: -40.523,
};

const address: Address = {
  address: '',
  city: '',
  country: {
    title: '',
    value: '',
  },
  postalCode: '456789',
  state: {
    title: '',
    value: '',
  },
  types: [],
};

export const Example = (): ReactElement => {
  const disabled = boolean('Disabled', false);

  return (
    <MapCoordinates
      apiKey={text('API key', '')}
      address={address}
      disabled={disabled}
      mapPosition={mapPosition}
    />
  );
};
