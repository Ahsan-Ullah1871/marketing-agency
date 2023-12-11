import Image from "next/image";
import logo from "$/assets/header/logo.png";
import Link from "next/link";
import PrimaryButton from "$/components/Buttons/PrimaryButton";
import PrimaryLink from "$/components/Links/PrimaryLink";
import { HeaderMenus } from "$/data/Header/Header";
import Dropdown from "$/components/Dropdown/Dropdown";
import Modal from "$/components/Modal/Modal";
import { Bars3BottomRightIcon } from "@heroicons/react/20/solid";

const Header = () => {
	return (
		<div className=" max-w-[1260px] w-full mx-auto bg-white px-8 py-5 rounded-b-xl flex items-center justify-between  shadow-header">
			{/* logo part */}
			<Image
				src={logo}
				alt="logo"
			/>

			{/* Links */}
			<div className=" hidden md:flex items-center justify-center gap-11">
				{HeaderMenus.map((menu) => {
					return (
						<PrimaryLink
							key={menu.url}
							url={menu.url}
						>
							{menu.title}
						</PrimaryLink>
					);
				})}
			</div>

			{/* Buttons */}
			<div className="hidden md:flex items-center justify-end gap-6">
				<PrimaryLink
					url="/signin"
					className=""
				>
					Sign IN
				</PrimaryLink>
				<PrimaryButton>Get started</PrimaryButton>
			</div>

			{/*  */}
			<div className=" md:hidden">
				<Modal
					button_icon={
						<Bars3BottomRightIcon
							className="  h-6 w-6 text-primary hover:text-violet-100"
							aria-hidden="true"
						/>
					}
					styles={{
						button_style:
							"bg-transparent border-0 p-0",
						modal_styles:
							" right-0 top-0 h-full max-w-sm w-full ",
						modal_component:
							"h-full rounded-none rounded-l-lg  w-full ",
					}}
				>
					{/* Buttons */}
					<div className=" pl-6 flex items-center justify-between gap-6">
						<PrimaryLink
							url="/signin"
							className=""
						>
							Sign IN
						</PrimaryLink>
						<PrimaryButton>
							Get started
						</PrimaryButton>
					</div>
					<div className="  w-full flex flex-col gap-4 p-6 bg-white ">
						{HeaderMenus.map((menu) => {
							return (
								<PrimaryLink
									key={menu.url}
									url={menu.url}
								>
									{menu.title}
								</PrimaryLink>
							);
						})}
					</div>
				</Modal>
			</div>
		</div>
	);
};

export default Header;

