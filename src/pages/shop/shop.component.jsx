// ShopPage becomes not connected-component; it becomes a child component of ShopPage
import React from "react";
import { Route } from "react-router-dom";
import ColletctionOverview from "../../components/collections-overview/collections-overview.component";
import CategoryPage from "../category/category.component";
// import { createStructuredSelector } from "reselect";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
    <Route exact path={`${match.path}`} component={ColletctionOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// })
// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;
