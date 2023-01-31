export const selectNews = state => state.news.items;
export const selectFilter = state => state.news.filter;
export const selectFilteredNews = state => {const news = selectNews(state)
    const filter  = selectFilter(state)
    return news.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
}