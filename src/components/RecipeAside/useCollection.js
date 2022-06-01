import { collection, doc, onSnapshot, query } from "firebase/firestore";
import React, { useEffect } from "react";

const useCollection = (c, filterObject = {}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    let unsub;
    let ref = collection(db, "recept");
    const filters = Object.entries(filters);
    if (filters.lenght === 0) {
      unsub = onSnapshot(ref, (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setData(results);
      });
    } else {
      const queries = filters.map(([field, value]) =>
        query(ref, where(field, "in", value))
      );
           unsub = onSnapshot(...queries, (snapshot) => {
        let results = [];
        // dit zou je al moeten zien... 
        console.log(snapshot);
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        setData(results);
      });
    }
    return () => unsub();
  }, [c.JSON.StringFy(filterObject)]);

  return <div>useCollection</div>;
};

export default useCollection;
