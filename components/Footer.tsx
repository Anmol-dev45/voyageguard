import Container from "./utils/Container";
import { BsFacebook, BsInstagram, BsTiktok, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="bg-primary page-wrapper text-white">
      <Container>
        <div className="flex flex-col xl:flex-row  gap-12">
          <div className="max-w-[480px] flex-1 md:border-r-2 border-white  md:pr-20">
            <h1 className="page-heading !text-white mb-3 ">
              VoyageGuard
            </h1>
            <p className="body-text !text-white/80">
              VoyageGuard is a reliable platform that offers tourists a safe and
              secure way to explore Nepal. Here, you can access various services
              such as assistance with taxi fares, destination guides, and
              trusted hotels at fair prices. We strive to provide comprehensive
              support in all aspects of your travel experience. To access these
              services, simply click the button below and start your journey
              with confidence.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full border-b-2 border-white pb-12 body-text !text-white">
            <div className="flex flex-col md:pl-8">
              <h3 className="mb-3 font-semibold">Company</h3>
              <a className="mb-3">About</a>
              <a className="mb-3">Privacy & Politics</a>
              <a className="mb-3">Terms & Conditions</a>
              <a className="mb-3">Contact Us</a>
            </div>
            <div className=" md:pl-8">
              <h3 className="mb-3 font-semibold">Socials</h3>
              <div className="flex gap-2 items-center mb-3">
                <BsFacebook />
                <a>Facebook</a>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <BsTwitter />
                <a>Twitter</a>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <BsInstagram />
                <a>Instagram</a>
              </div>
              <div className="flex gap-2 items-center mb-3">
                <BsTiktok />
                <a>Tiktok</a>
              </div>
            </div>
            <div className="flex flex-col md:pl-8">
              <h3 className="font-semibold mb-3 ">Contacts</h3>
              <a className="mb-3">Kathmandu, Nepal</a>
              <a className="mb-3">info@voyageguard.com</a>
              <a className="mb-3">+977-123456789</a>
              <a className="mb-3">Maps/ Direction</a>
            </div>
          </div>
        </div>
        <p className="body-text !text-white !text-center mt-14">
          Copyright 2023 @ VoyageGuard. All right reserved.
        </p>
        <span className="animate-spin text-black"></span>
      </Container>
    </footer>
  );
}
