import { Box } from '@mui/material';
import HomeHero from '../componets/home/HomeHero';
import HomeAbout from '../componets/home/HomeAbout';
import HomeHowWorks from '../componets/home/HomeHowWorks';
import HomePayments from '../componets/home/HomePayments';
import HomeBenefits from '../componets/home/HomeBenefits';
import HomeCTA from '../componets/home/HomeCTA';


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
