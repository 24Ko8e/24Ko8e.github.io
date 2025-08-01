import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>SmartVizX Pvt. Ltd.</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Developed VR software solutions for client in the Interior Design
              and Architect industry with Unreal Engine and C++. Additionally developed a floor tiling configurator that can help visualize a variety of tiles and plays a vital role in floor planning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>ProperT Online LLC.</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed VR ArchViz solution for real estate clients with Unreal Engine and C++ in parellel with Metaverse product on Unity Engine and C#.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front-End Engineer</h4>
                <h5>Cityzenith Pvt. Ltd.</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed a AI powered 3D simulation and analysis product for architects that can help them predict and visualize the
              lifecycle and effects of a building on the environment while making real-time structural and operational changes with Unreal Engine and C++.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AR Developer</h4>
                <h5>Ctruh Technologies Pvt. Ltd.</h5>
              </div>
              <div className="career-info-current">
                <h3>2024</h3>
                <h6>(current)</h6>
              </div>
            </div>
            <p>
              Developing AR solutions for clients from across the world and industries to solve problems of marketing, visualization, online purchase discrepencies and product try ons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
