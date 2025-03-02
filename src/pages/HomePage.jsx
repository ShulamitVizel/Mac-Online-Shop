import React from "react";
import backendImg from "../assets/3578bf63385641.5aaf8dadee5e7.gif"
import blueBack from "../assets/ImageToStl.com_0mac_jan25_hyper_real_main_desktop_2880x720_2.png"
import grayBack from "../assets/ImageToStl.com_mac_jan25_hyper_real_carrousel_desktop+(1).png"
import hyeper from "../assets/hyeper.webp.png"
import rBlue from "../assets/rightp.png"
import lBlue from "../assets/leftp.png"
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Home = () => {

  const tableData = [
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_bestsellers_dt.jpg", title: "the best sellers" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_new_dt.jpg", title: "new" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_lips_dt.jpg", title: "lips" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_eyes_dt.jpg", title: "eyes" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_face_dt.jpg", title: "face" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_skin_dt.jpg", title: "care" },
    { image: "https://www.maccosmetics.co.il/media/export/cms/collections/hyper_real_serumizer_eye/hyper_real_serumizer_eye_hp_subnav_brushes_dt.jpg", title: "brushes" }

  ];

  const items = [
    { id: 1, image: "https://assets.boots.ie/content/dam/boots/brands/brand---m/mac/mac_cp-find-your-shade/mac_cp_09-2023/2023-09_mac_content-page_find-your-shade_50-static_finding-your-undertone.dam.ts=1695115813234.jpg", caption: "Discover your makeup shade" },
    { id: 2, image: "https://www.maccosmetics.co.za/media/export/cms/GlowPlay%20Blush.jpg", caption: "Treat yourself or your loved ones with our perfect gift boxes." },
    { id: 3, image: "https://detaly.co.il/wp-content/uploads/2024/09/MAC_FY25_StudioRadianceConcealer_ShadeRange_2_sRGB72.jpg", caption: "Free shipping with a purchase of NIS 249" },
  ];
  return (
    <div>
      <img src={backendImg} alt="3578bf63385641.5aaf8dadee5e7.gif" style={{ width: "100%", height: "700px" }} />
      <br /> <br />
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: "bold", color: "#333" }} >Discover the most loved products</h2>
      <br /><br /> <br />
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", textAlign: "center" }}>
          <thead>
            <tr>
            </tr>
          </thead>
          <tbody>
            <tr>
              {tableData.map((data, index) => (
                <td key={index} style={{ padding: "10px" }}>
                  <img
                    src={data.image}
                    alt={data.title}
                    style={{ width: "140px", height: "140px", objectFit: "cover", marginBottom: "10px" }}
                  />
                  <div style={{ fontWeight: "bold", color: "#555", fontSize: "25px" }}>{data.title}</div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <br /> <br />
      <div style={{ position: "relative", textAlign: "center", color: "white" }}>
        <img
          src={blueBack}
          alt="ImageToStl.com_0mac_jan25_hyper_real_main_desktop_2880x720_2"
          style={{
            width: "100%",
            height: "400px",
            marginBottom: "-5px",
          }}
        />
        <img
          src={grayBack}
          alt="ImageToStl.com_mac_jan25_hyper_real_carrousel_desktop+(1)"
          style={{
            width: "100%",
            height: "600px",
            marginTop: "-5px",
          }}
        />
        <img
          src={hyeper}
          alt="hyeper.webp"
          style={{
            position: "absolute",
            top: "100px",
            right: "100px",
            width: "400px",
            height: "100px",
            zIndex: 10,
          }}
        />
        <p
          style={{
            position: "absolute",
            top: "220px",
            right: "100px",
            width: "400px",
            fontSize: "35px",
            fontFamily: "'Quattrocento', serif",
            lineHeight: "1.5",
          }}
        >
          New! Meet the Eye Serum <br />
          The iconic skincare line
        </p>
        <img
          src={rBlue}
          alt="rightp"
          style={{
            position: "absolute",
            top: "400px",
            right: "9%",
            zIndex: 5,
          }}
        />
        <img
          src={lBlue}
          alt="leftp"
          style={{
            position: "absolute",
            top: "400px",
            left: "9%",
            zIndex: 5,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "750px",
            left: "14%",
            width: "30%",
            color: "white",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>Double sided brush - Gift!</h3>
          <p>With every purchase of HYPER REAL makeup + a series product</p>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>Shop Now</a>
        </div>
        <div
          style={{
            position: "absolute",
            top: "750px",
            right: "13%",
            width: "30%",
            color: "white",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          <h3 style={{ fontWeight: "bold" }}>PERFECT LASHES</h3>
          <p>15% off on the best mascaras</p>
          <a href="#" style={{ color: "white", textDecoration: "underline" }}>Shop Now</a>
        </div>
      </div>
      <p style={{ fontSize: "3rem", textAlign: "center" }}>need help?</p>
      <Grid container spacing={3} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ maxWidth: 400, margin: "auto", textAlign: "center" }}>
              <CardMedia
                component="img"
                height="220"
                image={item.image}
                alt={`Image ${item.id}`}
                sx={{ borderRadius: 2 }}
              />
              <CardContent>
                <Typography variant="subtitle1" component="p">
                  {item.caption}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
export default Home;



