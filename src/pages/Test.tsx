// import React, { useEffect, useState } from "react";

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
  return <div>Test</div>;
};

export default Test;
