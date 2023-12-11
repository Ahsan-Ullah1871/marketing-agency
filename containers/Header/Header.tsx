import Image from "next/image";
import logo from "$/assets/header/logo.png";
import Link from "next/link";
import PrimaryButton from "$/components/Buttons/PrimaryButton";
import PrimaryLink from "$/components/Links/PrimaryLink";
import { HeaderMenus } from "$/data/Header/Header";

const Header = () => {
	return (
		<div className=" max-w-[1260px] mx-auto bg-white px-8 py-5 rounded-b-xl flex items-center justify-between  shadow-header">
			{/* logo part */}
			<Image
				src={logo}
				alt="logo"
			/>

			{/* Links */}
			<div className="flex items-center justify-center gap-11">
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
			<div className="flex items-center justify-end gap-6">
				<PrimaryLink
					url="/signin"
					className=""
				>
					Sign IN
				</PrimaryLink>
				<PrimaryButton>Get started</PrimaryButton>
			</div>
		</div>
	);
};

export default Header;

