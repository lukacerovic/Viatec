import React, { forwardRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    phone: '',
    state: '',
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setIsModalOpen(true);
        setFormData({ username: '', lastName: '', email: '', dateOfBirth: '', phone: '', state: '' });
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      alert('Error submitting form');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const Modal = () => {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
        <div className="bg-white rounded-lg p-6 shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Vaša forma je uspešno poslata!</h2>
          <p className="text-base">
            Hvala Vam na ostavljenim informacijama. Očekujte naš odgovor u najskorijem roku.
            <br />
            Srdačan pozdrav, Vaš <span className="font-bold">Viatec</span>.
          </p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-[#6c2636] text-white rounded-md hover:bg-[#b72f4f]"
          >
            Zatvori
          </button>
        </div>
      </div>,
      document.getElementById('modal')
    );
  };

  return (
    <div className="real-estate-section mt-[10vh] p-5 mx-5 flex justify-center" ref={ref}>
      <form onSubmit={handleSubmit} className="search-form p-3 flex flex-col md:justify-between">
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
              name="lastName"
              placeholder="Prezime"
              value={formData.lastName}
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

      {isModalOpen && <Modal />}
    </div>
  );
});

export default Contact;

