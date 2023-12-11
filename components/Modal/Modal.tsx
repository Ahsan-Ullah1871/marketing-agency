"use client";

import { cn } from "$/utils/classNames";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useState } from "react";

export default function Modal({
	children,
	button_title,
	button_icon,
	styles,
}: {
	children: ReactNode;
	button_icon?: ReactNode;
	button_title?: string;
	styles?: {
		button_style?: string;
		modal_styles?: string;
		modal_component?: string;
	};
}) {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<button
				type="button"
				onClick={openModal}
				className={cn(
					" bg-primary border border-primary text-white  hover:bg-transparent hover:text-primary duration-500  px-5 py-4 text-base  font-semibold rounded-xl shadow-button flex items-center  justify-start gap-2",
					styles?.button_style
				)}
			>
				{button_title && button_title}
				{button_icon && button_icon}
			</button>

			<Transition
				appear
				show={isOpen}
				as={Fragment}
			>
				<Dialog
					as="div"
					className="relative z-10"
					onClose={closeModal}
				>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div
						className={cn(
							"fixed  overflow-y-auto",
							styles?.modal_styles
						)}
					>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel
								className={cn(
									"w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",
									styles?.modal_component
								)}
							>
								{children}
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}

