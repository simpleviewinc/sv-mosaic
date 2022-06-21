import * as React from "react";
import { ReactElement, useState } from "react";
import { SummaryPageTopComponentTypes } from ".";
import { 
	SumaryPageTopComponentStyle,
	Container,
	Row,
	Title,
	ContainerContext,
	ContextItem,
	ContainerTitle,
	ContainerMainActions,
	ContainerFilterSingleSelect
} from "./SummaryPageTopComponent.styled";

import StarBorder from "@mui/icons-material/StarBorderRounded";
import Image from "../internal/Image";
import Button from "../Button";
import Public from "@mui/icons-material/Public";
import Mail from "@mui/icons-material/Mail";
import Edit from "@mui/icons-material/Edit";
import MoreVert from "@mui/icons-material/MoreVert";
import FilterSingleSelect from "../FilterSingleSelect";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {

	// Color for filterSingleSelect component
	const color = "teal"

	const [state, setState] = useState({
		value : props?.defaultValue?.value || undefined
	});

	const required = false;

	const options = [
		{ label : "Option A", value : "a" },
		{ label : "Option B", value : "b" },
		{ label : "Option C", value : "c" },
		{ label : "Option D", value : "d" }
	]

	const onChange = function(data) {
		setState(data);
	}

	const onRemove = () => undefined;

	const getOptions = function() {
		return {
			docs : options,
			hasMore : false
		}
	}

	const getSelected = function(id) {
		return options.filter(val => val.value === id)[0];
	}

	return (
		<SumaryPageTopComponentStyle>
			<Image
				className="img_rounded"
				src="https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"
			/>
			<Container>
				<Row>
					<ContainerTitle>
						<Title>
							Laudantium est optio voluptas Laudantium est optio voluptas Laudantium est optio voluptas Laudantium est optio voluptas
						</Title>
						<StarBorder />
					</ContainerTitle>
					<ContainerMainActions>
						<ContextItem>
							<Button 
								attrs={{smallText: true}} 
								color="black" 
								variant="text" 
								label="Button" 
								mIcon={Mail} 
								onClick={() => alert("Click")}
							></Button>
						</ContextItem>
						<ContextItem>
							<Button 
								attrs={{smallText: true}} 
								color="black" 
								variant="text" 
								label="Button" 
								mIcon={Mail} 
								onClick={() => alert("Click")}
							></Button>
						</ContextItem>
						<ContextItem>
							<Button 
								attrs={{smallText: true}} 
								color="black" 
								variant="text" 
								label="Edit" 
								mIcon={Edit} 
								onClick={() => alert("Click")}
							></Button>
						</ContextItem>
						<Button
							color="black" 
							variant="icon" 
							label="Edit" 
							mIcon={MoreVert} 
							onClick={() => alert("Click")}
						></Button>
					</ContainerMainActions>
				</Row>
				<Row>
					<ContainerContext>
						<ContextItem>
							<p>Information</p>
						</ContextItem>
						<ContextItem>
							<p>Example of a very very very long text information…</p>
						</ContextItem>
						<ContextItem>
							<p>Information</p>
						</ContextItem>
						<ContextItem>
							<Button 
								attrs={{linkButton: true}} 
								color="black" 
								variant="text" 
								label="Text Link" 
								mIcon={Public} 
								onClick={()=> console.log("click")}
								href="https://www.google.com/"
							>
							</Button>
						</ContextItem>
						<ContextItem>
							<Button 
								attrs={{linkButton: true}} 
								color="black" 
								variant="text" 
								label="Text Link" 
								mIcon={Public} 
								onClick={()=> console.log("click")}
								href="https://www.google.com/"
							>
							</Button>
						</ContextItem>
					</ContainerContext>
					<ContainerFilterSingleSelect>
						<FilterSingleSelect
							label="Testing"
							type="primary"
							data={state}
							args={{ getOptions, getSelected, required, color }}
							onRemove={onRemove}
							onChange={onChange}
						/>
					</ContainerFilterSingleSelect>
				</Row>
			</Container>
		</SumaryPageTopComponentStyle>
	);
};

export default SumaryPageTopComponent;