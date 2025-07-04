import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { BlogArticle } from "@/types/blog";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { ErrorAlert } from "@/components/ui/error-alert";
import { formatDate } from "@/utils/date";
import { APP_CONSTANTS } from "@/constants/app";

const ArticlePage = () => {
  const { t, language } = useLanguage();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [content, setContent] = useState<string>("");
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const url = searchParams.get("url");

  // Extract article identifier from URL (e.g., "hello" from "hello-ro.md")
  const getArticleId = (url: string): string | null => {
    const match = url.match(/\/([^\/]+)-[a-z]{2}\.md$/);
    return match ? match[1] : null;
  };

  useEffect(() => {
    const fetchArticleData = async () => {
      if (!url) {
        setError("No article URL provided");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Try to get article metadata from localStorage first
        const cacheKey = `${APP_CONSTANTS.STORAGE_KEYS.BLOG_ARTICLES}-${language}`;
        const cachedArticles = localStorage.getItem(cacheKey);
        let articles: BlogArticle[] = [];
        
        if (cachedArticles) {
          articles = JSON.parse(cachedArticles);
        } else {
          // Fallback: fetch from server if not in cache
          const indexResponse = await fetch(APP_CONSTANTS.getArticlesIndexUrl(language));
          if (!indexResponse.ok) {
            throw new Error(`Failed to fetch article index: ${indexResponse.status}`);
          }
          articles = await indexResponse.json();
        }
        
        // First try to find the exact URL match
        let foundArticle = articles.find(article => article.url === url);
        
        // If not found, try to find by article ID (for language switching)
        if (!foundArticle) {
          const articleId = getArticleId(url);
          if (articleId) {
            foundArticle = articles.find(article => {
              const currentId = getArticleId(article.url);
              return currentId === articleId;
            });
            
            // If found by ID, update the URL parameter to the correct language version
            if (foundArticle) {
              const params = new URLSearchParams(searchParams);
              params.set('url', foundArticle.url);
              navigate(`/blog/article?${params.toString()}`, { replace: true });
              return; // Let the navigation trigger a new effect
            }
          }
        }
        
        if (!foundArticle) {
          throw new Error('Article not found');
        }
        
        setArticle(foundArticle);
        
        // Fetch markdown content
        const contentResponse = await fetch(foundArticle.url);
        if (!contentResponse.ok) {
          throw new Error(`Failed to fetch article content: ${contentResponse.status}`);
        }
        
        const markdownContent = await contentResponse.text();
        setContent(markdownContent);
      } catch (err) {
        console.error('Error fetching article:', err);
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };

    fetchArticleData();
  }, [url, language, navigate, searchParams]);


  return (
    <PageLayout currentPage="blog">
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              asChild
              className="mb-6 text-appOnSurface hover:text-appPrimary"
            >
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('blog.backToList')}
              </Link>
            </Button>
            
            <h1 className="text-3xl md:text-4xl font-bold text-appOnSurface mb-4">
              {article?.title || "Article"}
            </h1>
            
            {article?.date && (
              <p className="text-appOnSurface/70 mb-8">
                {formatDate(article.date)}
              </p>
            )}
          </div>

          {loading && <LoadingSpinner message="Loading article..." />}

          {error && <ErrorAlert message={error} />}

          {!loading && !error && content && (
            <div 
              className="prose prose-lg max-w-none prose-headings:text-appOnSurface prose-p:text-appOnSurface prose-strong:text-appOnSurface prose-code:text-appPrimary prose-pre:bg-appSurface prose-pre:border prose-pre:border-appSurfaceHighest prose-blockquote:border-l-appPrimary prose-blockquote:text-appOnSurface/80"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(marked.parse(content) as string)
              }}
            />
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default ArticlePage;