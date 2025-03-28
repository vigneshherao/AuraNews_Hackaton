import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-5 px-6 border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:justify-between gap-8">
        <div className="w-full md:w-1/3">
          <h3 className="font-bold mb-4 !text-xs text-start">GALLERY</h3>
          <div className="flex justify-between gap-2 mb-4">
            <img
              src="https://i.ytimg.com/vi/sHg_HFpvBl8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4X2X2d-s0kDbJD_5_GK1b8R-0Nw"
              alt="Gallery 1"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ytimg.com/vi/sHg_HFpvBl8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4X2X2d-s0kDbJD_5_GK1b8R-0Nw"
              alt="Gallery 2"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ytimg.com/vi/sHg_HFpvBl8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4X2X2d-s0kDbJD_5_GK1b8R-0Nw"
              alt="Gallery 3"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
          <div className="flex gap-3 text-xl">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-mastodon"></i>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center">
          <h2 className="text-3xl font-bold font-inter">AuraNews</h2>
          <p className="text-sm md:hidden text-gray-600 mt-2">
            © 2025 - ALL RIGHTS RESERVED.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Ei mei scripta intellegat. Verear voluptaria eam at, consul putent
            eu vel. Pro saepe maluisset ne, audire maiorum forensibus eos et.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <h3 className="text-xs font-bold mb-4 text-start">POPULAR</h3>
          <div className="flex items-center gap-3">
            <img
              src="https://i.ytimg.com/vi/sHg_HFpvBl8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD4X2X2d-s0kDbJD_5_GK1b8R-0Nw"
              alt="Popular Post"
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h4 className="text-md font-semibold">A Trip to Middle East</h4>
              <p className="text-xs text-gray-600">
                Labores incorupte vim an. Id augue populo alienum usu.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-gray-600 md:hidden">
        <p>© 2025 - ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
