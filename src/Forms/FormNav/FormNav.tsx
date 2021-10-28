import * as React from 'react';
import { memo, useState, useRef, ReactElement } from 'react';
import {
  FormNavWrapper,
  IconWrapper,
  LinksWrapper,
  NavItems,
  Row,
} from './FormNav.styled';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// Types
import { FormNavProps } from './FormNavTypes';

const FormNav = (props: FormNavProps): ReactElement => {
  const { sections } = props;
  const navRef = useRef(null);

  // State variables
  const [selectedTab, setSelectedTab] = useState(0);
  const [scrollX, setscrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const scrollCheck = () => {
    setscrollX(navRef.current.scrollLeft);
    if (
      Math.floor(navRef.current.scrollWidth - navRef.current.scrollLeft) <=
      navRef.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  /* This func handles the scrolling by incrementing or decrementing
   the scrollLeft property */
  const handleNav = (direction) => {
    if (direction === 'left') {
      navRef ? (navRef.current.scrollLeft -= 200) : null;
    } else {
      navRef ? (navRef.current.scrollLeft += 200) : null;
    }
  };

  const handleClick = (e, newActiveTab) => {
		e.preventDefault();
    setSelectedTab(newActiveTab);
  };

  return (
    <Row>
      <FormNavWrapper>
        {scrollX !== 0 && (
          <IconWrapper>
            <ChevronLeftIcon onClick={() => handleNav('left')} />
          </IconWrapper>
        )}
        <NavItems ref={navRef} onScroll={scrollCheck}>
          {sections.map((section, idx) => (
            <LinksWrapper
              idx={idx}
              selectedTabIdx={selectedTab}
              key={`${section.name}-${section.id}`}
              onClick={(e) => handleClick(e, idx)}
            >
              <a href={`#${section.id}`}>{section.name}</a>
            </LinksWrapper>
          ))}
        </NavItems>
				{!scrollEnd && (
					<IconWrapper>
          <ChevronRightIcon onClick={() => handleNav('right')} />
        </IconWrapper>
				)}
      </FormNavWrapper>
    </Row>
  );
};

export default memo(FormNav);
