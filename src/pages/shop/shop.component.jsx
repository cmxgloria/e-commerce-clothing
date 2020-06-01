// ShopPage becomes not connected-component; it becomes a child component of ShopPage
import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

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
import { updateCollections } from "../../redux/shop/shop.actions.js";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(ColletctionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }
  render() {
    const { loading } = this.state;
    const { match } = this.props;
    return (
      <div className="shop-page">
        {/* {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))} */}
        {/* <Route exact path={`${match.path}`} component={ColletctionOverview} /> */}
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // component={CollectionPage}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
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

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
