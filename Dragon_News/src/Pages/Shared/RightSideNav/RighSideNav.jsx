import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const RighSideNav = () => {
  return (
    <div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl">Login with</h2>

        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>Login With Github
        </button>
      </div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl mb-4">Find us on</h2>
        <a className="p-4 flex items-center ">
          <FaFacebook></FaFacebook>
          <span>Facebook</span>
        </a>

        <a className="p-4 flex items-center">
          {" "}
          <FaTwitter></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="p-4 flex items-center">
          <FaInstagram></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {"Q zone"}
      <div>
        <h2>Q zone</h2>
        <img src={qzone1}></img>
        <img src={qzone2}></img>
        <img src={qzone3}></img>
      </div>
    </div>
  );
};

export default RighSideNav;
