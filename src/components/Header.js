import { Card, Grid, Typography } from "@mui/material"

const Header = ({formConfig}) => {
    return(
    <Grid item xs={12} md={8}>
                <Card
                  sx={{
                    marginTop: "16px",
                    marginBottom: "0.4rem",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                    "& > :first-child": {
                      borderTop: "4px solid #0097A7",
                      borderTopWidth: "10px",
                      padding: "10px",
                    },
                    maxWidth: 800,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    {formConfig?.title}
                  </Typography>
                  <Typography variant="body1" sx={{ paddingLeft: "10px" }}>
                    {formConfig?.description}
                  </Typography>
                </Card>
              </Grid>
    )
}

export default Header