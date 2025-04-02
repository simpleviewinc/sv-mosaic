import{s as n,c as i}from"./theme-BSoCkN4E.js";const t=250,o=i`
	from {
	  	right: -75vw;
	}
	to {
	  	right: 0vw;
	}
  `,s=i`
	from {
	  	right: 0vw;
	}

	to {
	  	right: -75vw;
	}
  `,a=i`
	from {
	  	right: 0vw;
	}

	to {
	  	right: 25vw;
	}
  `,r=i`
	from {
	  	right: 25vw;
	}

	to {
	  	right: 0vw;
	}
  `,m=n.div`
	width: 75%;
	transform: none !important;
	transition: initial !important;
	right: -75vw;

	&.opening {
		animation: ${t}ms ease-out 0s 1 ${o};
		right: 0;
	}

	&.open {
	  	right: 0;
	}

	&.stacking {
		animation: ${t}ms ease-out 0s 1 ${a};
		right: 25vw;
	}

	&.stacked {
		right: 25vw;
	}

	&.unstacking {
		animation: ${t}ms ease-out 0s 1 ${r};
		right: 0vw;
	}

	&.closing {
		animation: ${t}ms ease-out 0s 1 ${s};
		right: -75vw;
	}
`;export{t as A,m as P};
