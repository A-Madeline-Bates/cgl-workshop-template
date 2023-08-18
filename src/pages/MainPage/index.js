// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Couch to 5k components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Couch to 5k examples
// import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// MainPage page sections

// MainPage page components
import VisitNHSWebsite from "pages/MainPage/components/VisitNHSWebsite";

// Routes
import footerRoutes from "footer.routes";

// Images
import Counters from "pages/MainPage/sections/Counters";
import Information from "pages/MainPage/sections/Information";
import Testimonials from "pages/MainPage/sections/Testimonials";
import { RunningVideoHeader } from "components/RunningVideoHeader";
import Team from "pages/MainPage/sections/TeamFeature";

function MainPage() {
  return (
    <>
      <RunningVideoHeader />
      <Container>
        <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
          {/* Main title */}
          <MKTypography
            variant="mainHeader"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["5xl"],
              },
            })}
            textAlign="center"
          >
            Couch to 5k{" "}
          </MKTypography>
        </Grid>
      </Container>
      <Card
        sx={{
          padding: 2,
          mx: { xs: 2, lg: 3 },
          marginBottom: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* The stats that sit at the top of the page */}
        <Counters />
        {/* Information blocks */}
        <Information />
        {/* Coach bio section */}
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Team />
        </Card>
        {/* Visit NHS Website card */}
        <Container sx={{ marginTop: 6 }}>
          <VisitNHSWebsite />
        </Container>
        {/* Testimonials and reviews section */}
        <Testimonials />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  Thank you for your support!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  We deliver the best web products
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  target="_blank"
                  color="twitter"
                  sx={{ marginRight: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  target="_blank"
                  color="facebook"
                  sx={{ marginRight: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton component="a" target="_blank" color="pinterest">
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default MainPage;
