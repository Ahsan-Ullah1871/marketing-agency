import { cn } from "$/utils/classNames";
import Link from "next/link";
import { ReactNode } from "react";

const PrimaryLink = ({
	children,
	url,
	className,
}: {
	children: ReactNode;
	url: string;
	className?: string;
}) => {
	return (
		<Link
			href={url}
			className={cn(
				" relative text-c_gray hover:text-primary  text-base font-medium after:w-4/6 after:h-0.5 after:bg-transparent after:absolute after:-bottom-2 after:left-0 after:right-0 after:rounded-md hover:after:bg-primary transition-all duration-500 after:duration-500 ",
				className
			)}
		>
			{children}
		</Link>
	);
};

export default PrimaryLink;

