// import * as React from 'react';
// import { useState } from 'react';
// import { render, cleanup, fireEvent, screen } from '@testing-library/react';

// // Components
// import ImageVideoDocumentSetUp from './ImageVideoDocumentSetUp';

// afterEach(cleanup);

// const editCallback = jest.fn();
// const translateCallback = jest.fn();
// const setImageCallback = jest.fn();
// const setDocumentCallback = jest.fn();
// const setVideoCallback = jest.fn();

// const options = [
// 	{
// 		label: 'Edit',
// 		action: editCallback,
// 	},
// 	{
// 		label: 'Translate',
// 		action: translateCallback,
// 	},
// ];

// const ImageVideoDocumentSetUpExample = () => {
// 	const [assetProperties, setAssetProperties] = useState([]);

// 	const handleSetImage = () => {
// 		setAssetProperties([
// 			{
// 				label: 'Title',
// 				value: 'Test title',
// 			},
// 			{
// 				label: 'Type',
// 				value: 'Image',
// 			},
// 			{
// 				label: 'Alt',
// 				value: '-',
// 			},
// 			{
// 				label: 'Size',
// 				value: '1280x720',
// 			},
// 			{
// 				label: 'Focus',
// 				value: 'No',
// 			},
// 			{
// 				label: 'Locales',
// 				value: '-',
// 			},
// 		]);
// 		setImageCallback();
// 	};

// 	const handleDocument = () => {
// 		setAssetProperties([
// 			{
// 				label: 'Title',
// 				value: 'Document example',
// 			},
// 			{
// 				label: 'Type',
// 				value: 'Document',
// 			},
// 		]);
// 		setDocumentCallback();
// 	};

// 	const handleVideo = () => {
// 		setAssetProperties([
// 			{
// 				label: 'Title',
// 				value: 'Video Example - This is a video example',
// 			},
// 			{
// 				label: 'Type',
// 				value: 'Video',
// 			},
// 		]);
// 		setVideoCallback();
// 	};

// 	const handleRemove = () => {
// 		setAssetProperties([]);
// 	};

// 	return (
// 		<ImageVideoDocumentSetUp
// 			assetProperties={assetProperties}
// 			handleSetImage={handleSetImage}
// 			handleSetDocument={handleDocument}
// 			handleSetVideo={handleVideo}
// 			handleRemove={handleRemove}
// 			label='Label'
// 			options={options}
// 			src={
// 				'http://res.cloudinary.com/simpleview/image/upload/v1542821844/clients/grandrapids/_OD_0354_c78fbb66-c75a-4804-9430-9af38ed8e9d5.jpg'
// 			}
// 		/>
// 	);
// };

// describe('ImageVideoDocumentSetUp component', () => {
// 	it('should show the set image button and the label', () => {
// 		render(<ImageVideoDocumentSetUpExample />);
// 		const setImageButton = screen.getByText('SET IMAGE');
// 		const label = screen.getByText('Label');

// 		expect(label).toBeTruthy();
// 		expect(setImageButton).toBeTruthy();
// 	});
// });

// describe('ImageVideoDocumentSetUp card content', () => {
// 	beforeEach(() => {
// 		const { getByText } = render(<ImageVideoDocumentSetUpExample />);
// 		const setImageButton = getByText('SET IMAGE');
// 		fireEvent.click(setImageButton);
// 	});

// 	it('should show only the first 4 labels and values of the asset loaded', () => {
// 		const labelTitle = screen.getByText('Title');
// 		const valueTitle = screen.getByText('Test title');
// 		const labelType = screen.getByText('Type');
// 		const valueType = screen.getByText('Image');
// 		const labelAlt = screen.getByText('Alt');
// 		const valueAlt = screen.getByText('-');
// 		const labelSize = screen.getByText('Size');
// 		const valueSize = screen.getByText('1280x720');
// 		const labelFocus = screen.queryByText('Focus');
// 		const valueFocus = screen.queryByText('No');

// 		expect(labelTitle).toBeTruthy();
// 		expect(valueTitle).toBeTruthy();
// 		expect(labelType).toBeTruthy();
// 		expect(valueType).toBeTruthy();
// 		expect(labelAlt).toBeTruthy();
// 		expect(valueAlt).toBeTruthy();
// 		expect(labelSize).toBeTruthy();
// 		expect(valueSize).toBeTruthy();
// 		expect(labelFocus).toBe(null);
// 		expect(valueFocus).toBe(null);
// 	});

// 	it('should display the image', () => {
// 		const image = screen.getByTestId('image-test');

// 		expect(image).toBeTruthy();
// 	});
// });

// describe('ImageVideoDocumentSetUp menu options callbacks', () => {
// 	beforeEach(() => {
// 		const { container } = render(<ImageVideoDocumentSetUpExample />);
// 		const setImageButton = screen.getByText('SET IMAGE');
// 		fireEvent.click(setImageButton);
// 		const moreIcon = container.querySelector('.MuiButtonBase-root');
// 		fireEvent.click(moreIcon);
// 	});

// 	it('should trigger translate callback', () => {
// 		const translateOption = screen.getByText('Translate');
// 		fireEvent.click(translateOption);

// 		expect(translateCallback).toHaveBeenCalledTimes(1);
// 	});

// 	it('should trigger edit callback', () => {
// 		const editOption = screen.getByText('Edit');
// 		fireEvent.click(editOption);

// 		expect(editCallback).toHaveBeenCalledTimes(1);
// 	});
// });

// describe('ImageVideoDocumentSetUp Browse button. It should execute the function corresponding to the asset that was loaded', () => {
// 	beforeEach(() => {
// 		render(<ImageVideoDocumentSetUpExample />);
// 	});

// 	it('should trigger the set image callback', () => {
// 		const setImageButton = screen.getByText('SET IMAGE');
// 		fireEvent.click(setImageButton);
// 		const browseButton = screen.getByText('Browse');
// 		fireEvent.click(browseButton);

// 		expect(setImageCallback).toHaveBeenCalled();
// 	});

// 	it('should trigger the set document callback', () => {
// 		const setDocumentButton = screen.getByText('SET DOCUMENT');
// 		fireEvent.click(setDocumentButton);
// 		const browseButton = screen.getByText('Browse');
// 		fireEvent.click(browseButton);

// 		expect(setDocumentCallback).toHaveBeenCalled();
// 	});

// 	it('should trigger the set video callback', () => {
// 		const setVideoButton = screen.getByText('SET VIDEO');
// 		fireEvent.click(setVideoButton);
// 		const browseButton = screen.getByText('Browse');
// 		fireEvent.click(browseButton);

// 		expect(setVideoCallback).toHaveBeenCalled();
// 	});
// });
it.skip('skip', () => { });