import React, { forwardRef, useState } from 'react';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    state: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        alert('Form submitted successfully');
        setFormData({ username: '', email: '', dateOfBirth: '', phone: '', state: '' });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <div className="real-estate-section mt-[10vh] p-5 mx-5" ref={ref}>
      <form onSubmit={handleSubmit} className="search-form p-3">
        <h3 className="text-2xl px-5">Kontaktirajte nas</h3>
        <p className="text-lg">Popunite formu i očekujte odgovor sa naše strane u najskorijem roku</p>

        <div className="form-field-row">
          <div className="form-field">
            <label>Ime</label>
            <input
              type="text"
              name="username"
              placeholder="Ime"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Prezime</label>
            <input
              type="text"
              name="state"
              placeholder="Prezime"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-field-row">
          <div className="form-field">
            <label>Datum Rođenja</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Opština</label>
            <input
              type="text"
              name="state"
              placeholder="Opština"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-field">
          <label>Telefon</label>
          <input
            type="tel"
            name="phone"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="search-button mt-3">
          Pošalji Poruku
        </button>
      </form>
    </div>
  );
});

export default Contact;



