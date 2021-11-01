import React, { useState } from 'react';

const AlbumCards = () => {
  const [album] = useState([
    { name: 'Ideal for Living', year: '1978', img: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/JoyDivision_IdealForLiving_.jpg/220px-JoyDivision_IdealForLiving_.jpg" },
    { name: 'Unknown Pleasures', year: '1979', img: "https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg" },
    { name: 'Closer', year: '1980', img: "https://upload.wikimedia.org/wikipedia/en/6/64/Joy_Division_Closer.jpg" },
    { name: 'Still', year: '1981', img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Still1981.jpg/220px-Still1981.jpg" },
    { name: 'Substance', year: '1988', img: "https://upload.wikimedia.org/wikipedia/en/8/81/Joy_Division-Substance_%28album_cover%29.jpg" }
  ])

  const renderRows = () => {
    return album.map(a => <tr><td>{a.name}</td><td>{a.year}</td><td><img src={a.img} /></td></tr>)
  }

  return (
    <table style={{ border: "1px solid grey", width: "100vw", textAlign: "center" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        { renderRows() }
      </tbody>
    </table>
  );
};

export default AlbumCards;