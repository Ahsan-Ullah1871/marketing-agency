import { cn } from "$/utils/classNames";
import React from "react";

const Divider = ({ className }: { className: string }) => {
	return <div className={cn("w-full h-1", className)} />;
};

export default Divider;
