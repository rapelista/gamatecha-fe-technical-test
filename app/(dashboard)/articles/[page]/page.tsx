import { Articles } from "@/components/dashboard/articles";
import { ArticlesEmpty } from "@/components/dashboard/articles-empty";
import { auth } from "auth";
import { redirect } from "next/navigation";

const getArticlesByPage = async (accessToken: string, id: string) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/articles?page=" + id,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    if (!res.ok) {
        return [];
    }
    return await res.json();
};

export default async function ArticlePage({
    params,
}: {
    params: { page: string };
}) {
    if (parseInt(params.page) > 2) redirect("/articles/2");

    const session = await auth();
    const {
        jwt: { access },
    } = session;
    const { data: articles } = await getArticlesByPage(access, params.page);

    return (
        <>
            {articles && articles.length === 0 ? (
                <ArticlesEmpty />
            ) : (
                <Articles articles={articles} page={params.page} />
            )}
        </>
    );
}
