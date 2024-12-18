import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types';
import { Heart, MessageSquare, Share2 } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article.id}`);
  };

  return (

    <div
      className={`article-card ${isExpanded ? 'article-card-expanded' : 'article-card-collapsed'}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleClick}
    >
      <img
        src={`https://picsum.photos/200/300?random=${article.id}`}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">{article.title}</h2>
        <p className="text-gray-600">
          {/* {isExpanded ? article.content.slice(0, 200) + '...' : article.excerpt} */}
        </p>
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center space-x-2">
            {/* <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-8 h-8 rounded-full"
            /> */}
            <span className="text-sm text-gray-600">{article.by}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span className="text-sm text-gray-500">Score: </span>
              <span className="text-sm text-gray-500">{article.score}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};