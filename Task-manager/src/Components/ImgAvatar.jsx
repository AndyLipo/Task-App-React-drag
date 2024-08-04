// import React from 'react';
// import { Image } from 'react-bootstrap';
// import './AvatarGroup.css';
// import Img1 from '../assets/img1.jpg';
// import Img2 from '../assets/img2.jpg';
// import Img3 from '../assets/img3.jpg';

// const avatars = [
//   { id: 1, src: Img1, alt: 'Avatar 1' },
//   { id: 2, src: Img2, alt: 'Avatar 2' },
//   { id: 3, src: Img3, alt: 'Avatar 3' },
// ];

// function AvatarGroup() {
//   return (
//     <div className="avatar-group">
//       {avatars.map((avatar) => (
//         <div key={avatar.id} className="avatar-item">
//           <Image src={avatar.src} alt={avatar.alt} roundedCircle className="avatar-img" />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AvatarGroup;

import React from 'react';
import { Image } from 'react-bootstrap';
import './AvatarGroup.css';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';

const avatars = [
  { id: 1, src: Img1, alt: 'Avatar 1' },
  { id: 2, src: Img2, alt: 'Avatar 2' },
  { id: 3, src: Img3, alt: 'Avatar 3' },
];

function AvatarGroup() {
  return (
    <div className="avatar-group">
      {avatars.map((avatar) => (
        <div key={avatar.id} className="avatar-item">
          <Image src={avatar.src} alt={avatar.alt} roundedCircle className="avatar-img" />
        </div>
      ))}
    </div>
  );
}

export default AvatarGroup;
