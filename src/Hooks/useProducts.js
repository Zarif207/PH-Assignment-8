// import axios from "axios";
// import { useEffect, useState } from "react";

// const useProducts = () => {
//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true)
//     axios("AllApps.json")
//     .then((data) => setApps(data.data))
//     .catch(err => setError(err))
//     .finally(()=>setLoading)
//   }, []);

//   return apps, loading, error;
// };

// export default useProducts;


import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../AllApps.json")
      .then((res) => setApps(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));  // ✅ fixed missing () after setLoading
  }, []);

  // ✅ return an object, not separated by commas
  return { apps, loading, error };
};

export default useProducts;