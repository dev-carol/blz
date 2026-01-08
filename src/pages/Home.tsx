import { Box } from '@mui/material';
import HomeHero from '../components/home/HomeHero';
import HomeAbout from '../components/home/HomeAbout';
import HomeHowWorks from '../components/home/HomeHowWorks';
import HomePayments from '../components/home/HomePayments';
import HomeBenefits from '../components/home/HomeBenefits';
import HomeCTA from '../components/home/HomeCTA';


const Home = () => (
  <Box>
    <HomeHero />
    <HomeAbout />
    <HomeHowWorks />
    <HomePayments />
    <HomeBenefits />
    <HomeCTA />
  </Box>
);

export default Home;
