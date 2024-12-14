import React from "react";
import "./CardEditOverlay.css";

export const CardEditOverlay = ({ isOpen, onClose, onSubmit, initialData = { title: '', body: '' } }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      heading: formData.get('title'),
      body: formData.get('body')
    });
    onClose();
  };

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2 className="overlay-title">
          {initialData.heading ? 'Upraviť článok' : 'Pridať článok'}
        </h2>
        <button className="close-button" onClick={onClose}>
          <span className="sr-only">Close</span>
          ✕
        </button>
        <form onSubmit={handleSubmit}>
          <div className="form-group-overlay">
            <label htmlFor="title">Nazov:</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={initialData.heading}
              placeholder="Nazov clanku dajte sem"
              required
            />
          </div>
          <div className="form-group-overlay-text-field">
            <label htmlFor="body">Text:</label>
            <textarea
              id="body"
              name="body"
              defaultValue={initialData.body}
              placeholder="Text clanku dajte sem"
              required
            />
          </div>
          <div className="form-actions">
            <button type="button" className="file-button">
              <h2>📎</h2>
              Pridať subor
            </button>
            <button type="submit" className="submit-adding-card-button">
              Potvrdiť
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

