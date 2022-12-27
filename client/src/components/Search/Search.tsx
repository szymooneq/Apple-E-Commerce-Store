import { MdClose } from 'react-icons/md';
import prod from '../../assets/products/earbuds-prod-1.webp';
import './Search.scss';

interface Search {
	setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

function Search({ setShowSearch }: Search): JSX.Element {
	return (
		<div className="search-modal">
			<div className="form-field">
				<input type="text" placeholder="Search for products" autoFocus />
				<MdClose onClick={() => setShowSearch(false)} />
			</div>
			<div className="search-result-content">
				<div className="search-results">
					<div className="search-result-item">
						<div className="img-container">
							<img src={prod} alt="" />
						</div>
						<div className="prod-details">
							<span className="name">product name</span>
							<span className="desc">product desc</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Search;
