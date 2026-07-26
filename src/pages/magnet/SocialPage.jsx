import { Link } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { PageBadge } from "../../components/content/PageBadge";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../../data/magnetCategories";

const category = MAGNET_CATEGORIES.find((c) => c.type === "social");

function SocialTile({ article }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group relative block aspect-square overflow-hidden rounded-xl bg-secondary-soft"
    >
      {article.coverImageUrl && (
        <img
          src={article.coverImageUrl}
          alt={article.coverImageAlt || article.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="line-clamp-3 font-serif text-sm leading-snug text-paper sm:text-base">
          {article.title}
        </h3>
      </div>
    </Link>
  );
}

export default function SocialPage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "social", max: 60 }),
    []
  );

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title={category.label}
        description={category.description}
        path={category.path}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: category.label, path: category.path },
        ]}
      />

      <div className="max-w-2xl">
        <PageBadge tone={MAGNET_TYPE_TONES[category.type]}>{category.label}</PageBadge>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{category.heading}</h1>
        <p className="mt-5 text-lg text-ink-muted">{category.description}</p>
      </div>

      <div className="mt-14">
        {loading ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="aspect-square rounded-xl" />
            ))}
          </div>
        ) : articles?.length ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {articles.map((article) => (
              <SocialTile key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState title={category.emptyTitle} description={category.emptyDescription} />
        )}
      </div>
    </Container>
  );
}
