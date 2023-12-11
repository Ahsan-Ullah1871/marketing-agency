import Divider from "$/components/Divider/Divider";
import PrimaryLink from "$/components/Links/PrimaryLink";
import React from "react";

const FooterLine = () => {
	return (
		<div className=" bg-primary_deep py-5 px-6 ">
			<div className=" max-w-body mx-auto  flex items-center justify-between">
				{/* Title */}
				<p className="text-white text-sm  font-medium">
					All rights reserved by © Besnik creative 2024
				</p>

				{/* Links */}
				<div className="flex items-center justify-end  gap-4">
					<PrimaryLink
						url="/"
						className="text-white text-sm font-medium"
					>
						Privacy & Policy
					</PrimaryLink>
					<Divider className=" bg-white w-0.5 h-4 rounded-sm" />
					<PrimaryLink
						url="/"
						className="text-white text-sm font-medium"
					>
						Privacy & Policy
					</PrimaryLink>
				</div>
			</div>
		</div>
	);
};

export default FooterLine;

