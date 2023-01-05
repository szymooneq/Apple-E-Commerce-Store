import React, { useContext, useState } from 'react';
import { BsBagCheck, BsTruck } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../../components/Products/RelatedProducts/RelatedProducts';
import { CartContext } from '../../lib/context/CartContext';
import useFetch from '../../lib/hooks/useFetch';
import { productVariant } from '../../lib/interfaces/product';
import './Product.scss';

function Product(): JSX.Element {
	const [variant, setVariant] = useState({} as productVariant);
	const { id } = useParams();
	const { data } = useFetch(
		`/api/products?populate[variants][populate]=*&populate[category]=*&[filters][slug]=${id}`,
		setVariant
	);

	const { addToCart } = useContext(CartContext);

	const handleVariantChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (variant.value === e.target.value) {
			return;
		}

		product.variants.map((variant: productVariant, id: number) => {
			if (variant.value === e.target.value) {
				setVariant(product.variants[id]);
			}
		});
	};

	if (!data) return;
	const product = data.data[0].attributes;

	return (
		data &&
		variant && (
			<div className="single-product-main-content">
				<div className="layout">
					<div className="single-product-page">
						<div className="left">
							{product.isNew && <div className="new">New</div>}
							<div className="name">{product.title}</div>
							<div className="price">${product.price}</div>

							<div className="mobile-image">
								<img
									src={
										import.meta.env.VITE_STRIPE_APP_DEV_URL +
										variant.image.data.attributes.url
									}
									alt={variant.image.data.attributes.alternativeText}
								/>
							</div>

							<fieldset className="variant">
								<legend>Color - {variant.displayName}</legend>
								<div className="variant-list">
									{product.variants.map((item: productVariant) => (
										<div key={item.value} className="variant-item">
											<input
												type="radio"
												id={item.value}
												name="color"
												value={item.value}
												onChange={(e) => handleVariantChange(e)}
												checked={item.value === variant.value}
											/>
											<label className="variant-label" htmlFor={item.value}>
												<div
													className="palette"
													style={{ backgroundColor: item.colorCode }}></div>
											</label>
										</div>
									))}
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
										addToCart(data.data[0], variant);
									}}>
									Add to Bag
								</button>
							</div>
						</div>
						<div className="right">
							<img
								src={
									import.meta.env.VITE_STRIPE_APP_DEV_URL +
									variant.image.data.attributes.url
								}
								alt={variant.image.data.attributes.alternativeText}
							/>
						</div>
					</div>
					<div className="recommendations">
						<h2 className="recommendations-header">You may also like</h2>
						<RelatedProducts
							productId={product.slug}
							categoryId={product.category.data.id}
						/>
					</div>
				</div>
			</div>
		)
	);
}

export default Product;
