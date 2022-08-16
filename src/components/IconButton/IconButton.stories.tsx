import * as React from "react";

// Material UI
import MoreVertIcon from "@mui/icons-material/MoreVert";
import HelpIcon from "@mui/icons-material/Help";

// Components
import IconButton from "./IconButton";

export default {
	title: "Components/IconButton",
	componentn: IconButton,
	argTypes: {
		icon: {//TODO: THIS IS NOT A VALID TYPE, CHANGE FOR STRINGS.
			options: ["MoreVertIcon", "HelpIcon"],
			control: "select",
		}
	}
};

const Template = (args) => (
	<>
		{args.icon === "MoreVertIcon" ?
			<p>More Icon</p>
			:
			<p>Help Icon</p>
		}
		<IconButton {...args} icon={args.icon === "MoreVertIcon" ? MoreVertIcon : HelpIcon} />
	</>
);

export const Playground = Template.bind({});
Template.args = {
	disabled: false,
	tooltipText: "This is the tooltip",
	handleClick: () => alert("Icon clicked"),
	icon: "MoreVertIcon"
}
