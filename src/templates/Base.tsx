import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import Navbar from './Navbar';

const Base = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    {/* <Hero />
    <Sponsors />
    <VerticalFeatures />
    <Banner />
    <Footer /> */}
  </div>
);

export { Base };
