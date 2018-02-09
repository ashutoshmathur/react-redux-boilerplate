import { connect } from "react-redux";
import ConnectedList from '../components/List';

const mapStateToProps = state => {
  return { articles: state.articles };
};

const List = connect(mapStateToProps)(ConnectedList);

export default List;
