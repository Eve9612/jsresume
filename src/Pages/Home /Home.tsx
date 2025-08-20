import ChristmasCountdown from "../../Components/ChdristmasCountdown";

// Main Page
function Home() {
  return (
    
    <div 
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL}/Wallpaper.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // color: "white",
        fontFamily: "Arial, sans-serif",
      }}
      >
      <h1 style={{ fontSize: "4rem", textShadow: "2px 2px 4px rgba(0,0,0,0.7)", position: "absolute", top: "120px", left: "100px",}}>
        Welcome to Evelyn's <br></br>
        First React Website!
      </h1>
      <h3 style={{position: "absolute", top: "312px", left: "100px"}}>
          The purpose of this website is to showcase what I learned <br></br> 
          in my 24-week JavaScript course. Please use the menu at <br></br>
          the top to navigate through my Ecom, Feature, Resume, <br></br>
          and Login pages!
      </h3>
      <div style={{ 
        position: "absolute", 
        bottom: "150px",
        left:  "900px"
        }}>
        <ChristmasCountdown /> 
      </div>
    </div>
  );
}

export default Home;