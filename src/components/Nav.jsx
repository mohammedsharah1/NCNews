import {Link} from "react-router-dom"
import styled from "styled-components";

const ArticlesDiv = styled.section`
    margin-top: 0.5%;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 0.5%;
    float: left;
    width: 50%;
    height: 50px;
    border: solid;
    border-radius: 5%;
    text-align: center;
    border-color: #a7bcb9;;
   
`

const Nav =()=>{
    return(
    <>
    <ArticlesDiv>
        
        <Link to ={"/articles"}>Articles</Link>
       
     </ArticlesDiv>
     <ArticlesDiv>
        
         <Link to ={"/topics"}>Topics</Link>

        
     </ArticlesDiv>
    </>
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
