import React from "react";

function Card({title, url , content}){
    return(
       <div>
       <h1>Food Card</h1>
       <div className="grid-container">
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2021-03/91.%20branch%20teaser%20image%20290x370.jpg" alt=" "/>
        </div>
        <h3>Zirakpur</h3>
        <p>2nd Floor, Dhillon Avenue,Chatt Road,Village-Singhpura, Zirakpur, SAS Nagar,PIN-140603,Punjab</p>
        </div>
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-01/kormangala_be0d5e47d9addc1774cac4ad9dc838e5.jpg" alt=" "/>
        </div>
        <h3>Koramangla</h3>
        <p>
        1st Cross Rd, 1st Block Koramangala, Koramangala, Bengaluru, Karnataka 560034, India
      </p>
        </div>
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-01/kalyan.jpg" alt=" "/>
        </div>
        <h3>Kalyan Nagar</h3>
        <p>
        No. 30, B.R.Plaza, 3rd Floor, 4th Cross, CMR Road, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India
      </p>
        </div>
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-01/Ahmedabad%20PN.jpg" alt=" "/>
        </div>
        <h3>Elpro Mall</h3>
        <p>
 
        3rd Floor,Elpro City Square Mall, Pune,Maharashtra 411033
      </p>
        </div>
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-01/thrissur.jpg" alt=" "/>
        </div>
        <h3>Selex Mall</h3>
        <p>
 
        2nd Floor, Selex Mall, Eastfort, Thrissur, Kerala 680005, India
                            
      </p>
        </div>
        <div className="card">
        <div className="image">
        <img src="https://d23ynomj6u3eig.cloudfront.net/sites/default/files/2020-01/Kondapur.jpg" alt=" "/>
        </div>
        <h3>Kondapur</h3>
        <p>
    
        G-3 , Sri Mythri Square , Opp Sarath City Mall , Kothaguda (Kondapur )Hyderabad - 500084 . 
                            
      </p>
        </div>

        </div>
        </div>
    )
}
export default Card