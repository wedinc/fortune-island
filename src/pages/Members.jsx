// import { Button } from "../components/Button";
// import { Image } from "../components/Image";
// import { useNavigate } from "react-router-dom";

export default function Members() {
  const members = [
    {
      name: "谷口　虎太郎",
      position: "CEO",
      imageUrl:
        "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG3Q84U0hdmI5CbRrT5cwicGZI5JjPyEJWXqQnQtKM2cHPPxr5EG13bD1EQTu_G6hwyqu9V7LjPC8EKtQNNct5zqbmgkhZ9n4tUWB4iLZA9wfKRuSqMqzACO4FViJGJOSzpXO5rdzgyOgMDCeAKIr_pdYVXTT5_BiRdSWfoWP9ynI6mZs_T9c7CTw1OyqiReqzCy-0P19h_S5_LwBYHUGY-vXlEwoK9VTLe6ubzKzLY7l1nQje3l579dhigMK78Jd94z0-kdKhTK1vGzBC7f8wUA=/mukimuki.png",
    },
    {
      name: "田畑　剣",
      position: "CTO",
      imageUrl:
        "https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG_omiYkNVym1Sd6g5T38MuS6fZBr-LbFe0dR914DFH_J9jHp241kLbOcpmATqdACa2vhSICfb-_cbbwTTs4nlD_PJQVfe0n_YVs5FK58NEAWoXAtSgGV-lyT6U6aV2P_xgz9APU_6jtg-AVSN-fy47F6vwc75HIhAVYK-8KjS7mq53k2HMCF4dwB3jteyPrITcI69Fn49CYOy-hgu3W0o2SrDkJTEuUVIh69bq7ezbDouwzncQvwvCvIJBk1YJVH1g==/GYaFGmJbIAA92BZ.jpglarge",
    },
    {
      name: "喜田　和樹",
      position: "Lead Developer",
      imageUrl: "/path/to/image3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-amber-100 text-foreground py-8">
      <div className="container mx-auto">
        <header className="bg-primary text-primary-foreground p-4">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl text-amber-950 font-bold">株式会社ヒト</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:underline text-amber-950">
                    ホーム
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline text-amber-950">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <h1 className="text-3xl font-bold mb-6 text-amber-950">
          ヒト会社の従業員一覧
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-card text-card-foreground p-6 rounded-lg shadow-lg"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold text-amber-950">
                {member.name}
              </h2>
              <p className="text-gray-500">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
