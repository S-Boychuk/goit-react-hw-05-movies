import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ children }) => {
  return <section className={css.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};
export default Section;
