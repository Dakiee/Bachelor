import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import Box from "@mui/material/Box";
import AboutPageContent from "@/components/aboutpage/aboutpage";

const AboutPage = () => {
  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
    >
      <Navbar></Navbar>
      <AboutPageContent />
      <Footer></Footer>
    </Box>
  );
};

export default AboutPage;
