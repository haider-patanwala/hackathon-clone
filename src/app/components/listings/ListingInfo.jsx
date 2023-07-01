'use client';

import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';

const ListingInfo = ({
	hostName,
	description,
	guestCount,
	roomCount,
	bathroomCount,
	category,
	categoryIcon,
	categoryLabel,
	categoryDescription,
}) => {
	return (
		<div className='col-span-4 flex flex-col gap-8'>
			<div className='flex flex-col gap-2'>
				<div
					className='
            text-xl 
            font-semibold 
            flex 
            flex-row 
            items-center
            gap-2
          '
				>
					<div>Hosted by {hostName}</div>
					<Avatar />
				</div>
				<div
					className='
            flex 
            flex-row 
            items-center 
            gap-4 
            font-light
            text-neutral-500
          '
				>
					<div>{guestCount} guests</div>
					<div>{roomCount} rooms</div>
					<div>{bathroomCount} bathrooms</div>
				</div>
			</div>
			<hr />
			{category && (
				<ListingCategory
					icon={categoryIcon}
					label={categoryLabel}
					description={categoryDescription}
				/>
			)}
			<hr />
			<div
				className='
      text-lg font-light text-neutral-500'
			>
				{description}
			</div>
			<hr />
			{/* <Map center={coordinates} /> */}
		</div>
	);
};

export default ListingInfo;
