import * as React from 'react';
import { memo, ReactElement } from 'react';
import { LinkSetupProps } from './LinkSetupTypes';
import { isEmpty } from 'lodash';

// Components
import Button from '@root/forms/Button';
import {
	ButtonsWrapper,
	LinkCard,
	LinkInfoContainer,
	LinkProperty,
	LinkValue,
	StyledAnchor,
} from './LinkSetup.styled';

const LinkSetup = (props: LinkSetupProps): ReactElement => {
	const { disabled, link, handleRemove, handleSetLink } = props;

	return (
		<>
			{isEmpty(link) ? (
				<Button disabled={disabled} buttonType='secondary' onClick={handleSetLink}>
					SET LINK
				</Button>
			) : (
				<LinkCard>
					<LinkInfoContainer>
						<LinkProperty>Title</LinkProperty>
						<LinkValue>{link.title}</LinkValue>
						<LinkProperty>Type</LinkProperty>
						<LinkValue>{link.type}</LinkValue>
						<LinkProperty>URL</LinkProperty>
						<StyledAnchor href={link.url}>{link.url}</StyledAnchor>
					</LinkInfoContainer>
					<ButtonsWrapper>
						<Button disabled={disabled} buttonType='blueText' onClick={handleSetLink}>
							Browse
						</Button>
						<Button disabled={disabled} buttonType='redText' onClick={handleRemove}>
							Remove
						</Button>
					</ButtonsWrapper>
				</LinkCard>
			)}
		</>
	);
};

export default memo(LinkSetup);
