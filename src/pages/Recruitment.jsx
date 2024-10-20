// こちらは、/recruitment 採用活動ページです
// 参考ページ: https://herp.careers/v1/wedinc

// import { Button } from "../components/Button";
// import { Image } from "../components/Image";
// import { useNavigate } from "react-router-dom";

export default function Recruitment() {
  // const navigate = useNavigate();

  return <div>
    <h1 className="p-10">
      WED株式会社(偽) のすべての求人一覧
    </h1>
    <RecruitItem title="title" subtitle="subtitle" description="description" />
    <RecruitItem title="title" subtitle="subtitle" description="description" />
    <RecruitItem title="title" subtitle="subtitle" description="description" />
    <RecruitItem title="title" subtitle="subtitle" description="description" />
    <RecruitItem title="title" subtitle="subtitle" description="description" />
  </div>;
}

function　RecruitItem({
  title,
  subtitle,
  description,
}){
  return(
    <div className="px-4 py-4">
      <div className="bg-card text-card-foreground p-4 rounded-lg shadow-md">
        <p className="border-l-4 border-blue-500 pl-4">
          {title}
        </p>
        <p>
          {subtitle}
        </p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}
