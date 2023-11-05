const Sec2Card = ({ img, heading, details }) => {
	return (
		<div
			className='col-span-1 grid grid-rows-5 gap-5 justify-end
           '>
			<div className='row-span-2 flex items-center'>
				<img src={img} alt='' className='object-cover w-20' />
			</div>
			<h1 className='text-2xl font-semibold row-span-1'>{heading}</h1>
			<p className='text-gray-500 row-span-2'>{details}</p>
		</div>
	);
};

export default Sec2Card;
