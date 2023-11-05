import { useEffect, useState } from "react";
import logo from "../../../assets/Navbar/1.jpg";

import { NavbarData } from "../../../Data";

// bg-[#010ed0]

const Navbar = () => {
	let [visible, setVisible] = useState(true);
	let scrollValue = window.scrollY;

	const navFinction = () => {
		if (window.scrollY > scrollValue) {
			setVisible(true);
		} else {
			setVisible(false);
		}

		scrollValue = window.scrollY;
	};

	useEffect(() => {
		window.addEventListener("scroll", navFinction);
		return () => window.removeEventListener("scroll", navFinction);
	});

	const [pannelTwo, setPannelTwo] = useState(false);
	const [pannelThree, setPannelThree] = useState(false);

	return (
		<div className={`sticky bg-white ${visible ? "top-0 shadow-sm" : "top-[-20%]"} z-[10000] transition-all duration-500`}>
			<nav className='xl:px-32 px-4 flex justify-between items-center border-b py-2'>
				<img src={logo} alt='' className='w-44' />

				<div className='flex gap-10 relative font-semibold text-md text-gray-700'>
					<a
						href='#'
						onMouseOver={() => {
							setPannelTwo(true);
							setPannelThree(false);
						}}
						className='hover:text-primary transition-all flex items-center gap-2'>
						Solutions <Arrow />
					</a>
					<a
						onMouseOver={() => {
							setPannelTwo(false);
							setPannelThree(true);
						}}
						href='#'
						className='hover:text-primary transition-all flex items-center gap-2'>
						Company <Arrow />
					</a>
					<a href='#' className='hover:text-[#010ed0] transition-all'>
						Case studies
					</a>
					<a href='#' className='hover:text-[#010ed0] transition-all'>
						Blog
					</a>

					<a href='#' className='hover:text-[#010ed0] transition-all'>
						Resources
					</a>
				</div>

				<ContactNum />
			</nav>

			<div className={`absolute h-screen w-full bg-black bg-opacity-50  ${pannelTwo || pannelThree ? "block" : "hidden"}`}>
				<Solutions setPannelTwo={setPannelTwo} pannelTwo={pannelTwo} />
				<Copmany pannelThree={pannelThree} setPannelThree={setPannelThree} />
			</div>
		</div>
	);
};

export default Navbar;

const ContactNum = () => (
	<div className='flex gap-6'>
		<div className='flex flex-col'>
			<span className='bg-gray-100 rounded-md text-[14px] px-4  text-gray-500 font-semibold'>Client Support</span>
			<span className='text-xl font-semibold text-gray-700'>{NavbarData.number}</span>
		</div>
		<button className='bg-[#010ed0] text-white px-5 rounded-md font-semibold hover:bg-gray-900 transition-all self-center py-2 shadow-md'>
			Contact Us
		</button>
	</div>
);

const Solutions = ({ setPannelTwo, pannelTwo }) => (
	<div className={`grid grid-cols-10 min-h-[50%] ${pannelTwo ? "block" : "hidden"}`} onMouseLeave={() => setPannelTwo(false)} title='solutions'>
		{/* first colum */}
		<div className='xl:px-32 px:4 col-span-3 py-8  flex flex-col gap-5 bg-white'>
			<h1 className='font-bold text-2xl'>Services</h1>

			{NavbarData.solutionPannel.servicesLinks.map((e, i) => (
				<a href={e.link} key={i} className='font-semibold text-gray-600 hover:text-[#010ed0] transition-all'>
					{e.title}
				</a>
			))}
		</div>
		{/* second column */}
		<div className='lg:px-32 col-span-4 py-8 flex flex-col gap-5 bg-white'>
			<h1 className='font-bold text-2xl'>Buisness Chalanges</h1>
			<div className='grid grid-cols-2 gap-3'>
				{NavbarData.solutionPannel.buissnessChallenges.map((e, i) => (
					<div
						key={i}
						className='col-span-1 border hover:border-[#010ed0] hover:text-[#010ed0] flex flex-col items-center gap-5 transition-all rounded-md font-semibold pb-6 px-2 text-sm'>
						<img src={e.img} alt='' className='self-start' />
						<h2>{e.heading}</h2>
					</div>
				))}
			</div>
		</div>

		{/* third column  */}

		<div className='lg:px-32 col-span-3 py-8 h flex flex-col gap-5 bg-gray-100'>
			<h1 className='font-bold text-2xl'>Industry Focus</h1>

			{NavbarData.solutionPannel.IndustryFocusLinks.map((e, i) => (
				<a href={e.link} key={i} className='font-semibold text-gray-600 hover:text-[#010ed0] transition-all'>
					{e.title}
				</a>
			))}
		</div>

		{/* end  */}
	</div>
);

const Copmany = ({ pannelThree, setPannelThree }) => (
	<div className={`grid grid-cols-10 min-h-[50%] ${pannelThree ? "block" : "hidden"}`} onMouseLeave={() => setPannelThree(false)} title='company'>
		<h1 className='font-bold text-4xl lg:px-32 col-span-3 py-8 bg-white'>{NavbarData.companyPannel.heaing}</h1>

		<div className='lg:px-32 col-span-4 py-8 flex flex-col gap-5 bg-white font-semibold'>
			{NavbarData.companyPannel.links.map((e, i) => (
				<a key={i} href={e.link} className='hover:text-primary duration-500 transition-all'>
					{e.title}
				</a>
			))}
		</div>

		<div className='lg:px-32 col-span-3 py-8  bg-gray-100'>
			<h1 className='font-bold text-xl w-60 mb-8'>Platform Partenerships</h1>

			{NavbarData.companyPannel.companies.map((e, i) => (
				<div className='flex gap-3' key={i}>
					<img src={e.img} alt='' className='w-14' />
					<span className='font-semibold'>{e.name}</span>
				</div>
			))}
		</div>

		{/* end  */}
	</div>
);

const Arrow = () => (
	<svg className='fill-current opacity-75 w-4 h-4 -mr-1 rotate-90' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
		<path d='M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z' />
	</svg>
);
