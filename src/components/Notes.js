import React from 'react';

function Arrays() {
  const [thingsArray, setThingsArray] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    setThingsArray((prevThingsArray) => {
      return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
    });
  }

  const thingsElements = thingsArray.map((thing) => <p>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

function Objects() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: false,
  });

  let starIcon = contact.isFavorite
    ? './images/.......png'
    : './images/.......2.png';
  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <main>
      <img src={starIcon} onClick={toggleFavorite} />
    </main>
  );
}

function Form() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: '',
    isFriendly: true,
    employment: '',
    favColor: '',
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='First Name'
        onChange={handleChange}
        name='firstName'
        value={formData.firstName}
      />
      <input
        type='text'
        placeholder='Last Name'
        onChange={handleChange}
        name='lastName'
        value={formData.lastName}
      />
      <input
        type='email'
        placeholder='Email'
        onChange={handleChange}
        name='email'
        value={formData.email}
      />
      <textarea
        placeholder='Comments'
        onChange={handleChange}
        name='comments'
        value={formData.comments}
      />
      <input
        type='checkbox'
        id='isFriendly'
        onChange={handleChange}
        checked={formData.isFriendly}
        name='isFriendly'
      />
      <label htmlFor='isFriendly'>Are you friendly?</label>
      <br />
      <br />

      <fieldset>
        <legent>Current employment status</legent>
        <input
          type='radio'
          name='employment'
          id='unemployed'
          value='unemployed'
          checked={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        <label htmlFor='unemployed'>Unemployed</label>
        <br />

        <input
          type='radio'
          name='employment'
          id='part-time'
          value='part-time'
          checked={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        <label htmlFor='part-time'>Part-time</label>
        <br />

        <input
          type='radio'
          name='employment'
          id='full-time'
          value='full-time'
          checked={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
      <br />

      <label htmlFor='favColor'>What is your favorite color?</label>
      <br />
      <select
        id='favColor'
        name='favColor'
        onChange={handleChange}
        value={formData.favColor}
      >
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
