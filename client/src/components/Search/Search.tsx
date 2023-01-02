import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { TbSearch } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../lib/hooks/useFetch';
import './Search.scss';

interface Search {
	setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({ setShowSearch }: Search): JSX.Element {
	const [query, setQuery] = useState('');
	const navigate = useNavigate();

	const handleChange = (e: Event) => {
		setQuery(e.target.value);
	};

	let { data } = useFetch(
		`/api/products?populate=*&filters[title][$contains]=${query}`
	);

	if (!query.length) {
		data = null;
	}

	return (
		<div className="search-modal">
			<div className="form-field">
				<input
					type="text"
					placeholder="Search for products"
					value={query}
					onChange={handleChange}
				/>

				<div className="close-btn" onClick={() => setShowSearch(false)}>
					<MdClose />
				</div>
			</div>
			<div className="search-result-content">
				<div className="search-results">
					{data?.data?.map((item) => (
						<div
							key={item.id}
							onClick={() => {
								navigate(`/product/${item.id}`);
								setShowSearch(false);
							}}
							className="search-result-item">
							<div className="img-container">
								<img
									src={
										import.meta.env.VITE_STRIPE_APP_DEV_URL +
										item.attributes.image.data[0].attributes.url
									}
									alt={item.attributes.image.data[0].attributes.alternativeText}
								/>
							</div>
							<div className="prod-details">
								<span className="name">{item.attributes.title}</span>
								{/* <span className="desc">{item.attributes.description}</span> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Search;
