import React from 'react';
import Sticky from 'react-sticky-el';
import styled from "styled-components";

function StickyWrapper(props){
	return(
		<Sticky className="StickyWrapper" style={ {zIndex : 10} } scrollElement={`[data-scroll-element-id='${props.scrollElement}']`}>
			{props.children}
		</Sticky>
	);
}

export default StickyWrapper;