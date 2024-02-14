import * as React from "react";
import { memo, ReactElement } from "react";

// Components
import Button from "@root/components/Button";

// Styles
import {
	AddressTitle,
	ButtonsWrapper,
	StyledAddressCard,
} from "./AddressCard.styled";

// Types
import { AddressCardProps } from "../AddressTypes";
import { joinAnd } from "@root/utils/string";

const buttonMuiAttrs = {
	disableRipple: true,
};

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, onEdit, onRemoveAddress, disabled } = props;

	const typesLabels = address.types.map(type => type.label);

	return (
		<StyledAddressCard data-testid="address-card-test">
			<AddressTitle>
				{`${joinAnd(typesLabels)} Address`}
			</AddressTitle>
			<span>{address?.address1}</span>
			{address?.address2 && <span>{address?.address2}</span>}
			{address?.address3 && <span>{address?.address3}</span>}
			<span>
				{`${address?.city}, ${address?.state?.label ? address.state.label : ""} ${address?.postalCode}`}
			</span>
			<span>{address?.country?.label}</span>
			<ButtonsWrapper>
				<Button
					label="Edit"
					color="teal"
					variant="text"
					disabled={disabled}
					muiAttrs={buttonMuiAttrs}
					onClick={() => onEdit(address)}
				>
				</Button>
				<Button
					color="red"
					variant="text"
					muiAttrs={buttonMuiAttrs}
					disabled={disabled}
					label="Remove"
					onClick={() => onRemoveAddress(address)}
				>
				</Button>
			</ButtonsWrapper>
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
