import React, { ReactElement, useCallback, useMemo } from "react";
import { DrawerWrapper, MediaGalleryChecked, MediaGalleryImage, MediaGalleryItem } from "./MediaGalleryDrawer.styled";
import { FieldDef, TextEditorOnImageParams } from "@root/components/Field";
import Grid from "@mui/material/Grid";
import Form, { useForm } from "@root/components/Form";
import FieldWrapper from "@root/components/FieldWrapper";
import { ButtonProps } from "@root/components/Button";
import Check from "@mui/icons-material/Check";

type MediaGalleryDrawerProps = Partial<TextEditorOnImageParams> & {
    onClose?: () => void;
}

const imageUrls = [
    "https://res.cloudinary.com/simpleview/image/upload/v1434723041/clients/grandrapids/CVB-Runners-Beach-852_2bbfa8b9-d45a-4590-8571-b6f06d39f9b9.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1434925582/clients/grandrapids/John%20Ball%20Zoo%2020_70aa697e-f0a8-4741-8497-9b2baad425b0.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1434726973/clients/grandrapids/GRAM_05f44299-99aa-478c-9325-ec0302767c62.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1435247801/clients/grandrapids/Aerial%20of%20Grand%20Rapids_e617e364-0615-43c6-8344-700c91b2ce6f.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1435689432/clients/grandrapids/Motorcoach%2C%20Lubbers%20Family%20Farm%20Group%20Tour_1e8a5b67-c6ff-4cdb-8c48-a3536fe0e8d0.jpg",
    "https://res.cloudinary.com/simpleview/image/upload/v1434724739/clients/grandrapids/Ex%20Grand%20Rapids_Founders8670_ac26e944-36fb-47e1-946b-ce1f7380820a.jpg",
];

function ImageSelectionField(props: any) {
	const {
		fieldDef,
		value,
		error,
		methods,
		inputRef,
		disabled,
		skeleton,
        onChange,
	} = props;
	const { name } = fieldDef;

    return (
		<FieldWrapper
			fieldDef={fieldDef}
			value={value}
			error={error}
			id={name}
			methods={methods}
			inputRef={inputRef}
			disabled={disabled}
			skeleton={skeleton}
		>
            <Grid container spacing={2}>
                {imageUrls.map(url => (
                    <Grid key={url} item xs={4}>
                        <MediaGalleryItem>
                            <MediaGalleryImage
                                src={url}
                                onClick={() => onChange(url)}
                                $selected={value === url}
                            />
                            {value === url && (
                                <MediaGalleryChecked>
                                    <Check />
                                </MediaGalleryChecked>
                            )}
                        </MediaGalleryItem>
                    </Grid>
                ))}
            </Grid>
        </FieldWrapper>
    )
}

export function MediaGalleryDrawer({ onClose, updateImage, alt, src }: MediaGalleryDrawerProps): ReactElement {
    const controller = useForm();
    const { handleSubmit } = controller;

    const fields: FieldDef[] = useMemo(() => [
        {
            name: "alt",
            type: "text",
            label: "Alternative Text"
        },
        {
            name: "src",
            type: ImageSelectionField,
            label: "Image Source",
            required: true,
        },
    ], []);

    const buttons: ButtonProps[] = useMemo(() => [
        {
            label: "Cancel",
            onClick: onClose,
            color: "gray",
            variant: "outlined",
        },
        {
            label: "Save",
            type: "submit",
            color: "yellow",
            variant: "contained",
        },
    ], [onClose]);

    const onSubmit = handleSubmit(({ data }) => {
        if (!updateImage) {
            throw new Error("Update image callback was not provided");
        }

        updateImage({
            src: data.src,
            alt: data.alt,
        });
    });

    const getFormValues = useCallback(async () => {
        return {
            alt,
            src
        }
    }, [alt, src]);

    return (
        <DrawerWrapper>
            <Form
                title="Select Image"
                fields={fields}
                onBack={onClose}
                buttons={buttons}
                onSubmit={onSubmit}
                getFormValues={getFormValues}
                {...controller}
            />
        </DrawerWrapper>
    )
}
