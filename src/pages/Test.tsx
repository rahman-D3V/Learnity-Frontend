// import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { logout } from "../services/opeartions/authApi";

// const Test = () => {
//   const [name, setName] = useState([]);
//   const [err, setErr] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isAbort, setIsAbort] = useState(false);

//   async function getData() {
//     const controller = new AbortController();

//     setLoading(true);
//     setErr("");
//     setIsAbort(false);

//     const timeoutId = setTimeout(() => {
//       controller.abort();
//       setIsAbort(true);
//     }, 3000);

//     try {
//       const res = await fetch("http://localhost:3000/yasir", {
//         signal: controller.signal,
//       });

//       clearTimeout(timeoutId);

//       // read response once
//       const data = await res.json().catch(() => null);

//       if (!res.ok) {
//         throw new Error(data?.message || "Failed to fetch data");
//       }

//       setName(data);
//     } catch (error) {
//       if (error.name === "AbortError") {
//         console.log("Request aborted");
//         return;
//       }

//       setErr(error.message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (err) return <div>Error: {err}</div>;

//   return (
//     <div>
//       Test
//       {name.map((i) => (
//         <p key={i.id}>{i.name}</p>
//       ))}
//       {isAbort && <button onClick={getData}>Retry</button>}
//     </div>
//   );
// };

// export default Test;

const Test = () => {

  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : {} 

  const navigate = useNavigate()

  function handle(){
    logout(navigate)
  }

  return <div>Test
   <h1>Welcome {user.firstName}</h1>
   <img className="h-50" src={user.image} alt="" />
   <h1 className="text-2xl inline bg-amber-700" onClick={handle}>Logout</h1>
  </div>;
};

export default Test;
