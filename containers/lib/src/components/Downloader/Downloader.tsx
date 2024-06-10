import React, { useCallback, useState, ReactElement } from "react";
import CloudDownload from "@mui/icons-material/CloudDownload";
import { DownloaderProps } from "./DownloaderTypes";
import Button from "../Button";
import Spinner from "../Spinner";

const Downloader = ({ url, ...props }: DownloaderProps): ReactElement => {
	const [loading, setLoading] = useState(false);

	const startDownload = useCallback(() => {
		setLoading(true);

		const iframe = document.createElement("iframe");

		const finish = () => {
			document.body.removeChild(iframe);
			setLoading(false);
		};

		iframe.onload = finish;
		iframe.onerror = finish;
		iframe.setAttribute("style", "display: none");
		iframe.src = url;

		document.body.appendChild(iframe);
	}, []);

	return loading ? (
		<Spinner />
	) : (
		<Button {...props} mIcon={CloudDownload} onClick={startDownload} />
	);
};

export default Downloader;
