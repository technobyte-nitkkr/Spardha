import { useState, useEffect } from "react";
import Image from "next/image";
import "./TeamAnimation.css";

interface ContactsResponse {
  data: { contacts: Societies[] }
  success: boolean
}
interface Societies {
  section: string,
  logo: string,
  people: Members[]
}
interface Members {
  imageUrl: string,
  name: string,
  post: string
}

const TeamAnimation = () => {
  const [team, setTeam] = useState<Members[] | undefined | null>([]);
  const [team1, setTeam1] = useState<Members[] | undefined | null>([]);
  const [team2, setTeam2] = useState<Members[] | undefined | null>([]);
  const shuffleArray = (array: Members[]): Members[] => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j: number = Math.floor(Math.random() * (i + 1));
      const temp: Members = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const getData = () => {
    fetch("https://us-central1-techspardha-87928.cloudfunctions.net/api2/contacts")
      .then(res => res.json())
      .then((res: ContactsResponse) => {
        const array: Members[] = [];
        let array1: Members[] = [];
        let array2: Members[] = [];
        const arr: Societies[] = res.data.contacts;
        arr.forEach(e => {
          e.people.forEach(people => {
            array.push(people);
            array1.push(people);
            array2.push(people);
          })
        })
        array1 = shuffleArray(array1);
        array2 = shuffleArray(array2);
        setTeam(array);
        setTeam1(array1);
        setTeam2(array2);
      })
      .catch((err: Error) => err);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="team-slider">
      <div className="diamond-shape-outer">
        <div className="team-divide">
          {team
            ? team.map((x, i: number) => {
              return (
                <div className="diamond" key={i}>
                  <div className="diamond-shape">
                    <Image alt="Loading" height={2000} width={2000} src={x.imageUrl} />
                  </div>
                </div>
              );
            })
            : "no found"}
        </div>
        <div className="team-divide team-middle">
          {team1
            ? team1.map((x, i: number) => {
              return (
                <div className="diamond" key={i}>
                  <div className="diamond-shape">
                    <Image height={2000} width={2000} alt="Loading" src={x.imageUrl} />
                  </div>
                </div>
              );
            })
            : "no found"}
        </div>
        <div className="team-divide team-bottom">
          {team2
            ? team2.map((x) => {
              return (
                <div key={x.imageUrl} className="diamond">
                  <div className="diamond-shape">
                    <Image alt="Loading" height={2000} width={2000} key={x.imageUrl} src={x.imageUrl} />
                  </div>
                </div>
              );
            })
            : "no found"}
        </div>
      </div>
    </div>
  );
}

export default TeamAnimation;