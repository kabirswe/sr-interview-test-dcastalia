import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'
import '../styles/ProductList.scss'

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      limit: 4,
      showMore: true,
      barWidth: ((100 / this.props.products.length)*4).toFixed(2)
    }
  }
  componentDidMount() {
  
    this.setState({
      barWidth: ((100 / this.props.products.length)*4).toFixed(2),
    });
  }

  onLoadMore = () => {
    if(this.props.products.length <= (this.state.limit + 4)) {
      this.setState({
        showMore: false,
        barWidth: '100',
        limit: this.props.products.length
      });
    } else {
      this.setState({
        limit: this.state.limit + 4,
        barWidth: ((100 / this.props.products.length) * (this.state.limit + 4)).toFixed(2)
      });
    }
  }

  render() {
    const { addToCart, products } = this.props;
    return (
      <div className="product-list-wrapper">
        <h3 className="title">armchairs</h3>
        <h3 className="new-arival">New Arrivals</h3>
        <div className="product-block">
        {products.slice(0, this.state.limit).map(product=>(
            <ProductItem
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product.id)}
            />
        ))}
        </div>
        <div className="see-more-block">
          <div className="see-more">
            <div className="counter">Showing {this.state.limit} of {this.props.products.length}</div>
            <div className="bar">
              <span style={{ width: `${this.state.barWidth}%` }}></span>
            </div>
            {this.state.showMore && <button type="button" onClick={this.onLoadMore}>See more</button>}
          </div>
        </div>
      </div>
    )
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      price: PropTypes.string.isRequired,
      inventory: PropTypes.number,
    }),
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
}

export default connect(state => ({ products: getVisibleProducts(state.products) }), { addToCart })(ProductList)
