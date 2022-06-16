import * as React from "react";
import { ReactElement } from "react";
import { SummaryPageTopComponentTypes } from ".";
import { 
	SumaryPageTopComponentStyle,
	Container,
	Row,
	Title,
	ContainerContext,
	ContextItem,
} from "./SummaryPageTopComponent.styled";

import StarBorder from "@mui/icons-material/StarBorderRounded";
import Image from "../internal/Image";
import Button from "../Button";
import Public from "@mui/icons-material/Public";

const SumaryPageTopComponent = (props: SummaryPageTopComponentTypes): ReactElement => {
	return (
		<SumaryPageTopComponentStyle>
			<Image
				className="img_rounded"
				src="https://res.cloudinary.com/simpleview/image/upload/c_fill,h_75,w_75/v1436900668/clients/grandrapids/Covered%20bridge%20in%20Ada_19c2ee0d-a43b-4aab-b102-65a0db32288b.jpg"
			/>
			<Container>
				<Row>
					<Title>
                        Laudantium est optio voluptas rerum volupts mowwwwwdq dqw wefa fa f ewf awefLaudantium est optio voluptas rerum volupts mowwwwwdq dqw wefa fa f ewf awef
					</Title>
					<StarBorder />
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
				</Row>
			</Container>
		</SumaryPageTopComponentStyle>
	);
};

export default SumaryPageTopComponent;