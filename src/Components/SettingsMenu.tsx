import React, { Component } from 'react';
import "./Assets/Style.css";
import axios from "axios";
import { ListFormat } from 'typescript';

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
			data: {
				array: [],
				originData: null,
				categoryData: null
			},
			statu: 0,
			settings: {
				Headline: "NEW STUFF",
				Description: "Sign up for our newsletter and get 15% off your first order!",
				Succes: "Succes"
			},
			form: {
				Name: "",
				Email: "",
				Statu: 0
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
		axios.get("https://apiv2.popupsmart.com/api/googlefont").then((item) => {
			var newData : string[] = [];
			item.data.map((item : any) => {
				newData.push(item.family);
			});
			newData.sort();
			this.setState({data: {array: newData, originData: item}});
		});
		console.log(this.state);
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
				Email: event.target.value,
				Statu: 0
			}
		});
	}

	buttonClick() {
		var email : string[] = this.state.form.Email.split("");
		console.log(email);

		if ("@" in email === true || "." in email) {
			this.setState({
				data: this.state.data,
				settings: this.state.settings,
				statu: 1,
				form: {
					Name: this.state.form.Name,
					Email: this.state.form.Email,
					Statu: 1
				}
			});
		}else if(email.length <= 0) {
			this.setState({
				data: this.state.data,
				settings: this.state.settings,
				statu: 1,
				form: {
					Name: this.state.form.Name,
					Email: this.state.form.Email,
					Statu: 2
				}
			});
		} else {
			this.setState({
				data: this.state.data,
				settings: this.state.settings,
				statu: 0,
				form: {
					Name: this.state.form.Name,
					Email: this.state.form.Email,
					Statu: 3
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
						<svg id="background"></svg>
						<div className="card">
							<button id="quit">X</button>
							<div>
							<h2 id="cardTitle">{this.state.settings.Headline}</h2>
							<li><p id="cardDescription">{this.state.settings.Description}</p></li>
								<li><input placeholder="Your name" type="text" onChange={e => this.nameChange(e)} name="Name" id="name" /></li>
								<li><input placeholder="Your email" type="text" name="email" onChange={e => this.emailChange(e)} id="email" /></li>
									{
										this.state.form.Statu === 2 &&
											<p id="warnM"><svg id="warn"></svg> This field is required</p>
									}
									{
										this.state.form.Statu === 3 &&
											<p id="warnM"><svg id="warn"></svg> Invalid email address</p>
									}
								<li><select name="fonts" id="fonts">
									<option key="Select Font">Select Font</option>
									{
										this.state.data.array.map((item: any) => {
											console.log(this.state.data.originData[item.category]);
											if (this.state.data.originData[item.category] !== "monospace") {
												return <option key={item}>{item}</option>
											}
										})
							   		}
								</select></li>
								<li><button id="submit" onClick={this.buttonClick}>GET MY 30% OFF</button></li>
							</div>
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