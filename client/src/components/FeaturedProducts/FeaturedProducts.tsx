import { ItemInterface } from '../../interfaces/interfaces';
import Card from '../Card/Card';
import './FeaturedProducts.scss';

interface FeaturedProduct {
	type: string;
}

export default function FeaturedProducts({
	type
}: FeaturedProduct): JSX.Element {
	const data: ItemInterface[] = [
		{
			id: 0,
			img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
			img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
			title: 'Long Sleeve Graphics T-shirt',
			isNew: true,
			oldPrice: 19,
			price: 12
		},
		{
			id: 1,
			img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
			title: 'Coat',
			isNew: true,
			oldPrice: 19,
			price: 12
		},
		{
			id: 2,
			img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
			title: 'Skirt',
			isNew: false,
			oldPrice: 19,
			price: 12
		},
		{
			id: 3,
			img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
			title: 'Hat',
			isNew: false,
			oldPrice: 19,
			price: 12
		}
	];

	return (
		<div className="featuredProducts">
			<div className="top">
				<h1>{type} products</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos
					quibusdam numquam molestias nesciunt adipisci? Vero nihil impedit vel
					quisquam illum sint quidem, maxime qui tenetur voluptatem magni
					officia reprehenderit.
				</p>
			</div>
			<div className="bottom">
				{data.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	);
}
