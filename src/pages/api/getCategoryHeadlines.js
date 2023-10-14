export const getCategoryHeadlines = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data ? data.articles : [];
}