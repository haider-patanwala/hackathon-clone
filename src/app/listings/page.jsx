import ClientOnly from '@/app/components/ClientOnly';

import ListingClient from './ListingClient';

const ListingPage = async () => {
	if (!listing) {
		return (
			<ClientOnly>
				<EmptyState />
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<ListingClient
				listing={listing}
				reservations={reservations}
				currentUser={currentUser}
			/>
		</ClientOnly>
	);
};

export default ListingPage;
