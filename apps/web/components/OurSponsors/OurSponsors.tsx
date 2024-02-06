import React, { useState, useEffect } from "react";
import SponsorCategory from "./SponsorCategory";
import Panel from "../../public/assets/PANEL.png";
import styles from "./ContactForm.module.css";
interface SponsorData {
  imageUrl: string;
  name: string;
  targetUrl: string;
}
interface ArraySponsors {
  sponsorSection: string;
  sponsors: SponsorData[];
}
interface IncomingData {
  data: {
    sponsors: ArraySponsors[];
  };
}

const OurSponsors = (): JSX.Element => {
  const [sponsors, setSponsors] = useState<ArraySponsors[]>([]);
  const [showContactForm, setShowContactForm] = useState(false);
  useEffect(() => {
    fetch(
      "https://us-central1-techspardha-87928.cloudfunctions.net/api2/sponsors",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data: IncomingData) => {
        const allsponsors: ArraySponsors[] = data.data.sponsors;
        setSponsors(allsponsors);
      })
      .catch((err: Error) => err);
  }, []);
  const handleContactClick = () => {
    setShowContactForm(true);
  };

  const handleCloseClick = () => {
    setShowContactForm(false);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    message: "",
    file: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setFormData({ ...formData, file: file.name });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-evenly">
      <div className="md:text-5xl text-4xl font-starlord-1">Our Sponsors</div>
      <div className="w-[80%] grid auto-rows-auto grid-cols-2 gap-1 justify-items-center justify-self-center justify-center">
        {sponsors.map((item, index) => {
          return (
            <SponsorCategory
              category={item.sponsorSection}
              key={index}
              sponsors={item.sponsors}
            />
          );
        })}
      </div>

      <div className="flex sm:flex-col flex-row items-center gap-2">
        <div className="text-center text-xl">Want to Sponsor?</div>
        <div
          onClick={handleContactClick}
          className="border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer"
        >
          Contact Us
        </div>
      </div>
      {showContactForm && (
        <div
          className={`${
            showContactForm ? "absolute flex" : "hidden"
          } w-screen h-screen justify-center items-center p-3 z-10`}
        >
          <div className="absolute w-full h-full bg-[rgba(0,0,0,0.86)] z-5">
            <div
              className="w-14 h-14 right-0 absolute text-center flex flex-col justify-center  hover:scale-105 cursor-pointer"
              onClick={() => {
                setShowContactForm(false);
              }}
              role="presentation"
            >
              <h1 className="font-starlord-1 text-5xl">X</h1>
            </div>
          </div>
          <div
            className="flex justify-center items-center xl:w-[1485.666px] xl:h-[953.507px] lg:w-[1130px] lg:h-[870px] md:w-[840px] sm:w-[700px] custom-sm:w-[420px] custom-xsm:w-[350px] w-[1280px] h-[900px] scale-90"
            style={{
              backgroundImage: `url(${Panel.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <div className="w-[1280px] h-[737px] xl:scale-100 lg:scale-[80%] md:scale-[58%] sm:scale-[48%] custom-sm:scale-[28%] custom-xsm:scale-[24%] shrink-0">
              <div className="m-auto w-3/4 h-full shrink-0 bg-[rgba(0,0,33,0.60)] flex flex-col overflow-y-auto rounded-sm">
                <div className="flex flex-col justify-center items-center w-full">
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <h2 className="text-3xl mt-5 leading-6 tracking-[1px] font-orbitron-1 text-start w-full">
                      Contact Us
                    </h2>

                    <br />
                    <br />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      name="about"
                      placeholder="About"
                      value={formData.about}
                      onChange={handleChange}
                      required
                    />
                    <br />
                    <br />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <br />
                    <br />
                    <div className={styles.fileInput}>
                      <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="file">Choose File</label>
                      <span>{formData.file}</span>
                    </div>
                    <br />
                    <div className="flex flex-row items-center gap-x-96 ml-24">
                      <button
                        className="border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer"
                        type="submit"
                      >
                        Submit
                      </button>
                      <button
                        className="border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer"
                        onClick={handleCloseClick}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurSponsors;
