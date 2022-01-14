import * as React from 'react';
import { memo, ReactElement } from 'react';
import { LinkSetupDef } from './LinkSetupTypes';
import { MosaicFieldProps } from '@root/components/Field';
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

const LinkSetup = (props: MosaicFieldProps<LinkSetupDef>): ReactElement => {
	const {
		fieldDef,
		value,
	} = props;

	const handleClick = (e, cb) => {
		e.preventDefault();
		cb();
	}

	return (
		<>
			{isEmpty(value) ? (
				<Button disabled={fieldDef?.disabled} buttonType='secondary' onClick={(e) => handleClick(e, fieldDef?.inputSettings?.handleSetLink)}>
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
						<Button disabled={fieldDef?.disabled} buttonType='blueText' onClick={(e) => handleClick(e, fieldDef?.inputSettings?.handleSetLink)}>
							Browse
						</Button>
						<Button disabled={fieldDef?.disabled} buttonType='redText' onClick={(e) => handleClick(e, fieldDef?.inputSettings?.handleRemove)}>
							Remove
						</Button>
					</ButtonsWrapper>
				</LinkCard>
			)}
		</>
	);
};

export default memo(LinkSetup);
