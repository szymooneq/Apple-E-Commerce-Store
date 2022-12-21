import { Link } from 'react-router-dom';
import { ItemInterface } from '../../interfaces/interfaces';
import './Card.scss';

interface Card {
	item: ItemInterface;
}

export default function Card({ item }: Card): JSX.Element {
	return (
		<Link className="link" to={`/product/${item.id}`}>
			<div className="card">
				<div className="image">
					{item.isNew && <span>New Season</span>}
					<img className="mainImg" src={item.img} alt="" />
					{item.img2 && <img className="secondImg" src={item.img2} alt="" />}
				</div>
				<h2>{item.title}</h2>
				<div className="prices">
					<h3>${item.oldPrice}</h3>
					<h3>${item.price}</h3>
				</div>
			</div>
		</Link>
	);
}
