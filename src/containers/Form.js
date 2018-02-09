import { connect } from "react-redux";
import { addArticle } from "../actions/index";
import ConnectedForm from "../components/Form";

const mapDispatchToProps = dispatch => {
  return {
    addArticle: article => dispatch(addArticle(article))
  };
};

const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;
