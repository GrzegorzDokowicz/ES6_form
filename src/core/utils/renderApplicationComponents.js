import renderComponent from './renderComponent';
import ApplicationComponents from '../../components';

const renderApplicationComponents = (element, elem) => renderComponent(element, ApplicationComponents(elem));

export default renderApplicationComponents;