import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getBySearchProducts } from '../../lib/api/getData';
import './Search.scss';

interface props {
	setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({ setShowSearch }: props): JSX.Element {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const { data } = useQuery(['searchParam', query], () =>
		getBySearchProducts(query)
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<div className="search-modal">
			<div className="form-field">
				<input
					type="text"
					placeholder="Search for products"
					value={query}
					onChange={(e) => handleChange(e)}
				/>

				<div className="close-btn" onClick={() => setShowSearch(false)}>
					<MdClose />
				</div>
			</div>
			<div className="search-result-content">
				<div className="search-results">
					{data &&
						data.map((item) => {
							const imgSrc = item.attributes.image.data[0].attributes.url;
							const imgAlt =
								item.attributes.image.data[0].attributes.alternativeText;

							return (
								<div
									key={item.id}
									onClick={() => {
										navigate(`/product/${item.attributes.slug}`);
										setShowSearch(false);
									}}
									className="search-result-item">
									<div className="img-container">
										<img src={imgSrc} alt={imgAlt} />
									</div>
									<div className="prod-details">
										<span className="name">{item.attributes.title}</span>
									</div>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default Search;
