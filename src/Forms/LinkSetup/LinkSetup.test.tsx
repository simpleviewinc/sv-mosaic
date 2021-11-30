// import * as React from 'react';
// import { useState } from 'react';
// import { render, cleanup, fireEvent, screen } from '@testing-library/react';

// // Components
// import LinkSetup from './LinkSetup';

// afterEach(cleanup);

// const setLinkCallback = jest.fn();

// const LinkSetupExample = () => {
// 	const [link, setLink] = useState({});

// 	const handleSetLink = () => {
// 		setLink({
// 			title: 'Title link',
// 			type: 'Type of link',
// 			url: 'URL test',
// 		});
// 		setLinkCallback();
// 	};

// 	const handleRemove = () => {
// 		setLink({});
// 	};

// 	return (
// 		<LinkSetup
// 			link={link}
// 			handleSetLink={handleSetLink}
// 			handleRemove={handleRemove}
// 		/>
// 	);
// };

// describe('LinkSetup component', () => {
// 	it('should show SET LINK button', () => {
// 		render(<LinkSetupExample />);
// 		const setLinkButton = screen.getByText('SET LINK');

// 		expect(setLinkButton).toBeTruthy();
// 	});
// });

// describe('LinkSetup card content', () => {
// 	beforeEach(() => {
// 		const { getByText } = render(<LinkSetupExample />);
// 		const setLinkButton = getByText('SET LINK');
// 		fireEvent.click(setLinkButton);
// 	});

// 	it('should show the link details', () => {
// 		const linkTitle = screen.getByText('Title link');
// 		const linkType = screen.getByText('Type of link');
// 		const linkURL = screen.getByText('URL test');

// 		expect(linkTitle).toBeTruthy();
// 		expect(linkType).toBeTruthy();
// 		expect(linkURL).toBeTruthy();
// 	});
// });

// describe('LinkSetup callbacks', () => {
// 	beforeEach(() => {
// 		render(<LinkSetupExample />);
// 		const setLinkButton = screen.getByText('SET LINK');
// 		fireEvent.click(setLinkButton);
// 	});

// 	it('should trigger the Browse callback', () => {		
// 		const browseButton = screen.getByText('Browse');
// 		fireEvent.click(browseButton);

// 		expect(setLinkCallback).toHaveBeenCalled();
// 	});

// 	it('should trigger the remove callback and then display the SET LINK button', () =>{
// 		const remove = screen.getByText('Remove');
// 		fireEvent.click(remove);
// 		const setLinkButton = screen.getByText('SET LINK');

// 		expect(setLinkButton).toBeTruthy();
// 	})
// });
