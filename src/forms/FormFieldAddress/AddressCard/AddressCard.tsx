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

const AddressCard = (props: AddressCardProps): ReactElement => {
	const { address, addressIndex, onEdit, onRemoveAddress, disabled } = props;

	const typesLabels = address.types.map(type => type.label);

	return (
		<StyledAddressCard data-testid="address-card-test">
			<AddressTitle>
				{`${typesLabels?.join(", ")} Address`}
			</AddressTitle>
			<span>{address?.address1}</span>
			{address?.address2 && <span>{address?.address2}</span>}
			{address?.address3 && <span>{address?.address3}</span>}
			<span>
				{`${address?.city}, ${address?.state?.label ? address.state.label : ""} ${address?.postalCode}`}
			</span>
			<span>{address?.country?.label}</span>
			{!disabled && (
				<ButtonsWrapper>
					<Button
						label="Edit"
						color="teal"
						variant="text"
						disabled={disabled}
						muiAttrs={{ disableRipple: true }}
						onClick={() => onEdit(address, addressIndex)}
					></Button>
					<Button
						color="red"
						variant="text"
						muiAttrs={{ disableRipple: true }}
						disabled={disabled}
						label="Remove"
						onClick={() => onRemoveAddress(addressIndex)}
					></Button>
				</ButtonsWrapper>
			)}
		</StyledAddressCard>
	);
};

export default memo(AddressCard);
