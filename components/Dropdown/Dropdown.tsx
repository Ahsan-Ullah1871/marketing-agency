"use client";

import { Menu, Transition } from "@headlessui/react";
import { Fragment, ReactNode, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { cn } from "$/utils/classNames";

export default function Dropdown({
	children,
	styles,
	button_title = "Click here",
}: {
	children: ReactNode;
	styles?: {
		component_style: string;
		button_style: string;
		items_section_style: string;
	};
	button_title: string;
}) {
	return (
		<Menu
			as="div"
			className={cn(
				"relative inline-block text-left",
				styles?.component_style
			)}
		>
			<Menu.Button
				className={cn(
					" bg-primary border border-primary text-white  hover:bg-transparent hover:text-primary duration-500  px-5 py-4 text-base  font-semibold rounded-xl shadow-button flex items-center  justify-start gap-2",
					styles?.button_style
				)}
			>
				{button_title}
				{
					<ChevronDownIcon
						className="  h-5 w-5 text-violet-200 hover:text-violet-100"
						aria-hidden="true"
					/>
				}
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items
					className={cn(
						"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",
						styles?.items_section_style
					)}
				>
					{children}
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

