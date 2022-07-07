import React, { Component } from 'react';

class Content extends Component {
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Content;

// import React, { Component } from 'react';
// import "./Assets/Style.css";
// import axios from "axios";

// /*
//     Açılır pencerede aiden gelen fontların "family" değeri görüntülenecek,
//     Kategorisi monospace olanlar görüntülenmeyecek( A'dan Z'ye ),

// */

// interface IProps {
//     data : any
// }

// interface IState {
//     Headline: string,
//     Description: string,
//     Succes: string
// }

// class Content extends Component<IProps> {
//     constructor(props : IProps) {
//         super(props)
//         console.log(props)
//         this.state = [{}]
//     }
//     state: Array<IState> = [
// 		{
// 			"Headline": "NEWW STUFF",
// 			"Description": "Sign up for our newsletter and get 15% off your first order!",
// 			"Succes": "Succes"
// 		},
// 	];
//     axios.get("https://apiv2.popupsmart.com/api/googlefont");
//     Refresh() {
//         const result = fetch("https://apiv2.popupsmart.com/api/googlefont");
//         this.setState(result);
//         console.log(result);
//     }
//     render() {
//         return (
//             <div className="content">
//                 <div className="card">
//                     <h2>{}</h2>
//                     <input type="text" name="email" />
//                     <input type="text" name="" />
//                     <select name="fonts" id="fonts">
//                         { 
//                             this.state.data.map((index : any) => {
//                                 <option >{index[0].family}</option>
//                             })
//                         }
//                         {/* <option value="audi">Audi</option> */}
//                     </select>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Content;