<div className="main">
                <div className="setmenu">
                    <h2 id="title">General Settings</h2>

                    <p id="headlineText">Headline</p>
                    <input type="text" id="headline" name="headline" onChange={e => this.HeadlineChange(e)} defaultValue={this.state.settings.Headline} />

                    <p id="descriptionText">Description</p>
                    <input type="text" id="description" name="description" onChange={e => this.DescriptionChange(e)} defaultValue={this.state.settings.Description} />

                    <p id="succesText">Succes Message</p>
                    <input type="text" id="succes" onChange={e => this.SuccesChange(e)} defaultValue={this.state.settings.Succes} />

                </div>
                <div className="content">
                    <div className="card">
                        <h2 id="cardTitle">{this.state.settings.Headline}</h2>
                        <p id="cardDescription">{this.state.settings.Description}</p>
                        <input type="text" onChange={e => this.nameChange(e)} name="Name" id="name" />
                        <input type="text" name="email" onChange={e => this.emailChange(e)} id="email" />
                        <select name="fonts" id="fonts">
                            {
                                this.props.data.map((item: any) => {
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