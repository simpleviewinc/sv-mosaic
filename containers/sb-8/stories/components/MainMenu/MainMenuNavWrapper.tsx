import * as React from "react";
import type { ReactElement, MouseEventHandler } from "react";
import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import theme from "#mosaic/theme";

import MenuIcon from "@mui/icons-material/Menu";

import { MainMenu } from "#mosaic/components/MainMenu";
import type { MainMenuProps, MainMenuItemRootDef } from "#mosaic/components/MainMenu";
import type { TransientProps } from "#mosaic/types";

import useMediaQuery from "@mui/material/useMediaQuery";

const loremIpsum = `Lorem ipsum odor amet, consectetuer adipiscing elit. Pellentesque placerat praesent dignissim iaculis eget fusce. Aliquet praesent quis purus id iaculis est himenaeos. Eu mi luctus pellentesque id magnis natoque placerat. Aenean erat semper dolor, luctus libero tellus convallis. Parturient eros nisi feugiat malesuada augue hendrerit nulla.

Venenatis pharetra taciti aptent pretium et. Habitasse id egestas platea eu; himenaeos ex nec gravida. Suspendisse habitasse eget varius neque; taciti sociosqu sem auctor. Arcu justo odio proin cursus tempus sem. Ac viverra inceptos lacinia congue lectus. Iaculis litora tempor eget non quam euismod nascetur.

Fringilla ultrices erat convallis lobortis augue ullamcorper amet. Ac lobortis taciti facilisis proin duis tortor elit. Taciti viverra nostra hac dapibus himenaeos ac. Etiam faucibus tortor praesent sollicitudin penatibus vulputate ipsum nullam. Suscipit nostra penatibus venenatis pulvinar ac. Erat massa commodo elit nulla tellus lectus sollicitudin. Cubilia fames potenti lacus posuere; tortor fusce! Sagittis pellentesque at class pulvinar vivamus; justo hac habitant.

Diam vitae consequat est nullam vitae proin rutrum porta. Per cubilia ante tempor; sollicitudin aenean platea neque purus. Suspendisse hendrerit ultricies finibus magnis lacinia natoque fames. Conubia neque felis torquent iaculis diam eros. Massa sit imperdiet dictum, cubilia orci adipiscing. Quisque quam commodo elementum, proin duis sit?

Interdum ante cursus iaculis amet dui cubilia; arcu est. Vel vivamus potenti dui vivamus nulla egestas rhoncus amet neque. Commodo ex dapibus a; odio conubia quisque magnis. Ornare massa quam volutpat euismod convallis commodo netus rhoncus. Mus magnis praesent sem integer vivamus maecenas donec. Ultricies dui vivamus viverra pretium eros parturient parturient non. Torquent neque in sociosqu adipiscing, vitae montes. Lacinia metus laoreet ante nunc orci.`;

const StyledTopBar = styled.div`
	flex: 0 0 auto;
	background: ${theme.color.black};
	color: white;
	padding: 6px 16px;
	display: flex;
	align-items: center;
	min-height: 40px;
	box-sizing: border-box;

	& > .menuButton {
		margin-right: 12px;
		cursor: pointer;
		display: flex;
		align-items: center;
	}
	& > .logo {
		max-height: 20px;
	}
`;

const FakeTopBar = function(props: { variant: string; openNav : MouseEventHandler }): ReactElement {
	const isMobile = Math.max(window.innerHeight, window.innerWidth) < 1024;
	const variant = isMobile ? "mobile" : props.variant;

	return (
		<StyledTopBar>
			{
				["hidden", "mobile"].includes(variant) && (
					<span title="Open Navigation" className="menuButton">
						<MenuIcon onClick={props.openNav} />
					</span>
				)
			}
			<img src="https://auth.simpleviewinc.com/static_shared/simpleview_reverse.png" className="logo" />
		</StyledTopBar>
	);
};

const AppDiv = styled.div<TransientProps<NavWrapperProps, "onlyContent">>`
	height: 100%;
	display: flex;
	flex-direction: column;

	& > .main {
		flex: 1 1 0;
		overflow: hidden;
		display: flex;
	}

	& > .main > .left {
		flex: 0 0 auto;
		overflow-y: auto;
	}

	& > .main > .content {
		padding: ${({ $onlyContent }) => !$onlyContent ? "16px" : "0px"};
		flex: 1 1 0;
		overflow-y: auto;
	}

	& h1 {
		margin-top: 0px;
	}
`;

const localKey = "sv-mosaic-left-nav-variant";

// iOS11-12 has a bug where events don't bubble up unless there is a listener of that type in the parent chain before the body.
// This ensures that the outer wrapper has a click listener, allowing the LeftNav to properly close on a click away.
// https://stackoverflow.com/a/39712411/435223
const noop = () => undefined;

interface NavWrapperProps {
	children?: ReactElement;
	items : MainMenuItemRootDef[];
	onlyContent?: boolean;
	active?: string;
	mobileBreakpoint?: number;
}

export const MainMenuNavWrapper = function(props: NavWrapperProps): ReactElement {
	const [state, setState] = useState({
		open : false,
		collapsed: false,
		variant : (localStorage.getItem(localKey) ?? "full") as MainMenuProps["variant"],
		label : props.items[0]?.label || "home",
		name : props.items[0]?.name || "Home",
	});

	const mobileBreakpointNum = Number(props.mobileBreakpoint);
	const mobileBreakpoint = mobileBreakpointNum !== mobileBreakpointNum ? 1024 : mobileBreakpointNum;
	const isDesktop = useMediaQuery(`(min-width: ${mobileBreakpoint}px)`, { defaultMatches: true });
	const variant = !isDesktop ? "mobile" : state.variant;

	const onClick = function() {
		setState({
			...state,
			open : true,
		});
	};

	const onClose = function() {
		setState({
			...state,
			open : false,
		});
	};

	const onNav: MainMenuProps["onNav"] = function({ item }) {
		setState({
			...state,
			open : false,
			label : item.label,
			name : item.name,
		});
	};

	const onVariantChange = function(variant) {
		localStorage.setItem("sv-mosaic-left-nav-variant", variant);

		setState({
			...state,
			variant,
			open : false,
		});
	};

	// on item change scroll to the top
	const contentRef = useRef(null);
	useEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollTo(0, 0);
		}
	}, [state.label, state.name]);

	return (
		<AppDiv onClick={noop} $onlyContent={props.onlyContent}>
			<FakeTopBar variant={variant} openNav={onClick} />
			<div className="main">
				<MainMenu
					active={state.name}
					open={state.open}
					items={props.items}
					variant={variant}
					onClose={onClose}
					onNav={onNav}
					onVariantChange={onVariantChange}
					zIndex={1101}
				/>
				<div className="content" ref={contentRef}>
					{!props.onlyContent && (
						<>
							<h1>{state.label}</h1>
							<h2>{state.name}</h2>
						</>
					)}

					{props.children ? props.children : loremIpsum}
				</div>
			</div>
		</AppDiv>
	);
};
