import React, { Component } from 'react';
import "./Assets/Style.css";
import axios from "axios";

interface IResponse {
	family: string,
	subsets: Object,
	version: string,
	category: string,
	variants: Object
}

class SettingsMenu extends Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			data: [],
			statu: 0,
			settings: {
				Headline: "NEW STUFF",
				Description: "Sign up for our newsletter and get 15% off your first order!",
				Succes: "Succes"
			},
			form: {
				Name: "",
				Email: ""
			}
		}
		this.buttonClick = this.buttonClick.bind(this);
	}
	HeadlineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			settings: {
				Headline: event.target.value,
				Description: this.state.settings.Description,
				Succes: this.state.settings.Succes
			}
		});
	}

	DescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			settings: {
				Headline: this.state.settings.Headline,
				Description: event.target.value,
				Succes: this.state.settings.Succes
			}
		});
	}

	SuccesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			settings: {
				Headline: this.state.settings.Headline,
				Description: this.state.settings.Description,
				Succes: event.target.value
			}
		});
	}

	componentDidMount() {
		axios.get<IResponse>("https://apiv2.popupsmart.com/api/googlefont").then((item) => {
			this.setState({ data: item.data });
			console.log(this.state.data);
		});
	}

	nameChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			data: this.state.data,
			statu: this.state.statu,
			settings: this.state.settings,
			form: {
				Name: event.target.value,
				Email: this.state.form.Email
			}
		});
	}

	emailChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({
			data: this.state.data,
			settings: this.state.settings,
			statu: this.state.statu,
			form: {
				Name: this.state.form.Name,
				Email: event.target.value
			}
		});
	}

	buttonClick() {
		var email = this.state.form.Email;
		if ("@" in email || email.length() <= 7 || "." in email) {
			this.setState({
				data: this.state.data,
				settings: this.state.settings,
				statu: 1,
				form: {
					Name: this.state.form.Name,
					Email: this.state.form.Email
				}
			});
		} else {
			this.setState({
				data: this.state.data,
				settings: this.state.settings,
				statu: 0,
				form: {
					Name: this.state.form.Name,
					Email: this.state.form.Email
				}
			});
		}
	}

	render() {
		if (this.state.statu === 0) {
			return (
				<div className="main">
					<div className="setmenu">
						<h2 id="title">General Settings</h2>

						<p id="headlineText">Headline</p>
						<input type="text" id="headline" name="headline" onChange={e => this.HeadlineChange(e)} defaultValue={this.state.settings.Headline} />

						<p id="descriptionText">Description</p>
						<input type="textarea" id="description" name="description" onChange={e => this.DescriptionChange(e)} defaultValue={this.state.settings.Description} />

						<p id="succesText">Succes Message</p>
						<input type="text" id="succes" onChange={e => this.SuccesChange(e)} defaultValue={this.state.settings.Succes} />

					</div>
					<div className="content">
						<div className="card">
							<button id="quit">x</button>
							<h2 id="cardTitle">{this.state.settings.Headline}</h2>
							<p id="cardDescription">{this.state.settings.Description}</p>
							<input type="text" onChange={e => this.nameChange(e)} name="Name" id="name" />
							<input type="text" name="email" onChange={e => this.emailChange(e)} id="email" />
							<select name="fonts" id="fonts">
								{
									this.state.data.map((item: any) => {
										if (item.family !== "monospace") {
											return <option>{item.family}</option>
										}
									})
								}
								{/* <option value="audi">Audi</option> */}
							</select>
							<button onClick={this.buttonClick} />
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="main">
					<div className="setmenu">
						<h2 id="title">General Settings</h2>

						<p id="headlineText">Headline</p>
						<input type="text" id="headline" name="headline" onChange={e => this.HeadlineChange(e)} defaultValue={this.state.settings.Headline} />

						<p id="descriptionText">Description</p>
						<input type="textarea" id="description" name="description" onChange={e => this.DescriptionChange(e)} defaultValue={this.state.settings.Description} />

						<p id="succesText">Succes Message</p>
						<input type="text" id="succes" onChange={e => this.SuccesChange(e)} defaultValue={this.state.settings.Succes} />

					</div>
					<div className="content">
						<div className="card">
							<img src="../Subtract.svg" id="succesimage" />
						</div>
					</div>
				</div>	
			);
		}
	}
}

export default SettingsMenu;