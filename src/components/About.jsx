import Progress_bar from "./Progress_bar";
let image = require("../photo.jpg");

 const About= ()=>{
     return(
         <div className="about">
            <h1>About Me</h1>
            <div className="about-content">
                <img src={image.default} alt="image not found" height="400px" width="400px"/>
                <div className="about-text">
                <table>
                    <tr>
                        <td>Name:</td>
                        <td>Manish Verma:</td>
                    </tr>
                    <tr>
                        <td>College:</td>
                        <td>Acharya Institute of Technology,Bengaluru</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><a href="mailto:vmanish219@gmail.com">vmanish219@gmail.com </a>/<a href="mailto:manishr.19.beis@acharya.ac.in">manishr.19.beis@acharya.ac.in</a></td>
                    </tr>
                    <tr>
                        <td>Contact:</td>
                        <td><a href="tel:8750302751">+91-8750302751</a></td>
                    </tr>
                </table>
                <br></br>
                <p>Iam a self taught Full Stack Developer. I started coding in 2016 in Class 11th where I learned C++. I love to learn about new technolgies. Currently Iam in 3rd year of Engg. with a CGPA of 8.6(till 4th Sem).</p>
                <br />
                
                <ul>
                    <li>I can design website from scratch using frameworks like Node and Express.</li>
                    <li>I can design REST APIs, and implement CRUD operations.</li>
                    <li>Currently learning React to make Single Page Applications.</li>
                </ul>
                </div>
                
            </div>
            <div className="skills">
                    <h1>Skills and Technology</h1>
                    <Progress_bar label="Javascript" value="80" />
                    <Progress_bar label="Node & Express" value="70" />
                    <Progress_bar label="Databases" value="65" />
                    <Progress_bar label="React JS" value="60" />
                    <Progress_bar label="C,C++ and Data Structures" value="75" />
                    <Progress_bar label="Serenity" value="100" />

                </div>
         </div>
     )
 }

 export default About;