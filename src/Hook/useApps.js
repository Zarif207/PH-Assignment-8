import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios("AllApps.json")
    .then((applicationsData) => setApps(applicationsData.applicationsData))
    .catch(err => setError(err))
    .finally(()=>setLoading)
  }, []);

  return apps, loading, error;
};

export default useApps;
