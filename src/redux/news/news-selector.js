export const selectNews = state => state.news.items;
export const selectFilter = state => state.news.filter;
export const selectFilteredNews = state => {const news = selectNews(state)
    const filter  = selectFilter(state)
    const filteredNews = news.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
    const  compareDate = (a, b) =>  {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB - dateA;
      }

    return filteredNews.sort(compareDate)
}

