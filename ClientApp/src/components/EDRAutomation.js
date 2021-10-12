import React, { Component } from 'react';

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBDataTableV5 } from "mdbreact";
export class EDRAutomation extends Component {
    static displayName = EDRAutomation.name;
    constructor(props) {
        super(props);
        this.state = {
            datatable: {
                columns: [
                    {
                        label: 'File Name',
                        field: 'name',
                        width: 150,
                        attributes: {
                            'aria-controls': 'DataTable',
                            'aria-label': 'File Name',
                        },
                    },
                    {
                        label: '',
                        field: 'action',
                        width: 270,
                    }
                ],
                rows: [
                    {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    },
                    {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    }, {
                        name: 'fileAs-asasjas-.xlsx',
                        action: 'X'
                    },
                ],
            }
        };
    }


    render() {
       
        return (
            <MDBRow>
                <MDBCol lg="5" className="lg-0 mb-4">
                    <MDBCard>
                        <MDBCardBody className='elegant-color white-text rounded-bottom'>
                            <div data-test="container" class="container-fluid section mb-5 border p-3">
                        <h1>Site Information:</h1>
                        <p>
                                    Enter your site information exactly the way you
                                    want it to be listed in the Arcadis Phase I report.
                        </p>
                        <div>
                        <label for="defaultFormRegisterNameEx" class="grey-text">Site Name</label>
                        <input type="text" id="defaultFormRegisterNameEx" class="form-control" />
                        <br></br>
                        <label for="defaultFormRegisterEmailEx" class="grey-text">Client</label>
                        <input type="email" id="defaultFormRegisterEmailEx" class="form-control" />
                        <br></br>
                        <label for="defaultFormRegisterConfirmEx" class="grey-text">Site Address</label>
                        <input type="email" id="defaultFormRegisterConfirmEx" class="form-control" />
                        <br></br>
                        <label for="defaultFormRegisterPasswordEx" class="grey-text">City</label>
                        <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
                        <br></br>
                        <label for="defaultFormRegisterPasswordEx" class="grey-text">Country</label>
                        <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
                        <br></br>
                        <label for="defaultFormRegisterPasswordEx" class="grey-text">State</label>
                        {/*<MDBDropdown>*/}
                        {/*    <MDBDropdownToggle caret color="primary">*/}
                        {/*        Dropdown*/}
                        {/*    </MDBDropdownToggle>*/}
                        {/*    <MDBDropdownMenu basic >*/}
                        {/*        <MDBDropdownItem>Action</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem>Another Action</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem>Something else here</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem divider />*/}
                        {/*        <MDBDropdownItem>Separated link</MDBDropdownItem>*/}
                        {/*    </MDBDropdownMenu>*/}
                        {/*</MDBDropdown>*/}
                        {/*<br></br>*/}
                        {/*<label for="defaultFormRegisterPasswordEx" class="grey-text">Phase | Report Template</label>*/}
                        {/*<MDBDropdown>*/}
                        {/*    <MDBDropdownToggle caret color="primary">*/}
                        {/*        Dropdown*/}
                        {/*    </MDBDropdownToggle>*/}
                        {/*    <MDBDropdownMenu basic >*/}
                        {/*        <MDBDropdownItem>Action</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem>Another Action</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem>Something else here</MDBDropdownItem>*/}
                        {/*        <MDBDropdownItem divider />*/}
                        {/*        <MDBDropdownItem>Separated link</MDBDropdownItem>*/}
                        {/*    </MDBDropdownMenu>*/}
                        {/*    </MDBDropdown>*/}
                            </div>
                    </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol lg="7">
                    <MDBCard className='elegant-color white-text rounded-bottom'>
                        <MDBCardBody>
                            <h1>EDR Automation</h1>
                    <br></br>
                    <h4>File Upload</h4>
                    <br></br>
                    <p>
                                Upload the complete EDR report packages, including Radius Map with GeoCheck, aerial photos, topo map, city directory, and Sanborn reports where available.  Click Submit to create the Arcadis Phase I report.
                    </p>
                    <br></br>
                    <input type="file" id="defaultFormRegisterPasswordEx" class="form-control" />
                    <br></br>
                    <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={this.state.datatable} />

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
           
        );
    }
}
