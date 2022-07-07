import React, { Component } from 'react';
import "./Assets/Style.css";
import { Axios } from "axios";

interface IData {
	Headline: string,
	Description: string,
	Succes: string
}

interface IResponse {
	family: string,
	subsets: Object,
	version: string,
	category: string,
	variants: Object
}

class SettingsMenu extends Component {
	constructor(props : any) {
		super(props);
		this.state = {
			result : "h"
		}
	}
	// result = axios.get("https://apiv2.popupsmart.com/api/googlefont").then((res) => {
	// 	console.log(res.data[0]);
	// });
	dataa: Array<IData> = [
		{
			"Headline": "NEWW STUFF",
			"Description": "Sign up for our newsletter and get 15% off your first order!",
			"Succes": "Succes"
		},
	]
	Axios.get<IResponse>("https://apiv2.popupsmart.com/api/googlefont").then((item) => {

	});
	//listFonts : any = JSON.parse(this.result.toString());
	render() {
		return (
			<div className="main">
				<div className="setmenu">
					<h2 id="title">General Settings</h2>

					<p id="headlineText">Headline</p>
					<input type="text" id="headline" name="headline" value={this.dataa[0].Headline} />

					<p id="descriptionText">Description</p>
					<input type="text" id="description" name="description" value={this.dataa[0].Description} />

					<p id="succesText">Succes Message</p>
					<input type="text" id="succes" value={this.dataa[0].Succes} />

				</div>
				<div className="content">
					<div className="card">
						<h2 id="cardTitle">{this.dataa[0].Headline}</h2>
						<p id="cardDescription">{this.dataa[0].Description}</p>
						<input type="text" name="name" id="name" />
						<input type="text" name="email" id="email" />
						<select name="fonts" id="fonts">
							{
								this.result.map((item : any) => {
									return(
										<option>{item}</option>
									)
								})
							}
							{/* <option value="audi">Audi</option> */}
						</select>
					</div>
				</div>
			</div>
		);
	}
}

export default SettingsMenu;