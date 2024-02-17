import { useState, useEffect } from "react";
import "./TeamDetails.css";
import "./TeamDetails.scss";
import BouncingDotsLoader from "../Loader/Loader";
import Image from "next/image";

interface ContactsResponse {
  data: { contacts: Societies[] };
  success: boolean;
}
interface Societies {
  section: string;
  logo: string;
  people: Members[];
}
interface Members {
  imageUrl: string;
  name: string;
  post: string;
}

const TeamDetails = () => {
  const [data, setData] = useState<Societies[] | null>([]);
  const [people, setPeople] = useState<Members[] | null>([]);
  const [current, setCurrent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = () => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contacts`)
        .then((res) => res.json())
        .then((res: ContactsResponse) => {
          setData(res.data.contacts.reverse());
          setPeople(res.data.contacts[0].people);
          setCurrent(res.data.contacts[0].section);
        })
        .catch((err: Error) => err);
    };
    getData();
  }, []);

  const changePeople = (e: React.MouseEvent) => {
    setCurrent((e.target as HTMLInputElement).id);
    data?.forEach((element) => {
      if (element.section === (e.target as HTMLInputElement).id) {
        setIsLoading(true);
        setPeople(element.people);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    });
  };
  return (
    <div className="team-details">
      <div className="team-links">
        {data
          ? data.map((x, i: number) => {
              return (
                <button
                  key={i}
                  id={x.section}
                  onClick={(e) => {
                    changePeople(e);
                  }}
                  className="teams"
                  style={{ color: current === x.section ? "#4890ff" : "white" }}
                >
                  {x.section}
                </button>
              );
            })
          : ""}
      </div>
      <div className="team-card-container">
        {!isLoading && people ? (
          people.map((x, i: number) => {
            return (
              <div
                key={i}
                className={`nft font-orbitron1 ${x.post === "Convener (President)" ? "order-first" : ""}`}
                style={{ padding: "5px", margin: "20px" }}
              >
                <div className="team-card-main">
                  <Image
                    height={2000}
                    width={2000}
                    className="tokenImage placeholder-img"
                    src={x.imageUrl}
                    alt="post-holder"
                  />
                  <h2 className="person-name font-orbitron1">
                    {x.name.split(" ")[0]}{" "}
                    {x.name.split(" ")[1] &&
                    x.name.split(" ")[0].length < 10 &&
                    x.name.split(" ")[0].length + x.name.split(" ")[1].length <
                      20
                      ? x.name.split(" ")[1]
                      : ""}
                  </h2>
                  <hr />
                  <p className="person-post font-orbitron1">{x.post}</p>
                </div>
              </div>
            );
          })
        ) : (
          <BouncingDotsLoader />
        )}
      </div>
    </div>
  );
};

export default TeamDetails;
