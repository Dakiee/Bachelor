import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import StatisticsPage from "@/components/statisticspage/statisticspage";
import Box from "@mui/material/Box";

const Statistics = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Navbar></Navbar>
      <StatisticsPage></StatisticsPage>
      <Footer></Footer>
    </Box>
  );
};

export default Statistics;
