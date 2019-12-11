import React from "react";
import "./category.styles.scss";
import CollectionItem from "../../collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ match, collection }) => (
  <div className="collection-page"></div>
);

const mapStateToProps = (state, ownProps) => {
  collection: selectCollection(match.params.collectionId)(state);
};
export default connect(mapStateToProps)(CollectionPage);
