const profile = {
    name: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://pixabay.com/get/ge52109ec9d38581d8d6e628645bb0ba787af350447a38a1fa6634a2c124341a9846d69df4a4d31a753bf5de5cf1ddd5bfdd3ff2aff55552edf65b2d89f0e3f298b1386d3ca4785785cc517bd55e4def4_640.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  
  const makeProfileMarkup = function (userProfile) {
    const {
      avatar = 'https://i.pravatar.cc/400?img=6',
      name,
      tag,
      location = 'Planet Earth',
      stats: { followers, views, likes },
    } = userProfile;
  
    return `<div>
      <img src="${avatar}"  width="200" alt="user avatar">
      <p>${name}<span>@${tag}</span></p>
      <p>Location: ${location}</p>
      <ul>
        <li>Followers: ${followers}</li>
        <li>Views: ${views}</li>
        <li>Likes: ${likes}</li>
      </ul>
    </div>`;
  };
  
  const markup = makeProfileMarkup(profile);
  
  console.log(markup);
  
  document.body.insertAdjacentHTML('afterbegin', markup);