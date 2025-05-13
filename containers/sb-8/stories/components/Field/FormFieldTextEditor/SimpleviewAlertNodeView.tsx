import type { ReactElement } from "react";
import React from "react";
import { NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { TridentIcon } from "#mosaic/theme";
import styled from "styled-components";

const Wrapper = styled.div`
    margin: 10px 0 20px !important;
`;

const Heading = styled.div`
    align-items: end;
    display: flex;
    margin-bottom: 4px !important;
    margin-left: 16px !important;
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
`;

const Logo = styled(TridentIcon)`
    width: 28px !important;
    height: 28px !important;
    margin-right: 4px !important;
`;

const Content = styled.div`
    border-radius: 10px;
    border: 2px solid #00a4e4;
    padding: 0.5rem 1rem !important;
`;

export function SimpleviewAlertNodeView(): ReactElement {
	return (
		<NodeViewWrapper>
			<Wrapper>
				<Heading>
					<Logo />
					<Title contentEditable={false}>Important Message</Title>
				</Heading>
				<Content>
					<NodeViewContent />
				</Content>
			</Wrapper>
		</NodeViewWrapper>

	);
}
