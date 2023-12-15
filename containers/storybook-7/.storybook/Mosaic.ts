import { create } from '@storybook/theming/create';

// @ts-ignore
import MosaicLogo from '../src/assets/MosaicLight.png';

export default create({
	base: 'dark',
	brandTitle: 'Mosaic',
	brandUrl: 'https://simpleviewinc.github.io/sv-mosaic',
	brandImage: MosaicLogo,
	brandTarget: '_self',

	colorPrimary: "#00a4e4"
});
