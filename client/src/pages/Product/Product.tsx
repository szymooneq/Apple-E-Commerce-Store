import CircularProgress from '@mui/material/CircularProgress';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { BsBagCheck, BsTruck } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../../components/Products/RelatedProducts/RelatedProducts';
import { getProductData } from '../../lib/api/getData';
import { CartContext } from '../../lib/context/CartContext';
import { ProductVariant } from '../../lib/interfaces/product';
import './Product.scss';

function Product(): JSX.Element {
	const { slug } = useParams();
	const [variant, setVariant] = useState<number>(0);
	const { addToCart } = useContext(CartContext);
	const { data, isLoading } = useQuery(['product', slug], () =>
		getProductData(slug)
	);

	return (
		<div className="single-product">
			{isLoading && <CircularProgress />}
			{data && (
				<div className="layout">
					<div className="single-product-page">
						<div className="left">
							{data.attributes.isNew && <div className="new">New</div>}
							<div className="name">{data.attributes.title}</div>
							<div className="price">${data.attributes.price}</div>

							<div className="mobile-image">
								<img
									src={
										import.meta.env.VITE_STRIPE_APP_DEV_URL +
										data.attributes.variants[variant].image.data.attributes.url
									}
									alt={
										data.attributes.variants[variant].image.data.attributes
											.alternativeText
									}
								/>
							</div>

							<fieldset className="variant">
								<legend>
									Color - {data.attributes.variants[variant].displayName}
								</legend>
								<div className="variant-list">
									{data.attributes.variants.map(
										(item: ProductVariant, id: number) => (
											<div key={item.value} className="variant-item">
												<input
													type="radio"
													id={item.value}
													name="color"
													value={item.value}
													onChange={() => setVariant(id)}
													checked={id === variant}
												/>
												<label className="variant-label" htmlFor={item.value}>
													<div
														className="palette"
														style={{ backgroundColor: item.colorCode }}></div>
												</label>
											</div>
										)
									)}
								</div>
							</fieldset>

							<div className="delivery">
								<div className="delivery-item">
									<BsTruck />
									<div className="delivery-info">
										<ul>
											Delivery
											<li>In Stock</li>
											<li>Free Shipping</li>
											<li className="link">Get delivery dates</li>
										</ul>
									</div>
								</div>
								<div className="delivery-item">
									<BsBagCheck />
									<div className="delivery-info">
										<ul>
											Pickup
											<li className="link">Check availability</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="checkout-button">
								<button
									className="add-to-cart-button"
									onClick={() => {
										addToCart(data, data.attributes.variants[variant]);
									}}>
									Add to Bag
								</button>
							</div>
						</div>
						<div className="right">
							<img
								src={
									import.meta.env.VITE_STRIPE_APP_DEV_URL +
									data.attributes.variants[variant].image.data.attributes.url
								}
								alt={
									data.attributes.variants[variant].image.data.attributes
										.alternativeText
								}
							/>
						</div>
					</div>
					<div className="recommendations">
						<h2 className="recommendations-header">You may also like</h2>
						<RelatedProducts
							productSlug={data.attributes.slug}
							categoryId={data.attributes.category.data.id}
						/>
					</div>
				</div>
			)}
		</div>
	);
}

export default Product;
