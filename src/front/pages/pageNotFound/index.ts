import { compose } from 'redux';
import PageNotFound from './PageNotFound';
import withEnterAnimation from '../../hoc/withEnterAnimation';

export default compose(withEnterAnimation(/* no option yet */))(PageNotFound);
