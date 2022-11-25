import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, Image } from 'antd'
import star from "../src/Assets/Images/star.png";
import noti from '../src/Assets/Images/notification.png';
import group from '../src/Assets/Images/group.png'
import './App.css';
import Dashboard from '../src/Sceens/Dashboard/Dashboard';

function App() {
  const submitpage = () => {
    console.log(name);
    console.log(mobile);
    console.log(email);
    console.log(dob);
    console.log(Income);
    console.log(gsttype);
    console.log(gstidnumber);
    console.log(digitnumber);
    console.log(occupation);
    console.log(Gender);
    console.log(nationality);

  }
  const [name, Setname] = useState('');
  const [dob, Setdob] = useState('');
  const [mobile, Setmobile] = useState('');
  const [occupation, Setoccupation] = useState('');
  const [email, Setemail] = useState('');
  const [Gender, Setgender] = useState('');
  const [Income, Setincome] = useState('');
  const [gsttype, Setgsttype] = useState('');
  const [gstidnumber, Setgstidnumber] = useState('');
  const [digitnumber, Setdigitnumber] = useState('');
  const [nationality, Setnationality] = useState('');
  const arr = [1993, 1992, 1991, 1994, 1995];
  const occupationList = ["doctor", "engineer"];
  const gender = ["male", "female"];
  const nationlity = ["india", "austraila"];
  function dobpage(e: any) {
    console.log(e.target.value);
    Setdob(e.target.value)
  }
  const occupationpage = (e: any) => {
    Setoccupation(e.target.value)
  }
  const genderpage = (e: any) => {
    Setgender(e.target.value)
  }
  const nationalitypage = (e: any) => {
    Setnationality(e.target.value);
  }
  return (
    <div className='container mt-3'>
      <Image src={star} width={100} /><span className='span'>propasal {">"} Create Proposal </span>
      <Image src={noti} width={20} className="noti" />
      <Image src={group} width={120} className="group" />
      <p>proposer Details</p>
      <p>Star Woman Care policy</p>
      <form>
        <div className='row'>
          <div className="form-group col-sm-12 col-lg-4 col-md-4" >
            <label>Name</label><span>*</span>
            <input className="form-control" value={name} onChange={e => Setname(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Date of Birth</label><span>*</span>
            <select className="form-control" id="dob" value={dob} onChange={dobpage}>
              {arr.map((e) => {
                return (
                  <option value={e}>{e}</option>
                )
              })}

            </select>
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Mobile</label><span>*</span>
            <input className="form-control" value={mobile} onChange={e => Setmobile(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>occupation</label><span>*</span>
            <select value={occupation} onChange={occupationpage} className="form-control" id="occupation">
              {occupationList.map((e) => {
                return (
                  <option value={e}>{e}</option>
                )
              })}
            </select>
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Email</label><span>*</span>
            <input className="form-control" value={email} onChange={e => Setemail(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Gender</label><span>*</span>
            <select className="form-control" id="gender" onChange={genderpage}>
              {gender.map((e) => {
                return (
                  <option value={e}>{e}</option>
                )
              })}
            </select>
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Annual Income</label><span>*</span>
            <input className="form-control" value={Income} onChange={e => Setincome(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>GST type</label>
            <input className="form-control" value={gsttype} onChange={e => Setgsttype(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>GST ID Number</label>
            <input className="form-control" value={gstidnumber} onChange={e => Setgstidnumber(e.target.value)} />
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Nationality</label>
            <select className="form-control" id="nationality" onChange={nationalitypage} value={nationality}>
              {nationlity.map((e) => {
                return (
                  <option value={e}>{e}</option>
                )
              })}
            </select>
          </div>
          <div className="form-group col-sm-12 col-lg-4 col-md-4">
            <label>Enter 4 digit number</label>
            <input className="form-control" value={digitnumber} onChange={e => Setdigitnumber(e.target.value)} />
          </div>

        </div>

        <div className='row'>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <Button className='back'>Back</Button>
          </div>

          <div className='col-sm-4 col-md-4 col-lg-4'>
            <Button className='draft'>save as draft</Button>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <Button className='next' onClick={submitpage}>Next</Button>
          </div>
        </div>

      </form>


    </div>

  );
}

export default App;
