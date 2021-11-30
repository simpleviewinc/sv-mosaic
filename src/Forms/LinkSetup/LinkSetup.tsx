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
	const {
		disabled,
		value,
		inputSettings
	} = props;

	const handleClick = (e, cb) => {
		e.preventDefault();
		cb();
	}

	return (
		<>
			{isEmpty(value) ? (
				<Button disabled={disabled} buttonType='secondary' onClick={(e) => handleClick(e, inputSettings?.handleSetLink)}>
					SET LINK
				</Button>
			) : (
				<LinkCard>
					<LinkInfoContainer>
						<LinkProperty>Title</LinkProperty>
						<LinkValue>{value.title}</LinkValue>
						<LinkProperty>Type</LinkProperty>
						<LinkValue>{value.type}</LinkValue>
						<LinkProperty>URL</LinkProperty>
						<StyledAnchor href={value.url}>{value.url}</StyledAnchor>
					</LinkInfoContainer>
					<ButtonsWrapper>
						<Button disabled={disabled} buttonType='blueText' onClick={(e) => handleClick(e, inputSettings?.handleSetLink)}>
							Browse
						</Button>
						<Button disabled={disabled} buttonType='redText' onClick={(e) => handleClick(e, inputSettings?.handleRemove)}>
							Remove
						</Button>
					</ButtonsWrapper>
				</LinkCard>
			)}
		</>
	);
};

export default memo(LinkSetup);
