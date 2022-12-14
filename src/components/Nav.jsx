import {Link} from "react-router-dom"

const Nav =()=>{
    return(
    <div className="Navbar">
        <ul>
      
        <li><Link to ={"/articles"}>Articles</Link></li>
        <li><Link to ={"/topics"}>Topics</Link></li>
     
    </ul></div>
    )
}

export default Nav




































// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { getTopics } from "../api";

// const Nav = () => {
//   const [topics, setTopics] = useState([]);

//   useEffect(() => {
//     getTopics().then((topics) => {
//       setTopics(topics);
//       console.log(topics)
//     });
//   }, []);
//   return (
//     <ul className="nav">
//       {topics.map((topic) => {
//         return (
//           <Link to={`/articles/${topic.slug}`} key={topic.slug}>
//             <h3>{topic.slug}</h3>
//           </Link>
//         );
//       })}
//     </ul>
//   );
// };

// export default Nav;
