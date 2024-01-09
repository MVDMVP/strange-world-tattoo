import React from 'react';
import './Contact.css';

const Book = () => {
  return (
    <form className='contact'>
      <h2>Book an Appointment</h2>

      <div className='row'>
        <div className='contact info column'>
          <p>Contact:</p>
          <label>
            <input className='input' type="text" id='name' placeholder='name' autoComplete='name' required />
          </label>
          <label>
            <input className='input' type="email" id='email' placeholder='email' autoComplete='email' required />
          </label>
          <label>
            <input className='input' type="tel" id='phone' placeholder='phone' autoComplete='tel' required />
          </label>
        </div>

        <div className="filter info column">
          <div className='select-label'>Inquiry Type:</div>
          <select className='input' name="type">
            <option value="tattoo">Tattoo</option>
            <option value="consultation">Consultation</option>
            <option value="touchup">Touchup</option>
            <option value="piercing">Piercing</option>
            <option value="inquiry">General inquiry</option>
          </select>

          <div className='select-label'>Preferred Artist:</div>
          <select className='input' name="artist">
            <option value="any">Any</option>
            <option value="olivia">Olivia</option>
            <option value="amanda">Amanda</option>
            <option value="abi">Abi</option>
            <option value="isa">Isa</option>
          </select>

          <div className='select-label'>Preferred Style:</div>
          <select className='input' name="style">
            <option value="linework">Linework</option>
            <option value="realism">Realism</option>
            <option value="traditional">Traditional</option>
            <option value="other">N/A</option>
          </select>
        </div>

        <div className='size info column'>
          <p>Placement & Size:</p>
          <input className='input' type="text" placeholder='location' required />
          <div className="row">
            <label>
              <input className='input' type="text" placeholder="width" style={{ width: '5em' }} required />
            </label>
            <label>
              <input className='input' type="text" placeholder="height" style={{ width: '5em' }} required />
            </label>
            <label>
              <input type="radio" name='unit' value='in' checked /> in
            </label>
            <label>
              <input type="radio" name='unit' value='cm' /> cm
            </label>
          </div>
        </div>
      </div>

      <label>
        Additional details:
        <br />
        <textarea
          className='input'
          name=""
          id=""
          cols="50"
          rows="5"
          placeholder='Message'
        ></textarea>
      </label>
      <br />

      <label>
        Reference images:
        <br />
        <input type="file" id="references" name="references" multiple />
      </label>
    </form>
  );
}

export default Book;
