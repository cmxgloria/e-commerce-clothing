// ShopPage becomes not connected-component; it becomes a child component of ShopPage
import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
    <CollectionPreview />
  </div>
);

// export default connect(mapStateToProps)(ShopPage);

export default ShopPage;
