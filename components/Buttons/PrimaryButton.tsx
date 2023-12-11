import { cn } from "$/utils/classNames";

const PrimaryButton = ({
	children,
	className,
	isDisabled,
}: {
	children: React.ReactNode;
	className?: string;
	isDisabled?: boolean;
}) => {
	return (
		<button
			className={cn(
				" bg-primary border border-primary text-white  hover:bg-transparent hover:text-primary duration-500  px-5 py-4 text-base  font-semibold rounded-xl shadow-button",
				className
			)}
			disabled={isDisabled}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;

