// こちらは、/members メンバー紹介ページです

// import { Button } from "../components/Button";
// import { Image } from "../components/Image";
// import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Members() {

  // const navigate = useNavigate();

  return <div>
  <h1 className='p-10'>
    =メンバー紹介=
  </h1>
          <UserInfo  imageUrl="https://avatars.githubusercontent.com/u/174174755?v=4" name="hayashi" description="a" />
          <UserInfo imageUrl="https://avatars.githubusercontent.com/u/174078296?v=4" name="hashimoto" description="i" />
          <UserInfo imageUrl="https://avatars.githubusercontent.com/u/167418137?v=4" name="sato" description="c" />
        </div>;
}

function UserInfo({
  name,
  imageUrl,
  description,
}){
  return (
    <div className="px-16 py-8">
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
        <div className="p-2 flex items-center">
          <img className=' border-3 border-black-500 rounded-full w-40' src={imageUrl} alt="img" />
          <p className='ml-4 text-left p-4 text-3xl'>
            {name}
          </p>
        </div>
        <div>
          <p className='text-xl p-10'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
