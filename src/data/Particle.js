import Particles from "react-particles-js";
import micro from '../Images/microsoft.png';
import azure from '../Images/azure.png';
import devops from '../Images/devops.png';

function Particle() {
  return (
    <Particles className="banner-bg"
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            speed: 1,
            out_mode: "out",
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: {micro},
                height: 20,
                width: 23,
              },
              {
                src: {azure},
                height: 20,
                width: 20,
              },
              {
                src: {devops},
                height: 20,
                width: 20,
              },
            ],
          },
          color: {
            value: "#CCC",
          },
          size: {
            value: 30,
            random: false,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
    />
  );
}

export default Particle;
