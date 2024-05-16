import * as React from "react";
import { useState, useEffect, useMemo, useRef, ReactElement, MouseEventHandler } from "react";
import styled from "styled-components";
import { LoremIpsum } from "react-lorem-ipsum";
import theme from "@root/theme";

import MenuIcon from "@mui/icons-material/Menu";

import {
	LeftNav,
	LeftNavItemRootDef,
	LeftNavProps,
	TransientProps,
} from "../../";
import { useStoryBookCssReset } from "../../utils/reactTools";
import useMediaQuery from "@mui/material/useMediaQuery";

const StyledTopBar = styled.div`
	flex: 0 0 auto;
	background: ${theme.newColors.almostBlack["100"]};
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
	items : LeftNavItemRootDef[];
	onlyContent?: boolean;
}

export const NavWrapper = function(props: NavWrapperProps): ReactElement {
	useStoryBookCssReset();

	const [state, setState] = useState({
		open : false,
		variant : (localStorage.getItem(localKey) ?? "full") as LeftNavProps["variant"],
		label : props.items[0]?.label || "home",
		name : props.items[0]?.name || "Home",
	});

	const isDesktop = useMediaQuery("(min-width: 1024px)", { defaultMatches: true });
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

	const onNav: LeftNavProps["onNav"] = function({ item }) {
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

	const lorem = useMemo(() => {
		return <LoremIpsum p={10} />;
	}, []);

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
				<div className="left">
					<LeftNav
						active={state.name}
						open={state.open}
						items={props.items}
						variant={variant}
						onClose={onClose}
						onNav={onNav}
						onVariantChange={onVariantChange}
					/>
				</div>
				<div className="content" ref={contentRef}>
					{!props.onlyContent && (
						<>
							<h1>{state.label}</h1>
							<h2>{state.name}</h2>
						</>
					)}

					{props.children ? props.children : lorem}
				</div>
			</div>
		</AppDiv>
	);
};
