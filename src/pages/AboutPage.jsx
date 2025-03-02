import backendPic from "../assets/ImageToStl.com_mac_aboutus_1440x800.png";

const AboutPage = () => {
    return (
        <div style={{ position: "relative", textAlign: "center" }}>
            <img
                src={backendPic}
                alt="ImageToStl.com_mac_aboutus_1440x800"
                style={{ width: "100%", height: "750px" }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "0",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#fff",
                    fontFamily: "'Quattrocento', serif",
                    fontSize: "1.8rem",
                    lineHeight: "1.5",
                    textShadow: "3px 3px 8px rgba(0, 0, 0, 0.7)",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <div>
                    <h1 style={{ marginBottom: "15px" }}>About Us – MAC Cosmetics</h1>
                    <p>
                        At MAC Cosmetics, we celebrate individuality, creativity,<br />
                        and self-expression. Since our founding in 1984, we<br />
                        have been at the forefront of professional makeup,<br />
                        creating high-quality products loved by makeup<br />
                        artists, celebrities, and beauty enthusiasts around<br />
                        the world. Our mission is to empower everyone,<br />
                        everywhere, with inclusive shade ranges and<br />
                        innovative formulas designed for all.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;

