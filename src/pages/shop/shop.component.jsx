// ShopPage becomes not connected-component; it becomes a child component of ShopPage
import React from "react";
import { Route } from "react-router-dom";
import ColletctionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
// import { createStructuredSelector } from "reselect";

// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";
// import CollectionPreview from "../../components/collection-preview/collection-preview.component";
// import { selectCollections } from "../../redux/shop/shop.selectors";

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      convertCollectionsSnapshotToMap(snapshot);
    });
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
        <Route exact path={`${match.path}`} component={ColletctionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

// move to collectionsOverview component
// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections
// })
// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;
