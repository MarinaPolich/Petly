export const noticesSelector = (state) => state.notices.items;
export const filterSelector = (state) => state.notices.filter;
// export const filteredNoticesSelector = (state) => {
//   const notices = noticesSelector(state);

//   const filter = filterSelector(state);
//   const filteredNotices = notices.filter((item) =>
//     item.title.toLowerCase().includes(filter.toLowerCase())
//   );

//   const compareDate = (a, b) => {
//     const dateA = new Date(a.date);
//     const dateB = new Date(b.date);
//     return dateB - dateA;
//   };

//   return filteredNotices.sort(compareDate);
// };
