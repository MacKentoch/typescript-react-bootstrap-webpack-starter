// #region imports
import { compose } from 'redux';
import About from './About';
import withEnterAnimation from '../../hoc/withEnterAnimation';
// #endregion

export default compose(withEnterAnimation(/* no option yet */))(About);
